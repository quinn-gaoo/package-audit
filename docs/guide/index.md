# 快速开始

Dep-Guard 是一个用于审计 GitHub 仓库 package.json 依赖的工具，支持 CLI 和 MCP 集成。

## 前置要求

- Node.js >= 18
- pnpm >= 10

## 安装

```bash
# 克隆项目
git clone https://github.com/your-repo/dep-guard.git
cd dep-guard

# 安装依赖
pnpm install

# 构建项目
pnpm build
```

## 快速使用

### CLI 方式

```bash
# 审计当前目录
pnpm cli:dev

# 指定项目路径
pnpm cli:dev -r ./my-project

# 指定输出目录
pnpm cli:dev -o ./audit-results
```

### MCP 方式

```bash
# 启动 MCP 服务器
pnpm mcp:dev
```

## 下一步

- 查看 [CLI 完整使用指南](/cli/)
- 了解 [MCP 集成](/mcp/)
