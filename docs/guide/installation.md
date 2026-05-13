# 安装

## 项目依赖

- Node.js >= 18
- pnpm >= 10

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/your-repo/dep-guard.git
cd dep-guard
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 构建项目

```bash
pnpm build
```

## 全局安装 CLI

如果你想全局使用 `github-audit` 命令：

```bash
# 设置 pnpm 环境
pnpm setup

# 全局链接
pnpm link --global

# 现在可以全局使用
github-audit --version
github-audit -r ./my-project
```

## 验证安装

```bash
# 查看 CLI 帮助
pnpm cli:dev --help

# 查看 MCP 服务器
pnpm mcp:dev --help
```
