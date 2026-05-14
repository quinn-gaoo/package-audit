# MCP 支持

@quinn-gaoo/package-audit 支持 Model Context Protocol (MCP)，可以与各种 AI 工具集成。

## 启动 MCP 服务器

```bash
pnpm mcp:dev
```

服务器将启动并通过 Stdio 通信，等待 MCP 客户端连接。

## 使用 Inspector 调试

MCP 提供了一个调试工具，可以测试 MCP 服务器：

```bash
pnpm inspector
```

这将启动一个可视化的调试界面，你可以：

- 测试 MCP 工具调用
- 查看请求和响应
- 调试连接问题

## MCP 工具

MCP 服务器提供以下工具：

### add

两数求和工具（示例工具）

**参数：**

- `a`: 第一个数字 (number)
- `b`: 第二个数字 (number)

**返回值：**

- `text`: 计算结果文本

### audit

package.json 审计工具

**参数：**

- `root`: 项目根路径，支持本地路径或 GitHub URL (string, 可选)
- `output`: 输出文件路径 (string, 可选)
- `filename`: 输出文件名 (string, 可选)

**返回值：**

- `text`: 审计结果摘要

## 集成到 AI 工具

将 MCP 服务器集成到你的 AI 工具中，示例配置：

```json
{
  "mcpServers": {
    "package-audit": {
      "command": "node",
      "args": ["./build/mcp/index.js"]
    }
  }
}
```

## 常见问题

### 连接超时

如果遇到连接超时，确保：

1. MCP 服务器已正确启动
2. 服务器路径正确
3. 查看服务器日志排查问题

### 工具调用失败

检查输入参数格式是否正确，确保符合工具 schema 定义。
