import { McpServer, StdioServerTransport } from '@modelcontextprotocol/server';
import * as z from 'zod';
import audit from '../index.js';

const server = new McpServer({
  name: 'package-audit-mcp',
  version: '1.0.0',
  description: "Package Audit MCP 服务器 - 用于审计 package.json 文件",
});

server.registerTool("audit", {
  title: "Package.json 审计",
  description: "审计指定项目的 package.json，检查依赖漏洞和风险",
  inputSchema: z.object({
    root: z.string().optional().describe("项目根路径，支持本地路径或 GitHub URL，默认当前目录"),
    output: z.string().optional().describe("输出文件路径，默认当前目录"),
    filename: z.string().optional().describe("输出文件名，默认 audit-result"),
  }),
}, async ({ root, output, filename }) => {
  try {
    const result = await audit({
      root: root || process.cwd(),
      output: output || process.cwd(),
      filename: filename || 'audit-result',
      fileType: 'json'
    });

    return {
      content: [
        {
          type: 'text',
          text: `✅ 审计完成！\n\n**项目路径:** ${root || process.cwd()}\n**输出文件:** ${result.outputPath}\n\n**审计结果:**\n- 漏洞数量: ${result.metadata?.total || 0}\n- 高危漏洞: ${result.metadata?.high || 0}\n- 中危漏洞: ${result.metadata?.moderate || 0}\n- 低危漏洞: ${result.metadata?.low || 0}`,
        }
      ]
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: 'text',
          text: `❌ 审计失败: ${errorMessage}`,
        }
      ],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
server.connect(transport);
