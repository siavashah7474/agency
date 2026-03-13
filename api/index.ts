import type { VercelRequest, VercelResponse } from "@vercel/node";
import { app } from "../server/app";
import { registerRoutes } from "../server/routes";

let initialized = false;

async function init() {
  if (!initialized) {
    await registerRoutes(app);
    initialized = true;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await init();
  return app(req as any, res as any);
}
