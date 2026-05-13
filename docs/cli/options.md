# 命令行参数

## 选项列表

| 参数 | 缩写 | 描述 | 默认值 |
|------|------|------|--------|
| `--root` | `-r` | 项目根路径 | 当前目录 (`.`) |
| `--output` | `-o` | 输出文件路径 | 当前目录 (`.`) |
| `--filename` | `-f` | 输出文件名 | `audit-result.json` |
| `--version` | `-V` | 显示版本号 | - |
| `--help` | `-h` | 显示帮助信息 | - |

## 示例

### 查看帮助

```bash
pnpm cli:dev --help
# 或
pnpm cli:dev -h
```

### 查看版本

```bash
pnpm cli:dev --version
# 或
pnpm cli:dev -V
```

### 指定项目路径

```bash
pnpm cli:dev -r /path/to/project
# 或
pnpm cli:dev --root /path/to/project
```

### 指定输出目录

```bash
pnpm cli:dev -o ./audit-results
# 或
pnpm cli:dev --output ./audit-results
```

### 指定输出文件名

```bash
pnpm cli:dev -f my-audit.json
# 或
pnpm cli:dev --filename my-audit.json
```

### 完整示例

```bash
pnpm cli:dev \
  --root ./my-project \
  --output ./results \
  --filename security-audit.json
```
