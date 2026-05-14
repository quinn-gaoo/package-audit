# 安装指南

## 前置要求

- Node.js >= 18
- npm >= 9

## 安装方式

### 方式一：全局安装（推荐）

```bash
npm install -g @quinn-gaoo/package-audit
```

安装完成后，即可全局使用 `pkad` 命令：

```bash
pkad --help
```

### 方式二：项目内安装

```bash
npm install @quinn-gaoo/package-audit
```

在项目中使用：

```bash
npx pkad --help
```

或在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "audit": "pkad -r ./ -o ./audit-report"
  }
}
```

然后运行：

```bash
npm run audit
```

## 验证安装

```bash
# 查看版本
pkad --version

# 查看帮助
pkad --help

# 执行一次审计测试
pkad -r ./ -o ./test-audit
```

## 更新包

```bash
npm update -g @quinn-gaoo/package-audit
```

## 卸载包

```bash
npm uninstall -g @quinn-gaoo/package-audit
```
