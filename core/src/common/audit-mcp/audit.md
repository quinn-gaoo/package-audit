
# 漏洞审计报告

您所审计的工程项目中共有 125 个漏洞

## 漏洞等级分布

其中

- 低危: 8
- 中危: 80
- 高危: 28
- 极其要中的: 9


>说明：
>
> - **9**被认为是极其要中的漏洞，建议立即修复。
> - **28**被认为是高危漏洞，建议尽快修复。
> - **80**被认为是中危漏洞，选择在时间允许时修复。
> - **8**被认为是轻微漏洞，建议根据自行判断进行修复。
 


## 涉及到的漏洞


### braces


**漏洞描述**:

  
- Uncontrolled resource consumption in braces
  - npm漏洞编号：1098094
  - 漏洞详细说明：https://github.com/advisories/GHSA-grv7-fg5c-xmjg
  - 漏洞等级：高危
  - 受影响版本：<3.0.3


### debug


**漏洞描述**:

  
- Regular Expression Denial of Service in debug
  - npm漏洞编号：1096793
  - 漏洞详细说明：https://github.com/advisories/GHSA-gxpj-cx7g-858c
  - 漏洞等级：低危
  - 受影响版本：>=3.2.0 <3.2.7


### diff


**漏洞描述**:

  
- jsdiff has a Denial of Service vulnerability in parsePatch and applyPatch
  - npm漏洞编号：1112703
  - 漏洞详细说明：https://github.com/advisories/GHSA-73rr-hh4g-fpgx
  - 漏洞等级：低危
  - 受影响版本：<3.5.1


### ejs


**漏洞描述**:

  
- ejs template injection vulnerability
  - npm漏洞编号：1089270
  - 漏洞详细说明：https://github.com/advisories/GHSA-phwq-j96m-2c2q
  - 漏洞等级：极其要中的
  - 受影响版本：<3.1.7

- ejs lacks certain pollution protection
  - npm漏洞编号：1098366
  - 漏洞详细说明：https://github.com/advisories/GHSA-ghr5-ch3p-vcr6
  - 漏洞等级：中危
  - 受影响版本：<3.1.10


### elliptic


**漏洞描述**:

  
- Elliptic Uses a Cryptographic Primitive with a Risky Implementation
  - npm漏洞编号：1112030
  - 漏洞详细说明：https://github.com/advisories/GHSA-848j-6mx2-7j84
  - 漏洞等级：低危
  - 受影响版本：<=6.6.1


### esbuild


**漏洞描述**:

  
- esbuild enables any website to send any requests to the development server and read the response
  - npm漏洞编号：1102341
  - 漏洞详细说明：https://github.com/advisories/GHSA-67mh-4wv8-2f99
  - 漏洞等级：中危
  - 受影响版本：<=0.24.2


### form-data


**漏洞描述**:

  
- form-data uses unsafe random function in form-data for choosing boundary
  - npm漏洞编号：1109540
  - 漏洞详细说明：https://github.com/advisories/GHSA-fjxv-7rqg-78g4
  - 漏洞等级：极其要中的
  - 受影响版本：<2.5.4


### glob-parent


**漏洞描述**:

  
- glob-parent vulnerable to Regular Expression Denial of Service in enclosure regex
  - npm漏洞编号：1097712
  - 漏洞详细说明：https://github.com/advisories/GHSA-ww39-953v-wcq6
  - 漏洞等级：高危
  - 受影响版本：>=4.0.0 <5.1.2


### got


**漏洞描述**:

  
- Got allows a redirect to a UNIX socket
  - npm漏洞编号：1088948
  - 漏洞详细说明：https://github.com/advisories/GHSA-pfrx-2q88-qq97
  - 漏洞等级：中危
  - 受影响版本：<11.8.5


### highlight.js


**漏洞描述**:

  
- ReDOS vulnerabities: multiple grammars
  - npm漏洞编号：1086450
  - 漏洞详细说明：https://github.com/advisories/GHSA-7wwv-vh3v-89cq
  - 漏洞等级：中危
  - 受影响版本：>=9.0.0 <10.4.1


### html-minifier


**漏洞描述**:

  
- kangax html-minifier REDoS vulnerability
  - npm漏洞编号：1105440
  - 漏洞详细说明：https://github.com/advisories/GHSA-pfq8-rq6v-vf5m
  - 漏洞等级：高危
  - 受影响版本：<=4.0.0


