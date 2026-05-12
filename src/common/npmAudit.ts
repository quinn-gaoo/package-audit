import { execa } from "execa";
import { runCommand } from "./generateLock";
import fs from "fs";
import path from "path";

export default async function npmAudit(workDir: string) {
  console.log("项目依赖审计中...");
  const npm = execa("npm", ["audit", "--json"], {
    cwd: workDir,
    buffer: false,
    reject: false,
  });

  const resultPath = path.join(workDir, "audit-result.json")

  const writeStream = fs.createWriteStream(
    resultPath,
  );
  npm.stdout.pipe(writeStream);

  await npm;
  console.log("项目依赖审计完成");
  return resultPath;
}