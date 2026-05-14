# 命令行参数

## 选项列表

| 参数         | 缩写 | 描述                                    | 默认值         |
| ------------ | ---- | --------------------------------------- | -------------- |
| `--root`     | `-r` | 项目根路径（支持本地路径或 GitHub URL） | 当前目录       |
| `--output`   | `-o` | 输出文件路径                            | 当前目录       |
| `--filename` | `-f` | 输出文件名（不含扩展名）                | `audit-result` |
| `--version`  | `-V` | 显示版本号                              | -              |
| `--help`     | `-h` | 显示帮助信息                            | -              |

## 使用示例

### 查看帮助

```bash
pkad --help
# 或
pkad -h
```

### 查看版本

```bash
pkad --version
# 或
pkad -V
```

### 指定项目路径

```bash
# 本地项目
pkad -r ./my-project
pkad --root /path/to/project

# GitHub 仓库
pkad -r https://github.com/username/repo
pkad -r https://github.com/username/repo/tree/main/packages/my-package
```

### 指定输出目录

```bash
pkad -o ./audit-results
pkad --output /tmp/audit-report
```

### 指定输出文件名

```bash
pkad -f security-audit
pkad --filename vulnerability-report
```

### 完整示例

```bash
pkad \
  --root ./my-project \
  --output ./results \
  --filename security-report
```

## 示例输出

```bash
$ pkad -r ./my-project -o ./audit
项目依赖审计中...
项目依赖审计完成
审计结果存放在: ./audit/audit-result.md
```

生成的文件：

- `audit-result.md` - Markdown 格式的审计报告
