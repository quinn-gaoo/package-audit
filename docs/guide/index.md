# 快速开始

@quinn-gaoo/package-audit 是一个用于审计 package.json 依赖的工具，支持 CLI 和 MCP 集成。

## 前置要求

- Node.js >= 18
- pnpm >= 10

## 安装

### 方式一：通过 npm 安装

```bash
npm install -g @quinn-gaoo/package-audit
```

### 方式二：本地开发

```bash
# 克隆项目
git clone https://github.com/quinn-gaoo/package-audit.git
cd package-audit

# 安装依赖
pnpm install

# 构建项目
pnpm build
```

## 快速使用

### CLI 方式

```bash
# 审计当前目录
pkad

# 指定项目路径
pkad -r ./my-project

# 指定输出目录
pkad -o ./audit-results

# 指定输出文件名
pkad -f my-audit-report
```

### MCP 方式

```bash
# 启动 MCP 服务器
pnpm mcp:dev
```

## 下一步

- 查看 [CLI 完整使用指南](/cli/)
- 了解 [MCP 集成](/mcp/)
