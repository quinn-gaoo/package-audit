import { spawn } from "child_process";

/**
 * 执行命令，支持超时和进度回调
 */
export default function runCommand(command, args = [], options = {}) {
  const {
    cwd = process.cwd(),
    timeout = 60000,
    onData = console.log, // 实时输出回调
    env = process.env,
  } = options;

  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      env,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let timeoutId;

    // 超时处理
    if (timeout > 0) {
      timeoutId = setTimeout(() => {
        child.kill();
        reject(new Error(`命令超时: ${command}`));
      }, timeout);
    }

    // 收集输出
    child.stdout.on("data", (data) => {
      const chunk = data.toString();
      stdout += chunk;
      onData?.(chunk, "stdout");
    });

    child.stderr.on("data", (data) => {
      const chunk = data.toString();
      stderr += chunk;
      onData?.(chunk, "stderr");
    });

    child.on("error", (err) => {
      clearTimeout(timeoutId);
      reject(err);
    });

    child.on("close", (code) => {
      clearTimeout(timeoutId);

      if (code !== 0) {
        reject(new Error(`退出码 ${code}: ${stderr || stdout}`));
      } else {
        resolve({ stdout, stderr, code });
      }
    });
  });
}
