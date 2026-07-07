import { spawnSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const bun = process.platform === "win32" ? "bun.cmd" : "bun";
const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const initialCwd = process.cwd();
const webDir = join(repoRoot, "packages", "web");
const webDist = join(webDir, "dist");
const targetDist = resolve(initialCwd, "dist");

const build = spawnSync(bun, ["run", "build"], {
  cwd: webDir,
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

if (targetDist !== webDist) {
  rmSync(targetDist, { recursive: true, force: true });
  cpSync(webDist, targetDist, { recursive: true });
}

if (!existsSync(join(targetDist, "index.html"))) {
  console.error(`Expected ${targetDist}/index.html after web build.`);
  process.exit(1);
}
