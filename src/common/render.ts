const severityMap: Record<string, string> = {
  "low": "低危",
  "moderate": "中危",
  "high": "高危",
  "critical": "极其要中的",
}

export default function render(data: any) {
  const { metadata, bugLibs, deepResult } = data;
  const { total, info, low, moderate, high, critical } = metadata;

  return `
# 漏洞审计报告

您所审计的工程项目中共有 ${total} 个漏洞

## 漏洞等级分布

其中

- ${severityMap.low}: ${low}
- ${severityMap.moderate}: ${moderate}
- ${severityMap.high}: ${high}
- ${severityMap.critical}: ${critical}


>说明：
>
> - **${critical}**被认为是极其要中的漏洞，建议立即修复。
> - **${high}**被认为是高危漏洞，建议尽快修复。
> - **${moderate}**被认为是中危漏洞，选择在时间允许时修复。
> - **${low}**被认为是轻微漏洞，建议根据自行判断进行修复。
 

${bugRender(bugLibs)}

${x(deepResult)}



`
}


const bugRender = (data: any) => {
  let result = `
## 涉及到的漏洞

`

  for (const key in data) {
    const bug = data[key]
    // result.push(bug)
    console.log(bug)
    result += `
### ${bug.name}

${bugDesc(bug.via)}
`
  }

  return result

}
const bugDesc = (list: any[]) => {
  let result = `
**漏洞描述**:

  `
  for (const bug of list) {
    if (typeof bug === 'object') {
      result += `
- ${bug.title}
  - npm漏洞编号：${bug.source}
  - 漏洞详细说明：${bug.url}
  - 漏洞等级：${severityMap[bug.severity]}
  - 受影响版本：${bug.range}
`
    }

  }
  return result
}

const x = (deepResult: any) => {
  let result = `
## 影响到的库
`

  for (const key in deepResult) {
    const paths = deepResult[key]
    result += `
### ${key}

${getdepsPath(paths)}

`
  }

  return result
}

const getdepsPath = (paths: any[]) => {
  let res = ""
  paths.forEach(path => {
    res += `
- \`${path.join("` / `")}\`
    `
  })
  return res
}

