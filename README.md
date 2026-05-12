# Dep-Guard

Dependency audit tool with MCP support - GitHub 仓库 package.json 审计工具

## 功能特性

- ✅ 分析项目依赖安全性
- ✅ 生成审计报告
- ✅ 支持 CLI 命令行工具
- ✅ 支持 MCP (Model Context Protocol) 集成

## 安装

```bash
# 安装依赖
pnpm install

# 构建项目
pnpm build
```

## CLI 命令

### 基本使用

```bash
# 查看帮助
pnpm cli:dev --help

# 审计当前目录
pnpm cli:dev

# 指定项目路径和输出目录
pnpm cli:dev -r ./my-project -o ./output

# 指定输出文件名
pnpm cli:dev -r ./my-project -o ./output -f audit.json
```

### 命令行参数

| 参数 | 缩写 | 描述 | 默认值 |
|------|------|------|--------|
| `--root` | `-r` | 项目根路径 | 当前目录 |
| `--output` | `-o` | 输出文件路径 | 当前目录 |
| `--filename` | `-f` | 输出文件名 | `audit-result.json` |
| `--version` | `-V` | 显示版本号 | - |
| `--help` | `-h` | 显示帮助信息 | - |

### 示例

```bash
# 审计当前目录，输出到 audit 文件夹
pnpm cli:dev -o ./audit

# 审计指定项目
pnpm cli:dev -r /path/to/project -o /path/to/output

# 使用完整参数
pnpm cli:dev --root ./my-project --output ./results --filename security-audit.json
```

## 脚本命令

| 命令 | 描述 |
|------|------|
| `pnpm build` | 构建项目 |
| `pnpm dev` | 开发模式运行主入口 |
| `pnpm cli:dev` | 开发模式运行 CLI |
| `pnpm cli:test` | 测试 CLI 帮助信息 |
| `pnpm test` | 运行测试 |
| `pnpm mcp:dev` | 运行 MCP 服务器 |
| `pnpm inspector` | 启动 MCP 调试工具 |

## MCP 支持

启动 MCP 服务器：

```bash
pnpm mcp:dev
```

使用 inspector 调试：

```bash
pnpm inspector
```

## 项目结构

```
audit-mcp/
├── src/
│   ├── common/          # 工具函数和公共模块
│   ├── mcp/             # MCP 服务器代码
│   ├── cli.ts           # CLI 入口文件
│   ├── index.ts         # 主入口
│   └── test.ts          # 测试文件
├── package.json
├── tsconfig.json
└── README.md
```

## 全局安装

```bash
# 先设置 pnpm 环境
pnpm setup

# 全局安装
pnpm link --global

# 现在可以全局使用
github-audit --version
github-audit -r ./my-project
```

## License

ISC
