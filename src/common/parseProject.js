import path, { parse } from "path";
import fs from "fs";
import parseRemoteProject from "./parseRemoteProject.js";

export function parseProject(projectPath) {
  if (projectPath.startsWith("http")) {
    return parseRemoteProject(projectPath);
  } else {
    return parseLocalProject(projectPath);
  }
}

async function parseLocalProject(projectPath) {
  const jsonPath = path.join(projectPath, "package.json");
  const jsonStr = await fs.promises.readFile(jsonPath, "utf-8");
  return JSON.parse(jsonStr);
}
