# @quinn-gaoo/package-audit

package.json 审计工具，支持 CLI 和 MCP 集成，帮助你分析项目依赖安全性。

## 功能特性

- ✅ 分析项目依赖安全性，检测漏洞
- ✅ 生成详细的审计报告（Markdown 格式）
- ✅ 支持本地项目和 GitHub 仓库
- ✅ CLI 命令行工具，简单易用
- ✅ 支持 MCP (Model Context Protocol) 集成

## 安装

```bash
# 全局安装
npm install -g @quinn-gaoo/package-audit

# 或在项目中安装
npm install @quinn-gaoo/package-audit
```

## CLI 使用

### 基本命令

```bash
# 查看帮助
pkad --help

# 审计当前目录
pkad

# 指定项目路径
pkad -r ./my-project

# 指定输出目录
pkad -o ./audit-results

# 指定输出文件名
pkad -f security-report
```

### 命令行参数

| 参数 | 缩写 | 描述 | 默认值 |
|------|------|------|--------|
| `--root` | `-r` | 项目根路径（支持本地路径或 GitHub URL） | 当前目录 |
| `--output` | `-o` | 输出文件路径 | 当前目录 |
| `--filename` | `-f` | 输出文件名 | `audit-result` |
| `--version` | `-V` | 显示版本号 | - |
| `--help` | `-h` | 显示帮助信息 | - |

### 使用示例

```bash
# 审计当前目录，输出到 audit 文件夹
pkad -o ./audit

# 审计指定项目
pkad -r /path/to/project -o /path/to/output

# 使用完整参数
pkad --root ./my-project --output ./results --filename security-audit

# 审计 GitHub 仓库
pkad -r https://github.com/username/repo
```

### 输出结果

审计完成后，会在输出目录生成 Markdown 格式的审计报告，包含：
- 项目依赖信息
- 漏洞统计（高危、中危、低危）
- 依赖路径分析
- 修复建议

## MCP 支持

该工具支持 Model Context Protocol，可以与 AI 工具集成使用。

### 启动 MCP 服务器

```bash
# 安装依赖后启动
npx @quinn-gaoo/package-audit --mcp
```

### 工具列表

MCP 服务器提供以下工具：

#### `audit` - package.json 审计

**参数：**
- `root` (string, 可选): 项目根路径，支持本地路径或 GitHub URL
- `output` (string, 可选): 输出文件路径
- `filename` (string, 可选): 输出文件名

**返回值：**
- 审计结果摘要（文本格式）

## API 使用

```javascript
import audit from '@quinn-gaoo/package-audit';

const result = await audit({
  root: './my-project',
  output: './results',
  filename: 'security-report',
});

console.log('审计完成:', result.outputPath);
```

## 前置要求

- Node.js >= 18
- npm >= 9

## License

ISC