### http-proxy-middleware


**漏洞描述**:

  
- Denial of service in http-proxy-middleware
  - npm漏洞编号：1100223
  - 漏洞详细说明：https://github.com/advisories/GHSA-c7qv-q95q-8v27
  - 漏洞等级：高危
  - 受影响版本：<2.0.7

- http-proxy-middleware allows fixRequestBody to proceed even if bodyParser has failed
  - npm漏洞编号：1104105
  - 漏洞详细说明：https://github.com/advisories/GHSA-9gqv-wp59-fq42
  - 漏洞等级：中危
  - 受影响版本：>=1.3.0 <2.0.9

- http-proxy-middleware can call writeBody twice because "else if" is not used
  - npm漏洞编号：1104106
  - 漏洞详细说明：https://github.com/advisories/GHSA-4www-5p9h-95mh
  - 漏洞等级：中危
  - 受影响版本：>=1.3.0 <2.0.8


### ip


**漏洞描述**:

  
- ip SSRF improper categorization in isPublic
  - npm漏洞编号：1101851
  - 漏洞详细说明：https://github.com/advisories/GHSA-2p57-rm9w-gvfp
  - 漏洞等级：高危
  - 受影响版本：<=2.0.1


### js-yaml


**漏洞描述**:

  
- js-yaml has prototype pollution in merge (<<)
  - npm漏洞编号：1112714
  - 漏洞详细说明：https://github.com/advisories/GHSA-mh29-5h37-fv8m
  - 漏洞等级：中危
  - 受影响版本：<3.14.2


### json5


**漏洞描述**:

  
- Prototype Pollution in JSON5 via Parse Method
  - npm漏洞编号：1096543
  - 漏洞详细说明：https://github.com/advisories/GHSA-9c47-m6qq-7p4h
  - 漏洞等级：高危
  - 受影响版本：<1.0.2


### loader-utils


**漏洞描述**:

  
- Prototype pollution in webpack loader-utils
  - npm漏洞编号：1094088
  - 漏洞详细说明：https://github.com/advisories/GHSA-76p3-8jx3-jpfq
  - 漏洞等级：极其要中的
  - 受影响版本：<1.4.1


### markdown-it


**漏洞描述**:

  
- Uncontrolled Resource Consumption in markdown-it
  - npm漏洞编号：1092663
  - 漏洞详细说明：https://github.com/advisories/GHSA-6vfc-qv3f-vr6c
  - 漏洞等级：中危
  - 受影响版本：<12.3.2


### micromatch


**漏洞描述**:

  
- Regular Expression Denial of Service (ReDoS) in micromatch
  - npm漏洞编号：1098681
  - 漏洞详细说明：https://github.com/advisories/GHSA-952p-6rrq-rcjv
  - 漏洞等级：中危
  - 受影响版本：<4.0.8


### minimatch


**漏洞描述**:

  
- minimatch ReDoS vulnerability
  - npm漏洞编号：1096485
  - 漏洞详细说明：https://github.com/advisories/GHSA-f8q6-p94x-37v3
  - 漏洞等级：高危
  - 受影响版本：<3.0.5

- minimatch has a ReDoS via repeated wildcards with non-matching literal in pattern
  - npm漏洞编号：1113459
  - 漏洞详细说明：https://github.com/advisories/GHSA-3ppc-4f35-3m26
  - 漏洞等级：高危
  - 受影响版本：<3.1.3

- minimatch has ReDoS: matchOne() combinatorial backtracking via multiple non-adjacent GLOBSTAR segments
  - npm漏洞编号：1113538
  - 漏洞详细说明：https://github.com/advisories/GHSA-7r86-cg39-jmmj
  - 漏洞等级：高危
  - 受影响版本：<3.1.3

- minimatch ReDoS: nested *() extglobs generate catastrophically backtracking regular expressions
  - npm漏洞编号：1113546
  - 漏洞详细说明：https://github.com/advisories/GHSA-23c5-xmqv-rm74
  - 漏洞等级：高危
  - 受影响版本：<3.1.4


### node-forge


**漏洞描述**:

  
- Prototype Pollution in node-forge debug API.
  - npm漏洞编号：1088227
  - 漏洞详细说明：https://github.com/advisories/GHSA-5rrq-pxf6-6jx5
  - 漏洞等级：低危
  - 受影响版本：<1.0.0

