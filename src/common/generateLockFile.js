import fs from "fs";
import runCommand from "./runCommand.js";
import { execa } from "execa";
import path from "path";

export async function generateLockFile(workspace, packageJson) {
  // 写入文件
  const lockFilePath = `${workspace}/package.json`;
  const lockFileContent = JSON.stringify(packageJson, null, 2);
  console.log(lockFileContent);
  fs.promises.writeFile(lockFilePath, lockFileContent, "utf-8");

  await runCommand("npm", ["install", "--package-lock-only"], {
    cwd: workspace,
    onData: (data, type) => {
      console.log(`[${type}] ${data}`);
    },
  });

  // execa 也支持流式
  const npm = execa("npm", ["audit", "--json"], {
    cwd: workspace,
    buffer: false, // 关键：禁用内存缓冲
    reject: false, // 有漏洞时不抛错
  });

  // 管道到文件
  const writeStream = fs.createWriteStream(
    path.join(workspace, "audit-result.json"),
  );
  npm.stdout.pipe(writeStream);

  await npm; // 等待完成
  console.log("流式写入完成");

  // const cmd = `cd ${workspace} && npm install --package-lock-only --force`;
  // const child = spawn(cmd, { shell: true });
  // child.on("error", (err) => {
  //   // clearTimeout(timeoutId);
  //   console.log(err);
  // });

  // child.on("close", (code) => {
  //   // clearTimeout(timeoutId);

  //   if (code !== 0) {
  //     console.log(new Error(`退出码 ${code}`));
  //   } else {
  //     console.log({ code });
  //   }
  // });

  // spawn(cmd, { shell: true, stdio: "inherit" });
}
