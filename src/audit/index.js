import { generateAuditJson } from "./generateAuditJson.js";
export default async function audit(spaceDir) {
  const auditResultPath = await generateAuditJson(spaceDir);
  console.log(auditResultPath);
}
