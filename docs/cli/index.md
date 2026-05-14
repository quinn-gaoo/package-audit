# CLI 使用指南

`pkad` 是 `@quinn-gaoo/package-audit` 提供的命令行工具，用于审计项目依赖安全性。

## 基本使用

```bash
# 审计当前目录
pkad

# 审计指定项目
pkad -r /path/to/project

# 指定输出目录
pkad -o ./audit-results

# 组合使用
pkad -r ./my-project -o ./results -f security-audit
```

## 输出结果

工具会在指定目录生成 Markdown 格式的审计报告，包含：

- 项目依赖信息
- 漏洞统计（高危、中危、低危）
- 依赖路径分析
- 修复建议

## 支持的项目类型

### 本地项目

```bash
pkad -r ./my-project
```

### GitHub 仓库

```bash
pkad -r https://github.com/username/repo
pkad -r https://github.com/username/repo/tree/main/packages/my-package
```

## 常见场景

### 场景一：快速审计当前项目

```bash
cd my-project
pkad
```

审计报告将生成在当前目录。

### 场景二：批量审计多个项目

```bash
# 审计多个项目到不同目录
pkad -r ./project-a -o ./audit-results/project-a
pkad -r ./project-b -o ./audit-results/project-b
```

### 场景三：集成到 CI/CD

```yaml
# GitHub Actions 示例
- name: Audit dependencies
  run: |
    npm install -g @quinn-gaoo/package-audit
    pkad -r ./ -o ./audit-report
```
