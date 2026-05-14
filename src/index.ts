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

export type AuditResult = {
  outputPath: string;
  metadata?: {
    total?: number;
    high?: number;
    moderate?: number;
    low?: number;
  };
};

export default async function audit({
  root,
  output,
  filename = 'audit',
  fileType = 'json'
}: AuditOptions): Promise<AuditResult> {

  const workDir = getWorkspaceDir();
  const packageJsonPath = await getPackageJsonFile(root, workDir);
  if (!packageJsonPath) {
    throw new Error(`package.json file not found in ${packageJsonPath}`);
  }

  await generateLockFile(workDir);
  const resultPath = await npmAudit(workDir);
  const formattedResult = await format(resultPath);
  const contentMD = render(formattedResult);

  const outputPath = path.join(output, `${filename}.md`);
  console.log("审计结果存放在:", outputPath);
  await writeMD(outputPath, contentMD);

  await fs.promises.rm(workDir, { recursive: true });

  return {
    outputPath,
    metadata: formattedResult.metadata
  };
}
