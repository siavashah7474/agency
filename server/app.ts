import { type Server } from "node:http";
import net from "node:net";

import express, {
  type Express,
  type Request,
  Response,
  NextFunction,
} from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { registerRoutes } from "./routes";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export const app = express();

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:", "https://www.google-analytics.com", "https://www.googletagmanager.com"],
        scriptSrc: [
          "'self'",
          ...(process.env.NODE_ENV !== "production" ? ["'unsafe-inline'", "'unsafe-eval'"] : []),
          "https://www.googletagmanager.com",
          "https://www.google-analytics.com",
        ],
        connectSrc: [
          "'self'",
          "https://www.google-analytics.com",
          "https://analytics.google.com",
          "https://www.googletagmanager.com",
        ],
        frameSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

// CSRF: reject mutating requests from disallowed origins in production
app.use((req, res, next) => {
  if (["POST", "PUT", "DELETE", "PATCH"].includes(req.method) && process.env.NODE_ENV === "production") {
    const origin = req.headers.origin;
    const allowedOrigins = (process.env.ALLOWED_ORIGINS || "https://webimotagency.com")
      .split(",")
      .map((o) => o.trim());
    if (origin && !allowedOrigins.includes(origin)) {
      return res.status(403).json({ message: "Forbidden" });
    }
  }
  next();
});

// Rate limiting for API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to API routes
app.use("/api", apiLimiter);

// Stricter rate limiting for form submissions
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit form submissions to 5 per 15 minutes
  message: "Too many form submissions, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/booking", formLimiter);
app.use("/api/contact", formLimiter);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

async function findAvailablePort(
  preferredPort: number,
  host = "0.0.0.0",
  maxAttempts = 20
) {
  const tryPort = (port: number) =>
    new Promise<boolean>((resolve) => {
      const tester = net
        .createServer()
        .once("error", () => {
          tester.close(() => resolve(false));
        })
        .once("listening", () => {
          tester.close(() => resolve(true));
        })
        .listen(port, host);
    });

  let port = preferredPort;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (await tryPort(port)) {
      return port;
    }
    port += 1;
  }

  // Fall back to an ephemeral port assigned by the OS.
  return new Promise<number>((resolve, reject) => {
    const tester = net
      .createServer()
      .once("error", reject)
      .once("listening", () => {
        const address = tester.address();
        tester.close(() => {
          if (typeof address === "object" && address?.port) {
            resolve(address.port);
          } else {
            reject(new Error("Unable to determine available port"));
          }
        });
      })
      .listen(0, host);
  });
}

export default async function runApp(
  setup: (app: Express, server: Server) => Promise<void>
) {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
  });

  // importantly run the final setup after setting up all the other routes so
  // the catch-all route doesn't interfere with the other routes
  await setup(app, server);

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const desiredPort = parseInt(process.env.PORT || "5050", 10);
  const port = await findAvailablePort(desiredPort);

  if (port !== desiredPort) {
    log(
      `port ${desiredPort} is in use, automatically switched to ${port}`,
      "server"
    );
  }

  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    }
  );
}
