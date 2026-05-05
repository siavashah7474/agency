import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const tmpDir = path.join(projectRoot, ".tmp");
mkdirSync(tmpDir, { recursive: true });

// Load .env file manually (Node's --env-file can't be passed when spawning tsx)
const envFilePath = path.join(projectRoot, ".env");
const dotEnv = {};
if (existsSync(envFilePath)) {
  const lines = readFileSync(envFilePath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    dotEnv[key] = value;
  }
}

const env = {
  ...dotEnv,
  ...process.env,
  NODE_ENV: "development",
  TMPDIR: tmpDir,
  TMP: tmpDir,
  TEMP: tmpDir,
};

const tsxExecutable = path.join(
  projectRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsx.cmd" : "tsx",
);

const command = existsSync(tsxExecutable)
  ? tsxExecutable
  : process.platform === "win32"
    ? "npx.cmd"
    : "npx";

const args =
  command === tsxExecutable
    ? ["server/index-dev.ts"]
    : ["tsx", "server/index-dev.ts"];

const child = spawn(command, args, {
  stdio: "inherit",
  env,
});

child.on("close", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});
