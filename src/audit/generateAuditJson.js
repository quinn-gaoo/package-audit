export async function generateAuditJson(workspace) {
  // execa 也支持流式
  const npm = execa("npm", ["audit", "--json"], {
    cwd: workspace,
    buffer: false, // 关键：禁用内存缓冲
    reject: false, // 有漏洞时不抛错
  });

  const auditResultPath = path.join(workspace, "audit-result.json");
  const writeStream = fs.createWriteStream(
    path.join(workspace, "audit-result.json"),
  );
  npm.stdout.pipe(writeStream);

  await npm;
  return auditResultPath;
}