- URL parsing in node-forge could lead to undesired behavior.
  - npm漏洞编号：1088229
  - 漏洞详细说明：https://github.com/advisories/GHSA-gf8q-jrpm-jvxq
  - 漏洞等级：低危
  - 受影响版本：<1.0.0

- Improper Verification of Cryptographic Signature in `node-forge`
  - npm漏洞编号：1088746
  - 漏洞详细说明：https://github.com/advisories/GHSA-2r2c-g63r-vccr
  - 漏洞等级：中危
  - 受影响版本：<1.3.0

- Open Redirect in node-forge
  - npm漏洞编号：1093719
  - 漏洞详细说明：https://github.com/advisories/GHSA-8fr3-hfg3-gpgp
  - 漏洞等级：中危
  - 受影响版本：<1.0.0

- Improper Verification of Cryptographic Signature in node-forge
  - npm漏洞编号：1102321
  - 漏洞详细说明：https://github.com/advisories/GHSA-x4jg-mjrx-434g
  - 漏洞等级：高危
  - 受影响版本：<1.3.0

- Improper Verification of Cryptographic Signature in node-forge
  - npm漏洞编号：1102322
  - 漏洞详细说明：https://github.com/advisories/GHSA-cfm4-qjh2-4765
  - 漏洞等级：高危
  - 受影响版本：<1.3.0

- node-forge has ASN.1 Unbounded Recursion
  - npm漏洞编号：1110996
  - 漏洞详细说明：https://github.com/advisories/GHSA-554w-wpv2-vw27
  - 漏洞等级：高危
  - 受影响版本：<1.3.2

- node-forge has an Interpretation Conflict vulnerability via its ASN.1 Validator Desynchronization
  - npm漏洞编号：1110998
  - 漏洞详细说明：https://github.com/advisories/GHSA-5gfm-wpxj-wjgq
  - 漏洞等级：高危
  - 受影响版本：<1.3.2

- node-forge is vulnerable to ASN.1 OID Integer Truncation
  - npm漏洞编号：1111068
  - 漏洞详细说明：https://github.com/advisories/GHSA-65ch-62r8-g69g
  - 漏洞等级：中危
  - 受影响版本：<1.3.2

- Forge has a basicConstraints bypass in its certificate chain verification (RFC 5280 violation)
  - npm漏洞编号：1115545
  - 漏洞详细说明：https://github.com/advisories/GHSA-2328-f5f3-gj25
  - 漏洞等级：高危
  - 受影响版本：<=1.3.3

- Forge has signature forgery in Ed25519 due to missing S > L check
  - npm漏洞编号：1115546
  - 漏洞详细说明：https://github.com/advisories/GHSA-q67f-28xg-22rw
  - 漏洞等级：高危
  - 受影响版本：<1.4.0

- Forge has Denial of Service via Infinite Loop in BigInteger.modInverse() with Zero Input
  - npm漏洞编号：1115548
  - 漏洞详细说明：https://github.com/advisories/GHSA-5m6q-g25r-mvwx
  - 漏洞等级：高危
  - 受影响版本：<1.4.0

- Forge has signature forgery in RSA-PKCS due to ASN.1 extra field  
  - npm漏洞编号：1115612
  - 漏洞详细说明：https://github.com/advisories/GHSA-ppp5-5v6c-4jwp
  - 漏洞等级：高危
  - 受影响版本：<1.4.0


### nth-check


**漏洞描述**:

  
- Inefficient Regular Expression Complexity in nth-check
  - npm漏洞编号：1095141
  - 漏洞详细说明：https://github.com/advisories/GHSA-rp65-9cf3-cjxr
  - 漏洞等级：高危
  - 受影响版本：<2.0.1


### postcss


**漏洞描述**:

  
- PostCSS line return parsing error
  - npm漏洞编号：1109574
  - 漏洞详细说明：https://github.com/advisories/GHSA-7fh5-64p2-3v2j
  - 漏洞等级：中危
  - 受影响版本：<8.4.31

- PostCSS has XSS via Unescaped </style> in its CSS Stringify Output
  - npm漏洞编号：1117015
  - 漏洞详细说明：https://github.com/advisories/GHSA-qx2v-qp2m-jg93
  - 漏洞等级：中危
  - 受影响版本：<8.5.10


### qs


**漏洞描述**:

  
- qs's arrayLimit bypass in its bracket notation allows DoS via memory exhaustion
  - npm漏洞编号：1113719
  - 漏洞详细说明：https://github.com/advisories/GHSA-6rw7-vpxm-498p
  - 漏洞等级：中危
  - 受影响版本：<6.14.1


