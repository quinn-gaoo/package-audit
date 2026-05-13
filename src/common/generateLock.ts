import { promisify } from 'util';
import { exec } from 'child_process';

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


export default async function generateLockFile(workDir: string) {
  const cmd = "npm install --package-lock-only --no-audit --ignore-scripts";
  console.log("package-lock 生成中...")
  await runCommand(cmd, workDir);
  console.log("generateLockFile:", workDir)
  console.log("package-lock 生成完成")
}


