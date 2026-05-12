import { McpServer, StdioServerTransport } from '@modelcontextprotocol/server';
import * as z from 'zod';

const server = new McpServer({
  name: 'mcp',
  version: '1.0.0',
  description: "MCP 服务器",
});

server.registerTool("add", {
  title: "两数求和",
  description: "对两个数字进行求和",
  inputSchema: z.object({
    a: z.number().describe("第一个数字"),
    b: z.number().describe("第二个数字"),
  }),
}, ({ a, b }) => {
  return {
    content: [
      {
        type: 'text',
        text: `两数和是：${a + b}`,
      }
    ]
  };
});

const transport = new StdioServerTransport();
server.connect(transport);