### request


**漏洞描述**:

  
- Server-Side Request Forgery in Request
  - npm漏洞编号：1096727
  - 漏洞详细说明：https://github.com/advisories/GHSA-p8p7-x288-28g6
  - 漏洞等级：中危
  - 受影响版本：<=2.88.2


### serialize-javascript


**漏洞描述**:

  
- Serialize JavaScript is Vulnerable to RCE via RegExp.flags and Date.prototype.toISOString()
  - npm漏洞编号：1113686
  - 漏洞详细说明：https://github.com/advisories/GHSA-5c6j-r48x-rmvq
  - 漏洞等级：高危
  - 受影响版本：<=7.0.2

- Serialize JavaScript has CPU Exhaustion Denial of Service via crafted array-like objects
  - npm漏洞编号：1115723
  - 漏洞详细说明：https://github.com/advisories/GHSA-qj8w-gfj5-8c6v
  - 漏洞等级：中危
  - 受影响版本：<7.0.5


### tough-cookie


**漏洞描述**:

  
- tough-cookie Prototype Pollution vulnerability
  - npm漏洞编号：1097682
  - 漏洞详细说明：https://github.com/advisories/GHSA-72xf-g2v4-qvf3
  - 漏洞等级：中危
  - 受影响版本：<4.1.3


### vue


**漏洞描述**:

  
- ReDoS vulnerability in vue package that is exploitable through inefficient regex evaluation in the parseHTML function
  - npm漏洞编号：1100238
  - 漏洞详细说明：https://github.com/advisories/GHSA-5j4c-8p2g-v4jx
  - 漏洞等级：低危
  - 受影响版本：>=2.0.0-alpha.1 <3.0.0-alpha.0


### vue-template-compiler


**漏洞描述**:

  
- vue-template-compiler vulnerable to client-side Cross-Site Scripting (XSS)
  - npm漏洞编号：1111772
  - 漏洞详细说明：https://github.com/advisories/GHSA-g3ch-rx76-35fx
  - 漏洞等级：中危
  - 受影响版本：>=2.0.0 <3.0.0


### webpack-dev-middleware


**漏洞描述**:

  
- Path traversal in webpack-dev-middleware
  - npm漏洞编号：1096729
  - 漏洞详细说明：https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
  - 漏洞等级：高危
  - 受影响版本：<=5.3.3


### webpack-dev-server


**漏洞描述**:

  
- webpack-dev-server users' source code may be stolen when they access a malicious web site with non-Chromium based browser
  - npm漏洞编号：1108429
  - 漏洞详细说明：https://github.com/advisories/GHSA-9jgg-88mc-972h
  - 漏洞等级：中危
  - 受影响版本：<=5.2.0

- webpack-dev-server users' source code may be stolen when they access a malicious web site
  - npm漏洞编号：1108430
  - 漏洞详细说明：https://github.com/advisories/GHSA-4v9v-hfq4-rm2v
  - 漏洞等级：中危
  - 受影响版本：<=5.2.0




## 影响到的库

### @vue/cli-plugin-babel


- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `cssnano` / `cssnano-preset-default` / `css-declaration-sorter` / `postcss`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `cssnano` / `cssnano-preset-default` / `postcss-svgo` / `svgo` / `css-select` / `nth-check`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `micromatch` / `braces`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `node-libs-browser` / `crypto-browserify` / `browserify-sign` / `elliptic`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `terser-webpack-plugin` / `serialize-javascript`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `form-data`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `qs`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `tough-cookie`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `html-webpack-plugin` / `html-minifier`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `html-webpack-plugin` / `loader-utils` / `json5`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `vue-template-compiler`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `webpack-bundle-analyzer` / `ejs`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `webpack-dev-server` / `ip`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `webpack-dev-server` / `selfsigned` / `node-forge`
    
- `@vue/cli-plugin-babel` / `@vue/cli-service` / `webpack-dev-server` / `webpack-dev-middleware`
    


### @vue/cli-plugin-unit-mocha


- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `cssnano` / `cssnano-preset-default` / `css-declaration-sorter` / `postcss`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `cssnano` / `cssnano-preset-default` / `postcss-svgo` / `svgo` / `css-select` / `nth-check`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `micromatch` / `braces`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `node-libs-browser` / `crypto-browserify` / `browserify-sign` / `elliptic`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `terser-webpack-plugin` / `serialize-javascript`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `form-data`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `qs`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `tough-cookie`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `html-webpack-plugin` / `html-minifier`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `html-webpack-plugin` / `loader-utils` / `json5`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `vue-template-compiler`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `webpack-bundle-analyzer` / `ejs`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `webpack-dev-server` / `ip`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `webpack-dev-server` / `selfsigned` / `node-forge`
    
- `@vue/cli-plugin-unit-mocha` / `@vue/cli-service` / `webpack-dev-server` / `webpack-dev-middleware`
    
- `@vue/cli-plugin-unit-mocha` / `mocha` / `debug`
    
- `@vue/cli-plugin-unit-mocha` / `mocha` / `diff`
    
- `@vue/cli-plugin-unit-mocha` / `mocha` / `js-yaml`
    
- `@vue/cli-plugin-unit-mocha` / `mocha` / `minimatch`
    
- `@vue/cli-plugin-unit-mocha` / `mochapack` / `glob-parent`
    


### @vue/cli-service


- `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `cssnano` / `cssnano-preset-default` / `css-declaration-sorter` / `postcss`
    
- `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `cssnano` / `cssnano-preset-default` / `postcss-svgo` / `svgo` / `css-select` / `nth-check`
    
- `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `micromatch` / `braces`
    
- `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `node-libs-browser` / `crypto-browserify` / `browserify-sign` / `elliptic`
    
- `@vue/cli-service` / `@intervolga/optimize-cssnano-plugin` / `webpack` / `terser-webpack-plugin` / `serialize-javascript`
    
- `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `form-data`
    
- `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `qs`
    
- `@vue/cli-service` / `@vue/cli-plugin-router` / `@vue/cli-shared-utils` / `request` / `tough-cookie`
    
- `@vue/cli-service` / `html-webpack-plugin` / `html-minifier`
    
- `@vue/cli-service` / `html-webpack-plugin` / `loader-utils` / `json5`
    
- `@vue/cli-service` / `vue-template-compiler`
    
- `@vue/cli-service` / `webpack-bundle-analyzer` / `ejs`
    
- `@vue/cli-service` / `webpack-dev-server` / `ip`
    
- `@vue/cli-service` / `webpack-dev-server` / `selfsigned` / `node-forge`
    
- `@vue/cli-service` / `webpack-dev-server` / `webpack-dev-middleware`
    


### @vue/test-utils


- `@vue/test-utils` / `vue`
    
- `@vue/test-utils` / `vue-template-compiler`
    


### vue


- `vue`
    


### vue-template-compiler


- `vue-template-compiler`
    


### vuepress


- `vuepress` / `@vuepress/core` / `@vuepress/markdown` / `@vuepress/shared-utils` / `globby` / `fast-glob` / `micromatch` / `braces`
    
- `vuepress` / `@vuepress/core` / `@vuepress/markdown` / `markdown-it`
    
- `vuepress` / `@vuepress/core` / `autoprefixer` / `postcss`
    
- `vuepress` / `@vuepress/core` / `cache-loader` / `webpack` / `node-libs-browser` / `crypto-browserify` / `browserify-sign` / `elliptic`
    
- `vuepress` / `@vuepress/core` / `cache-loader` / `webpack` / `terser-webpack-plugin` / `serialize-javascript`
    
- `vuepress` / `@vuepress/core` / `esbuild`
    
- `vuepress` / `@vuepress/core` / `optimize-css-assets-webpack-plugin` / `cssnano` / `cssnano-preset-default` / `postcss-svgo` / `svgo` / `css-select` / `nth-check`
    
- `vuepress` / `@vuepress/core` / `vue`
    
- `vuepress` / `@vuepress/core` / `vue-template-compiler`
    
- `vuepress` / `@vuepress/core` / `vuepress-html-webpack-plugin` / `html-minifier`
    
- `vuepress` / `@vuepress/core` / `vuepress-html-webpack-plugin` / `loader-utils` / `json5`
    
- `vuepress` / `@vuepress/core` / `webpack-dev-server` / `ip`
    
- `vuepress` / `@vuepress/core` / `webpack-dev-server` / `selfsigned` / `node-forge`
    
- `vuepress` / `@vuepress/core` / `webpack-dev-server` / `webpack-dev-middleware`
    
- `vuepress` / `update-notifier` / `latest-version` / `package-json` / `got`
    





