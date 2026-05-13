import fs from 'fs';
import os from 'os';
import path from 'path';
import { writeJSON } from './utils.js';

export function getWorkspaceDir() {
  const workspaceDir = path.join(os.tmpdir(), 'audit-mcp');
  const workspacePath = path.join(workspaceDir, Date.now().toString());

  fs.mkdirSync(workspacePath, { recursive: true });
  console.log("workspacePath:", workspacePath)
  return workspacePath;
}

export async function getPackageJsonFile(root: string, workDir: string) {
  if (root.startsWith('http')) {
    return await getRemotePackageJsonFile(root, workDir);
  } else {
    const packageJson = path.resolve(root, 'package.json');
    console.log("package.json:", packageJson)
    // 检查文件是否存在
    if (!fs.existsSync(packageJson)) {
      throw new Error(`package.json file not found in ${packageJson}`);
    }
    const packageJsonPath = path.join(workDir, 'package.json');
    // 将文件复制到工作目录中
    await fs.promises.copyFile(packageJson, packageJsonPath);
    return packageJsonPath;
  }
}

async function getRemotePackageJsonFile(root: string, workDir: string) {
  const urlPattern = /^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)(?:\/tree\/([^\/]+))?(?:\/(.+))?$/;
  const match = root.match(urlPattern);

  if (!match) {
    throw new Error('Invalid GitHub URL format');
  }

  const owner = match[1];      // opensquare-network
  const repo = match[2];       // subsquare
  const branch = match[3] || 'main';  // main (默认)
  let subPath = match[4] || '';       // packages/collectives-next
  let filePath = subPath ? `${subPath}/package.json` : 'package.json';

  const apiUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
  console.log(apiUrl)
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  // 3. 解析 JSON
  const packageJson = await response.json();

  await writeJSON(path.join(workDir, 'package.json'), packageJson);
  return path.join(workDir, 'package.json');

}


