import fs from 'fs';
import os from 'os';
import path from 'path';

export function getWorkspaceDir() {
  // const workspaceDir = path.join(os.tmpdir(), 'audit-mcp');
  // const workspacePath = path.join(workspaceDir, Date.now().toString());

  const workspaceDir = path.join(import.meta.dirname, 'audit-mcp');
  const workspacePath = path.join(workspaceDir);

  fs.mkdirSync(workspacePath, { recursive: true });
  console.log("workspacePath:", workspacePath)
  return workspacePath;
}

// 从文件参数获取文件夹名
export function getDirName(root: string) {
  // return path.dirname(filename);
}

export function getPackageJsonFile(root: string, workDir: string) {
  if (root.startsWith('http')) {
  } else {
    const packageJson = path.resolve(root, 'package.json');
    console.log("package.json:", packageJson)
    // 检查文件是否存在
    if (!fs.existsSync(packageJson)) {
      throw new Error(`package.json file not found in ${packageJson}`);
    }
    // 将文件复制到工作目录中
    fs.copyFileSync(packageJson, path.join(workDir, 'package.json'));
  }
}

