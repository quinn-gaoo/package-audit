import audit from '.';

audit({
  root: 'https://github.com/webpack/webpack-dev-server/tree/v4.9.3',
  output: './audit',
});


// // test format
// import format from './common/format';
// import render from './common/render';
// import { writeMD } from './common/utils';
// const result = await format('/Users/quinn/work/quinn-gaoo/audit-mcp/core/src/common/audit-mcp/audit-result.json');
// const contentMD = render(result);
// await writeMD("/Users/quinn/work/quinn-gaoo/audit-mcp/core/src/common/audit-mcp/audit.md", contentMD);



