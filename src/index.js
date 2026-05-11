import { parseProject } from "./common/parseProject.js";
import { createWorkspace } from "./common/createWorkspace.js";
import { generateLockFile } from "./common/generateLockFile.js";

export async function auditPackage(projectPath, options) {
  const workspace = options?.saveDir || (await createWorkspace());
  console.log(`Workspace created at: ${workspace}`);

  const packageJson = await parseProject(projectPath);

  await generateLockFile(workspace, packageJson);
}

// auditPackage("/Users/quinn/work/polkassembly/polkassembly-v2");
auditPackage("https://github.com/quinn-gaoo/weui");
