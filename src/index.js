import { createWorkspace } from "./common/createWorkspace.js";
export async function auditPackage(projectPath, options) {
  const workspace = options?.saveDir || (await createWorkspace());
}

auditPackage();
