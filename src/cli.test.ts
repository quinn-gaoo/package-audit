import { execa } from 'execa';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function runCli(args: string[] = []) {
  const cliPath = path.join(__dirname, 'cli.ts');
  return execa('npx', ['tsx', cliPath, ...args]);
}

async function testCli() {
  console.log('🧪 开始测试 CLI...\n');

  try {
    // 测试 1: 帮助信息
    console.log('📝 测试 1: 查看帮助信息');
    const helpResult = await runCli(['--help']);
    console.log('✅ 帮助信息测试通过\n');

    // 测试 2: 版本信息
    console.log('📝 测试 2: 查看版本信息');
    const versionResult = await runCli(['--version']);
    console.log(versionResult.stdout);
    console.log('✅ 版本信息测试通过\n');

    // 测试 3: 使用默认参数运行
    console.log('📝 测试 3: 使用默认参数运行');
    const defaultResult = await runCli([]);
    console.log('✅ 默认参数测试通过\n');

    // 测试 4: 指定项目路径
    console.log('📝 测试 4: 指定项目路径');
    const cwdResult = await runCli(['-r', process.cwd()]);
    console.log('✅ 指定路径测试通过\n');

    console.log('🎉 所有 CLI 测试通过！');

  } catch (error) {
    console.error('❌ CLI 测试失败:', error instanceof Error ? error.message : String(error));
    if (error instanceof Error && 'stdout' in error) {
      console.error('输出:', (error as any).stdout);
    }
    if (error instanceof Error && 'stderr' in error) {
      console.error('错误输出:', (error as any).stderr);
    }
    process.exit(1);
  }
}

// 运行测试
testCli();
