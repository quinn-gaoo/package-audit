import audit from '.';

// audit({
//   root: '../src/common/workspace',
//   output: './audit',
// });


// // test format
import format from './common/format';
import render from './common/render';
import { writeMD } from './common/utils';
const result = await format('/Users/quinn/work/quinn-gaoo/audit-mcp/core/src/common/audit-mcp/audit-result.json');
const contentMD = render(result);
await writeMD("/Users/quinn/work/quinn-gaoo/audit-mcp/core/src/common/audit-mcp/audit.md", contentMD);



