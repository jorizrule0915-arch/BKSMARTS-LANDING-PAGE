import { cpSync, existsSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";

const bun = process.platform === "win32" ? "bun.cmd" : "bun";
const build = spawnSync(bun, ["run", "build"], {
  cwd: "packages/web",
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

rmSync("dist", { recursive: true, force: true });
cpSync("packages/web/dist", "dist", { recursive: true });

if (!existsSync("dist/index.html")) {
  console.error("Expected dist/index.html after web build.");
  process.exit(1);
}
