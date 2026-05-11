// 创建临时工作目录
import { tmpdir } from "os";
import { mkdir, mkdtemp } from "fs/promises";
import path from "path";

const baseDir = import.meta.dirname;

export async function createWorkspace() {
  // const tempDir = await mkdtemp(path.join(tmpdir(), "audit-mcp-"));
  const workspaceDir = path.join(baseDir, "workspace");
  const tempDir =
    (await mkdir(workspaceDir, {
      recursive: true,
    })) || workspaceDir;
  return tempDir;
}
