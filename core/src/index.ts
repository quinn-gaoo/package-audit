import path from "path";
import { getPackageJsonFile, getWorkspaceDir } from "./common/file";
import format from "./common/format";
import generateLockFile from "./common/generateLock";
import npmAudit from "./common/npmAudit";
import render from "./common/render";
import { writeMD } from "./common/utils";


type AuditOptions = {
  root: string;
  output: string;
  filename?: string;
  fileType?: "md" | "json";
}
export default async function audit({
  root,
  output,
  filename = 'audit.md',
  fileType = 'json'
}: AuditOptions) {

  // 创建工作目录
  const workDir = getWorkspaceDir();
  const packageJson = getPackageJsonFile(root, workDir);

  // 生成锁文件
  await generateLockFile(workDir);
  const resultPath = await npmAudit(workDir);
  const formattedResult = await format(resultPath);
  const contentMD = render(formattedResult);
  await writeMD(path.join(output, filename), contentMD);


}

