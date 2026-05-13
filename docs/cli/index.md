# CLI 使用

`github-audit` 是一个用于审计项目依赖安全性的命令行工具。

## 基本使用

```bash
# 审计当前目录
pnpm cli:dev

# 审计指定项目
pnpm cli:dev -r /path/to/project

# 指定输出目录
pnpm cli:dev -o ./audit-results

# 组合使用
pnpm cli:dev -r ./my-project -o ./results -f audit.json
```

## 开发与生产

```bash
# 开发模式（使用 tsx 直接运行）
pnpm cli:dev

# 构建后运行
pnpm build
./build/cli.js -r ./my-project
```

## 输出结果

工具会在指定目录生成审计报告文件，默认文件名为 `audit-result.json`。
