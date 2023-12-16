import{_ as s}from"./chunks/qq.09b54a28.js";import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.52b122f8.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/form.md","filePath":"guide/form.md"}'),o={name:"guide/form.md"},e=p('<h2 id="技术交流群-711368818" tabindex="-1">技术交流群 711368818 <a class="header-anchor" href="#技术交流群-711368818" aria-label="Permalink to &quot;技术交流群 711368818&quot;">​</a></h2><img src="'+s+`" width="200"><h2 id="遗留问题-待解决" tabindex="-1">遗留问题 :待解决 <a class="header-anchor" href="#遗留问题-待解决" aria-label="Permalink to &quot;遗留问题 :待解决&quot;">​</a></h2><p>select 为 multiple 多选时 必须初始化空数组（在 elementplus v-model 初始化 updateValue 时 为空数组会触发校验）</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><h3 id="what" tabindex="-1">WHAT <a class="header-anchor" href="#what" aria-label="Permalink to &quot;WHAT&quot;">​</a></h3><p>form-renderer 基于元素 element-plus，但不限于元素 element-plus 组件。在完全继承 element-plus 元素的 form 属性的基础上，进行了扩展。一些非表单组件或自定义组件，因此，用户可以使用一段 json 来呈现完整的表单。</p><h3 id="why" tabindex="-1">WHY <a class="header-anchor" href="#why" aria-label="Permalink to &quot;WHY&quot;">​</a></h3><p>在我们的日常开发中，有很多有表单的页面，通常表单结构相似，逻辑重复。el 表单呈现器没有复杂的逻辑。它只转换 JSON 来呈现表单项，节省了编写业务逻辑的时间和精力，并减少了重复代码。</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>用 json 呈现表单</li><li>支持与自定义组件集成</li><li>支持 updateForm 方法批量更新表单数据</li><li>支持 setOptions 方法，动态更改选择选项</li><li>内容支持 inputFormat、outputFormat、trim 以处理组件的输入和输出值</li><li>支持 v-model</li></ul><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_63358859/article/details/133699476?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">$attrs 和 $listeners (vue2&amp;&amp;vue3)</a></li><li><a href="https://blog.csdn.net/qq_63358859/article/details/133635120?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">vue2 与 vue3 函数式组件</a></li><li><a href="https://blog.csdn.net/qq_63358859/article/details/133532229?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">vue 2 与 vue3 获取模版引用 （ref）的区别</a></li><li><a href="https://blog.csdn.net/qq_63358859/article/details/133484380?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">vue2 与 vue3 v-model 的区别</a></li><li><a href="https://blog.csdn.net/qq_63358859/article/details/130442636?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169684271816800180612618%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&amp;request_id=169684271816800180612618&amp;biz_id=0&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-7-130442636-null-null.nonecase&amp;utm_term=render&amp;spm=1018.2226.3001.4450" target="_blank" rel="noreferrer">vue2 版本</a></li><li><a href="https://gitee.com/childe-jia/form-render/wikis/%E6%96%87%E6%A1%A3/%E4%BB%8B%E7%BB%8D" target="_blank" rel="noreferrer">中文文档</a></li><li><a href="https://gitee.com/childe-jia/table-vue3" target="_blank" rel="noreferrer">element-plus table 的封装</a></li></ul><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pnpm i el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">form</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">renderer</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">vue3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pnpm i el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">form</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">renderer</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">vue3</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;el-form-renderer-vue3&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(elFormRenderer);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;el-form-renderer-vue3&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(elFormRenderer);</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">form</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">renderer</span></span>
<span class="line"><span style="color:#E1E4E8;">    label</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">width</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    v</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">model</span><span style="color:#E1E4E8;">:FormData</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;FormData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;form&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">button @click</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;resetForm&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">reset</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">button</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">button @click</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;setValue&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">设置名字为小明</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">button</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#B392F0;">pre</span><span style="color:#E1E4E8;">&gt;{{ FormData }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">pre</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">form</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">renderer</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script setup</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> FormData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  startDate: </span><span style="color:#9ECBFF;">&quot;2019-01-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  endDate: </span><span style="color:#9ECBFF;">&quot;2019-01-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  region: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  date: [</span><span style="color:#9ECBFF;">&quot;2019-01-01&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;2019-01-02&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    attrs: { </span><span style="color:#9ECBFF;">&quot;data-name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;form1&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      size: </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      placeholder: </span><span style="color:#9ECBFF;">&quot;test placeholder&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss name&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;blur&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { min: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;length between 3 to 5&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;blur&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;select&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;region&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;region&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;guangzhou&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;guangzhou&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: { filterable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, multiple: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, multipleLimit: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss area&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;date-picker&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;daterange&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      valueFormat: </span><span style="color:#9ECBFF;">&quot;yyyy-MM-dd&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss date&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">inputFormat</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (row.startDate </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> row.endDate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [row.startDate, row.endDate];</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">outputFormat</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { startDate: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, endDate: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        startDate: val[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        endDate: val[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;switch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;delivery&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;delivery&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;checkbox-group&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;typeA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;typeB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;typeC&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ type: </span><span style="color:#9ECBFF;">&quot;array&quot;</span><span style="color:#E1E4E8;">, required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss type&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;radio-group&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;resourceA&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;resourceB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss resource&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;textarea&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss desc&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;blur&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  form.value.methods.</span><span style="color:#B392F0;">resetFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  FormData.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;小明&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">form</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">renderer</span></span>
<span class="line"><span style="color:#24292E;">    label</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">width</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;100px&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;content&quot;</span></span>
<span class="line"><span style="color:#24292E;">    v</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">model</span><span style="color:#24292E;">:FormData</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;FormData&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;form&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">button @click</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;resetForm&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">reset</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">button</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">button @click</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;setValue&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">设置名字为小明</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">button</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#6F42C1;">pre</span><span style="color:#24292E;">&gt;{{ FormData }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">pre</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">form</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">renderer</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script setup</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">form</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> FormData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  type: [],</span></span>
<span class="line"><span style="color:#24292E;">  startDate: </span><span style="color:#032F62;">&quot;2019-01-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  endDate: </span><span style="color:#032F62;">&quot;2019-01-02&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  region: [],</span></span>
<span class="line"><span style="color:#24292E;">  date: [</span><span style="color:#032F62;">&quot;2019-01-01&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;2019-01-02&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    attrs: { </span><span style="color:#032F62;">&quot;data-name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;form1&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      size: </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      placeholder: </span><span style="color:#032F62;">&quot;test placeholder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss name&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;blur&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { min: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, max: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;length between 3 to 5&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;blur&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;select&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;region&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;region&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    options: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;guangzhou&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;guangzhou&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    el: { filterable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, multiple: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, multipleLimit: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss area&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;date-picker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;daterange&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      valueFormat: </span><span style="color:#032F62;">&quot;yyyy-MM-dd&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss date&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inputFormat</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (row.startDate </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> row.endDate) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [row.startDate, row.endDate];</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">outputFormat</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">val) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { startDate: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, endDate: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        startDate: val[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        endDate: val[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;switch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;delivery&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;delivery&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;checkbox-group&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    default: [],</span></span>
<span class="line"><span style="color:#24292E;">    options: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;typeA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;typeB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;typeC&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ type: </span><span style="color:#032F62;">&quot;array&quot;</span><span style="color:#24292E;">, required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss type&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;radio-group&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;resource&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;resource&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    options: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;resourceA&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;A&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;resourceB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;B&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss resource&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;desc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;desc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;textarea&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss desc&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;blur&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  form.value.methods.</span><span style="color:#6F42C1;">resetFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  FormData.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;小明&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * support all el-form&#39;s props</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;">: https://element.eleme.io/#/zh-CN/component/form#form-attributes</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 表单项的配置数组，每个表单项代表一个原子表单项</span></span>
<span class="line"><span style="color:#6A737D;">     * the form config&#39;s array, each item represents a form-item</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array, </span><span style="color:#6A737D;">// type：Content[], check Content&#39;s definition below</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * disable all form-items</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    disabled: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 表单项的typescript定义</span></span>
<span class="line"><span style="color:#6A737D;"> * 支持所有el-form-item&#39;s props。表单项组件本身的props定义在el上</span></span>
<span class="line"><span style="color:#6A737D;"> * definition of form-item written in typescript.</span></span>
<span class="line"><span style="color:#6A737D;"> * support all el-form-item&#39;s props. The component&#39;s props need to be set at prop el</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Content</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 每一个原子都存在 id，用于存储该原子的值，不能重复</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// key of form-item value in form value. Must be unique</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">id</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 可以是element提供的所有表单组件类型，如传入&#39;input&#39;，则渲染出&#39;el-input&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * 当type=&quot;group&quot;时，可以创造复杂对象类型的表单数据，配合items使用。此时getFormValue()返回的是对象类型的数据，对象的每个属性对应items里的每一项</span></span>
<span class="line"><span style="color:#6A737D;">   * support all element&#39;s form component, e.g., type &#39;input&#39; will render as &#39;el-input&#39;.</span></span>
<span class="line"><span style="color:#6A737D;">   * you can create nested form value with type &#39;group&#39; and use items to define that form value&#39;s shape. The type of this form value will be &#39;object&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 当type=&quot;group&quot;时使用</span></span>
<span class="line"><span style="color:#6A737D;">   * items内依然遵循同一层级的id不重复的原则</span></span>
<span class="line"><span style="color:#6A737D;">   * using with type &#39;group&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * the \`id\` in each item of items must be unique</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">items</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Content</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 默认值</span></span>
<span class="line"><span style="color:#6A737D;">   * FIXME: 别用关键字做 key</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">default</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 当 type === &#39;input&#39; 时展示文本值</span></span>
<span class="line"><span style="color:#6A737D;">   * 当 type === &#39;select&#39; 时展示对应 label</span></span>
<span class="line"><span style="color:#6A737D;">   * 对于其他组件等同于 disabled = true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">readonly</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@deprecated</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">enableWhen</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 传入一个方法，并返回 boolean，返回 true 时则隐藏该表单项</span></span>
<span class="line"><span style="color:#6A737D;">   * formValue 为当前 form 的值，item 为当前表单项的定义</span></span>
<span class="line"><span style="color:#6A737D;">   * hide the form-item when return true</span></span>
<span class="line"><span style="color:#6A737D;">   * formValue is same as what getFormValue returns, and item is the config of this form-item</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">hidden</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">formValue</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Content</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 具有选择功能的原子表单可用此定义可选项</span></span>
<span class="line"><span style="color:#6A737D;">   * use with type: select, radio-group, radio-button, checkbox-group, checkbox-button</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">label</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">}[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 配置remote.url，即可远程配置组件的某个prop！</span></span>
<span class="line"><span style="color:#6A737D;">   * remote接受以下属性：</span></span>
<span class="line"><span style="color:#6A737D;">   * url: 远程接口的地址</span></span>
<span class="line"><span style="color:#6A737D;">   * prop: 要注入的 prop 的名称，默认为 options</span></span>
<span class="line"><span style="color:#6A737D;">   * request: 可选，请求方法</span></span>
<span class="line"><span style="color:#6A737D;">   * dataPath: 可选，data在响应体中的路径</span></span>
<span class="line"><span style="color:#6A737D;">   * onResponse: 可选，处理请求回来的数据</span></span>
<span class="line"><span style="color:#6A737D;">   * onError: 可选，处理请求出错的情况</span></span>
<span class="line"><span style="color:#6A737D;">   * 另外，针对 select、radio-group、checkbox-group，远程数据能自动映射成 el-option 选项！以下属性仅在此情况使用</span></span>
<span class="line"><span style="color:#6A737D;">   * label: 可选，可直接配置远程数据中用作 label 的key</span></span>
<span class="line"><span style="color:#6A737D;">   * value: 可选，可直接配置远程数据中用作 value 的key</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@see</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">https://zhuanlan.zhihu.com/p/97827063</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * use remote to set one prop! remote accept following props:</span></span>
<span class="line"><span style="color:#6A737D;">   * url: remote api address</span></span>
<span class="line"><span style="color:#6A737D;">   * prop: prop name that data inject</span></span>
<span class="line"><span style="color:#6A737D;">   * request: optional, customize how to get your options</span></span>
<span class="line"><span style="color:#6A737D;">   * dataPath: optional, data&#39;s path in response</span></span>
<span class="line"><span style="color:#6A737D;">   * onResponse: optional, deal with your response</span></span>
<span class="line"><span style="color:#6A737D;">   * onError: optional, deal with request error</span></span>
<span class="line"><span style="color:#6A737D;">   * and, we treat select、radio-group、checkbox-group specially and the resp will be map as an el-option&#39;s group! following props only suitable for this case</span></span>
<span class="line"><span style="color:#6A737D;">   * label: optional, label key in resp</span></span>
<span class="line"><span style="color:#6A737D;">   * value: optional, value key in resp</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">remote</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> resp.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">prop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;options&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">dataPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onResponse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dataPath) resp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_get</span><span style="color:#E1E4E8;">(resp, dataPath)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.type) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;checkbox-group&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;radio-group&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> resp.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: item[label],</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: item[value]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> resp</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onError</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(error.message)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">label</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;label&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;value&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">attrs</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// html attributes</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 用于定义具体原子表单（如el-input）的属性，比如定义el-input的placeholder</span></span>
<span class="line"><span style="color:#6A737D;">   * use to define props of the actual component of this form-item, such as placeholder of el-input</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 使用自定义组件</span></span>
<span class="line"><span style="color:#6A737D;">   * component适用于渲染局部注册组件和自定义组件，而type适用于带el-前缀的全局组件</span></span>
<span class="line"><span style="color:#6A737D;">   * custom component</span></span>
<span class="line"><span style="color:#6A737D;">   * use it when element&#39;s form components are not enough</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">component</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 是否覆盖自定义组件内置的校验规则</span></span>
<span class="line"><span style="color:#6A737D;">   * \`true\` 为覆盖， 默认为 \`false\`</span></span>
<span class="line"><span style="color:#6A737D;">   * whether to override the validation rules written in custom components</span></span>
<span class="line"><span style="color:#6A737D;">   * \`true\` to override, default \`false\`</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">overrideRules</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">label</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//set el-form-item&#39;s label</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">trim</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// trim value at change event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用于处理输入值，输入的值包括：1. default；2. v-model；3. updateForm。参数为整个表单的值对象或 updateForm 传入的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果 inputFormat 返回 undefined，则不会更新此表单项</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// obj is param you passed to updateForm. You can use this function to hijack this process and customize the form value</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">inputFormat</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">obj</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用于处理输出值，参数为对应组件返回值</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果处理后的值是对象类型，会覆盖（Object.assign）到整个表单的值上</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// used to hijack the getFormValue&#39;s process and customize the return value</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">outputFormat</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// set el-form-item&#39;s rules</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">rules</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// @deprecated</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">atChange</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 监听表单项发出的事件</span></span>
<span class="line"><span style="color:#6A737D;">   * listen to any events emitted by component of form item</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{any[]}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">args</span><span style="color:#6A737D;"> - what that event emits</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{function}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">updateForm</span><span style="color:#6A737D;"> - same as methods.updateForm</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">on</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#FFAB70;">eventName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">[], </span><span style="color:#FFAB70;">updateForm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * a tour of typescript</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">obj</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">a</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// type string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">b</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// type string, optional</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// type boolean, optional, default true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">d</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[] </span><span style="color:#6A737D;">// type array, each item must be string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// could be any valid js type</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">f</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// type function, which receives a param &#39;a&#39; as number and return nothing</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">h</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// instance of Vue</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">i</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {[</span><span style="color:#FFAB70;">a</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">} </span><span style="color:#6A737D;">// type object, whose key is type string, and value is type number</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * support all el-form&#39;s props</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;">: https://element.eleme.io/#/zh-CN/component/form#form-attributes</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 表单项的配置数组，每个表单项代表一个原子表单项</span></span>
<span class="line"><span style="color:#6A737D;">     * the form config&#39;s array, each item represents a form-item</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    content: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array, </span><span style="color:#6A737D;">// type：Content[], check Content&#39;s definition below</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * disable all form-items</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    disabled: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 表单项的typescript定义</span></span>
<span class="line"><span style="color:#6A737D;"> * 支持所有el-form-item&#39;s props。表单项组件本身的props定义在el上</span></span>
<span class="line"><span style="color:#6A737D;"> * definition of form-item written in typescript.</span></span>
<span class="line"><span style="color:#6A737D;"> * support all el-form-item&#39;s props. The component&#39;s props need to be set at prop el</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Content</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 每一个原子都存在 id，用于存储该原子的值，不能重复</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// key of form-item value in form value. Must be unique</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">id</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 可以是element提供的所有表单组件类型，如传入&#39;input&#39;，则渲染出&#39;el-input&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * 当type=&quot;group&quot;时，可以创造复杂对象类型的表单数据，配合items使用。此时getFormValue()返回的是对象类型的数据，对象的每个属性对应items里的每一项</span></span>
<span class="line"><span style="color:#6A737D;">   * support all element&#39;s form component, e.g., type &#39;input&#39; will render as &#39;el-input&#39;.</span></span>
<span class="line"><span style="color:#6A737D;">   * you can create nested form value with type &#39;group&#39; and use items to define that form value&#39;s shape. The type of this form value will be &#39;object&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 当type=&quot;group&quot;时使用</span></span>
<span class="line"><span style="color:#6A737D;">   * items内依然遵循同一层级的id不重复的原则</span></span>
<span class="line"><span style="color:#6A737D;">   * using with type &#39;group&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   * the \`id\` in each item of items must be unique</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">items</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Content</span><span style="color:#24292E;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 默认值</span></span>
<span class="line"><span style="color:#6A737D;">   * FIXME: 别用关键字做 key</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">default</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 当 type === &#39;input&#39; 时展示文本值</span></span>
<span class="line"><span style="color:#6A737D;">   * 当 type === &#39;select&#39; 时展示对应 label</span></span>
<span class="line"><span style="color:#6A737D;">   * 对于其他组件等同于 disabled = true</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">readonly</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@deprecated</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">enableWhen</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">object</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 传入一个方法，并返回 boolean，返回 true 时则隐藏该表单项</span></span>
<span class="line"><span style="color:#6A737D;">   * formValue 为当前 form 的值，item 为当前表单项的定义</span></span>
<span class="line"><span style="color:#6A737D;">   * hide the form-item when return true</span></span>
<span class="line"><span style="color:#6A737D;">   * formValue is same as what getFormValue returns, and item is the config of this form-item</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">hidden</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">formValue</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">, </span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Content</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 具有选择功能的原子表单可用此定义可选项</span></span>
<span class="line"><span style="color:#6A737D;">   * use with type: select, radio-group, radio-button, checkbox-group, checkbox-button</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">label</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">value</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">}[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 配置remote.url，即可远程配置组件的某个prop！</span></span>
<span class="line"><span style="color:#6A737D;">   * remote接受以下属性：</span></span>
<span class="line"><span style="color:#6A737D;">   * url: 远程接口的地址</span></span>
<span class="line"><span style="color:#6A737D;">   * prop: 要注入的 prop 的名称，默认为 options</span></span>
<span class="line"><span style="color:#6A737D;">   * request: 可选，请求方法</span></span>
<span class="line"><span style="color:#6A737D;">   * dataPath: 可选，data在响应体中的路径</span></span>
<span class="line"><span style="color:#6A737D;">   * onResponse: 可选，处理请求回来的数据</span></span>
<span class="line"><span style="color:#6A737D;">   * onError: 可选，处理请求出错的情况</span></span>
<span class="line"><span style="color:#6A737D;">   * 另外，针对 select、radio-group、checkbox-group，远程数据能自动映射成 el-option 选项！以下属性仅在此情况使用</span></span>
<span class="line"><span style="color:#6A737D;">   * label: 可选，可直接配置远程数据中用作 label 的key</span></span>
<span class="line"><span style="color:#6A737D;">   * value: 可选，可直接配置远程数据中用作 value 的key</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@see</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">https://zhuanlan.zhihu.com/p/97827063</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * use remote to set one prop! remote accept following props:</span></span>
<span class="line"><span style="color:#6A737D;">   * url: remote api address</span></span>
<span class="line"><span style="color:#6A737D;">   * prop: prop name that data inject</span></span>
<span class="line"><span style="color:#6A737D;">   * request: optional, customize how to get your options</span></span>
<span class="line"><span style="color:#6A737D;">   * dataPath: optional, data&#39;s path in response</span></span>
<span class="line"><span style="color:#6A737D;">   * onResponse: optional, deal with your response</span></span>
<span class="line"><span style="color:#6A737D;">   * onError: optional, deal with request error</span></span>
<span class="line"><span style="color:#6A737D;">   * and, we treat select、radio-group、checkbox-group specially and the resp will be map as an el-option&#39;s group! following props only suitable for this case</span></span>
<span class="line"><span style="color:#6A737D;">   * label: optional, label key in resp</span></span>
<span class="line"><span style="color:#6A737D;">   * value: optional, value key in resp</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">remote</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(url).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">resp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> resp.data)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">prop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;options&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">dataPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onResponse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">resp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dataPath) resp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_get</span><span style="color:#24292E;">(resp, dataPath)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data.type) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;checkbox-group&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;radio-group&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> resp.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">            label: item[label],</span></span>
<span class="line"><span style="color:#24292E;">            value: item[value]</span></span>
<span class="line"><span style="color:#24292E;">          }))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> resp</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onError</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(error.message)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">label</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;label&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;value&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">attrs</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">object</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// html attributes</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 用于定义具体原子表单（如el-input）的属性，比如定义el-input的placeholder</span></span>
<span class="line"><span style="color:#6A737D;">   * use to define props of the actual component of this form-item, such as placeholder of el-input</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">el</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 使用自定义组件</span></span>
<span class="line"><span style="color:#6A737D;">   * component适用于渲染局部注册组件和自定义组件，而type适用于带el-前缀的全局组件</span></span>
<span class="line"><span style="color:#6A737D;">   * custom component</span></span>
<span class="line"><span style="color:#6A737D;">   * use it when element&#39;s form components are not enough</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">component</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 是否覆盖自定义组件内置的校验规则</span></span>
<span class="line"><span style="color:#6A737D;">   * \`true\` 为覆盖， 默认为 \`false\`</span></span>
<span class="line"><span style="color:#6A737D;">   * whether to override the validation rules written in custom components</span></span>
<span class="line"><span style="color:#6A737D;">   * \`true\` to override, default \`false\`</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">overrideRules</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">label</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//set el-form-item&#39;s label</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">trim</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// trim value at change event</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用于处理输入值，输入的值包括：1. default；2. v-model；3. updateForm。参数为整个表单的值对象或 updateForm 传入的对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果 inputFormat 返回 undefined，则不会更新此表单项</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// obj is param you passed to updateForm. You can use this function to hijack this process and customize the form value</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">inputFormat</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">obj</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用于处理输出值，参数为对应组件返回值</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果处理后的值是对象类型，会覆盖（Object.assign）到整个表单的值上</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// used to hijack the getFormValue&#39;s process and customize the return value</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">outputFormat</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// set el-form-item&#39;s rules</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">rules</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// @deprecated</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">atChange</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 监听表单项发出的事件</span></span>
<span class="line"><span style="color:#6A737D;">   * listen to any events emitted by component of form item</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{any[]}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">args</span><span style="color:#6A737D;"> - what that event emits</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{function}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">updateForm</span><span style="color:#6A737D;"> - same as methods.updateForm</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">on</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#E36209;">eventName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">args</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">[], </span><span style="color:#E36209;">updateForm</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">function</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * a tour of typescript</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">obj</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// type string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">b</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// type string, optional</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">c</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// type boolean, optional, default true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">d</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[] </span><span style="color:#6A737D;">// type array, each item must be string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">e</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// could be any valid js type</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">f</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// type function, which receives a param &#39;a&#39; as number and return nothing</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">h</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// instance of Vue</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">i</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {[</span><span style="color:#E36209;">a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">} </span><span style="color:#6A737D;">// type object, whose key is type string, and value is type number</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><p>support all <a href="https://element.eleme.io/#/zh-CN/component/form#form-methods" target="_blank" rel="noreferrer">el-form&#39;s methods</a></p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>insert at bottom</td></tr><tr><td>id:hello</td><td>insert before form-item whose id is &#39;hello&#39;</td></tr></tbody></table><h2 id="inspiration" tabindex="-1">Inspiration <a class="header-anchor" href="#inspiration" aria-label="Permalink to &quot;Inspiration&quot;">​</a></h2><p>thanks to <a href="https://github.com/femessage/el-form-renderer/" target="_blank" rel="noreferrer">el-form-renderer</a></p>`,25),t=[e];function c(r,y,E,i,u,F){return a(),l("div",null,t)}const d=n(o,[["render",c]]);export{m as __pageData,d as default};
