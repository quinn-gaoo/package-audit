import path from "path";
import { getPackageJsonFile, getWorkspaceDir } from "./common/file.js";
import format from "./common/format.js";
import generateLockFile from "./common/generateLock.js";
import npmAudit from "./common/npmAudit.js";
import render from "./common/render.js";
import { writeMD } from "./common/utils.js";
import fs from "fs";



type AuditOptions = {
  root: string;
  output: string;
  filename?: string;
  fileType?: "md" | "json";
}
export default async function audit({
  root,
  output,
  filename = 'audit',
  fileType = 'json'
}: AuditOptions) {

  // 创建工作目录
  const workDir = getWorkspaceDir();
  const packageJsonPath = await getPackageJsonFile(root, workDir);
  if (!packageJsonPath) {
    throw new Error(`package.json file not found in ${packageJsonPath}`);
  }

  // 生成锁文件
  await generateLockFile(workDir);
  const resultPath = await npmAudit(workDir);
  const formattedResult = await format(resultPath);
  const contentMD = render(formattedResult);

  console.log("审计结果存放在:", path.join(output, `${filename}.md`))
  await writeMD(path.join(output, `${filename}.md`), contentMD);

  // 删除临时工作目录
  await fs.promises.rm(workDir, { recursive: true });


}

