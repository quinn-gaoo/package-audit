import audit from '.';

// audit({
//   root: '../src/common/workspace',
//   output: './audit',
// });


// test format
import format from './common/format';
import render from './common/render';
const result = await format('/Users/quinn/work/quinn-gaoo/audit-mcp/core/src/common/audit-mcp/audit-result.json');
console.log(render(result))

