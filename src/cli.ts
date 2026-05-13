#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import audit from './index.js'; // 替换成你的 audit 方法

const program = new Command();

program
  .name('pkad')
  .description('package.json 审计工具')
  .version('1.0.0')
  .option('-r, --root <path>', '项目根路径', process.cwd())
  .option('-o, --output <path>', '输出文件路径', process.cwd())
  .option('-f, --filename <name>', '输出文件名', 'audit-result')
  .action(async (options) => {
    try {
      // 解析路径
      const rootPath = path.resolve(options.root);
      const outputPath = path.resolve(options.output);
      const fullOutputPath = path.join(outputPath, options.filename);

      console.log(`📁 项目路径: ${rootPath}`);
      console.log(`📄 输出文件: ${fullOutputPath}`);

      // 调用你的 audit 方法
      await audit({
        root: rootPath,
        output: outputPath,
        filename: options.filename
      });

      console.log('✅ 审计完成！');
      process.exit(0);
    } catch (error) {
      console.error('❌ 审计失败:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse();