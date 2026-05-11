// 根据远程藏库地址获取到pachage.json的内容
export default async function parseRemoteProject(projectPath) {
  const parsedUrl = new URL(projectPath);
  if (parsedUrl.hostname !== "github.com") {
    throw new Error("Only github.com is supported");
  }
  const [owner, repo] = parsedUrl.pathname.split("/").filter(Boolean);
  if (!owner || !repo) {
    throw new Error("Invalid GitHub repository URL");
  }
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/package.json`;
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch package.json: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const content = Buffer.from(data.content, "base64").toString("utf-8");
      return JSON.parse(content);
    });
}
