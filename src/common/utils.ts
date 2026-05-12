import { promisify } from 'util';
import { exec } from 'child_process';
import fs from "fs";
import path from 'path';

const execPromise = promisify(exec);

export async function runCommand(cmd: string, workDir: string) {
  try {
    const { stdout, stderr } = await execPromise(cmd, {
      cwd: workDir,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10 // 10MB 缓冲区
    });

    return {
      stdout: stdout.trim(),
      stderr: stderr.trim()
    };
  } catch (error: any) {
    console.error(error)
    throw new Error(`命令执行失败: ${error.message}\n${error.stderr || ''}`);
  }
}


export async function readJSON(filePath: string) {
  try {
    const jsonData = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(jsonData);
    return data;
  } catch (error: any) {
    console.error('读取 JSON 失败:', error.message);
    return null;
  }
}

export async function writeJSON(filePath: string, data: any) {
  try {
    // 确保文件路径存在
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error: any) {
    console.error('写入 JSON 失败:', error.message);
  }
}

export async function writeMD(filePath: string, content: string) {
  // 确保文件路径存在
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  try {
    await fs.promises.writeFile(filePath, content);
  } catch (error: any) {
    console.error('写入 MD 文件失败:', error.message);
  }
}