import{_ as s}from"./chunks/qq.09b54a28.js";import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.ce0e3599.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/table.md","filePath":"guide/table.md"}'),o={name:"guide/table.md"},e=p('<h2 id="技术交流群-711368818" tabindex="-1">技术交流群 711368818 <a class="header-anchor" href="#技术交流群-711368818" aria-label="Permalink to &quot;技术交流群 711368818&quot;">​</a></h2><img src="'+s+`" width="200"><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><h3 id="what" tabindex="-1">WHAT <a class="header-anchor" href="#what" aria-label="Permalink to &quot;WHAT&quot;">​</a></h3><p>i-table 基于元素 element-plus，但不限于元素 element-plus 组件。在完全继承 element-plus 元素的 table 属性的基础上，进行了扩展。一些非表格组件或自定义组件，因此，用户可以使用一段 json 来呈现完整的表格。</p><h3 id="why" tabindex="-1">WHY <a class="header-anchor" href="#why" aria-label="Permalink to &quot;WHY&quot;">​</a></h3><p>在我们的日常开发中，有很多有表格的页面，通常表格结构相似，逻辑重复。i-table 没有复杂的逻辑。它只转换 JSON 来呈现表格项，节省了编写业务逻辑的时间和精力，并减少了重复代码。</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>用 json 呈现表格</li><li>支持数据列配置及插槽</li><li>支持操作列配置及插槽</li><li>支持多选框配置</li><li>支持分页显示</li><li>支持响应式表格</li></ul><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_63358859/article/details/134004642?spm=1001.2014.3001.5501" target="_blank" rel="noreferrer">vue2&amp;&amp;vue3--render 函数(h)</a></li><li><a href="https://blog.csdn.net/qq_63358859/article/details/134015846?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">vue2 与 vue3 生命周期的区别</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=FEMessage.fem-vscode-helper" target="_blank" rel="noreferrer">vue2 与 vue3 v-model 的区别</a></li><li><a href="https://blog.csdn.net/qq_63358859/article/details/132714435?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">vue2 版本</a></li><li><a href="https://gitee.com/childe-jia/form-render.git" target="_blank" rel="noreferrer">element-plus 表单的封装</a></li></ul><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git clone </span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//gitee.com/childe-jia/table-vue3.git</span></span>
<span class="line"><span style="color:#E1E4E8;">拉下项把 src\\components\\i</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">table 下组件放入自己项目 可跟业务场景自行修改</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git clone </span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//gitee.com/childe-jia/table-vue3.git</span></span>
<span class="line"><span style="color:#24292E;">拉下项把 src\\components\\i</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">table 下组件放入自己项目 可跟业务场景自行修改</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;!--</span><span style="color:#E1E4E8;">region table 表格</span><span style="color:#F97583;">--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">table</span></span>
<span class="line"><span style="color:#E1E4E8;">    :list</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :total</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;total&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :otherHeight</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;otherHeight&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :options</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;options&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :pagination</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;pagination&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :columns</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;columns&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    :operates</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;operates&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @handleSizeChange</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @handleIndexChange</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;handleIndexChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @handleSelectionChange</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;handleSelectionChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    @sortChange</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;sortChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">table</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script setup</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, reactive, h, resolveComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> appTable </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/i-table/table.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> total </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;标题&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    state: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    author: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    phone: </span><span style="color:#9ECBFF;">&quot;12346788901&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    email: </span><span style="color:#9ECBFF;">&quot;1234556778@qq.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    createDate: </span><span style="color:#9ECBFF;">&quot;2023-04-23 16:11:38&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    zero: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    isOpend: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    headimgurl: </span><span style="color:#9ECBFF;">&quot;https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> otherHeight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">288</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> columns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;编号&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// element ui的一些props...</span></span>
<span class="line"><span style="color:#E1E4E8;">      sortable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//开启排序</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;author&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;作者&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;phone&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;联系方式&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">160</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//控制这一列是否展示</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;zero&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;邮箱&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">240</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;createDate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;发布时间&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">column</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cellValue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> row.createDate;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;标题&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">column</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cellValue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;span style=&quot;white-space: nowrap;color: dodgerblue;&quot;&gt;\${</span><span style="color:#E1E4E8;">row</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">title</span><span style="color:#9ECBFF;">}&lt;/span&gt;\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;state&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;状态&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#9ECBFF;">&quot;160&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fieldValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params.row.state;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">textMapping</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&quot;上架&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&quot;下架&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">: { type: </span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;">, text: </span><span style="color:#9ECBFF;">&quot;审核中&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> textMapping.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(fieldValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> textMapping[fieldValue].type</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认类型，可以根据需要修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">labelText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> textMapping.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(fieldValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> textMapping[fieldValue].text</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;未知&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认显示字段值，可以根据需要修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolveComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;el-tag&quot;</span><span style="color:#E1E4E8;">), { type }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> labelText);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;switch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;开关&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#9ECBFF;">&quot;160&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolveComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;el-switch&quot;</span><span style="color:#E1E4E8;">), {</span></span>
<span class="line"><span style="color:#E1E4E8;">        size: </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        modelValue: params.row.isOpend,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">events</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">changeMsgStatus</span><span style="color:#E1E4E8;">(events, params);</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;headimgurl&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;头像&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">resolveComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;el-avatar&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          size: </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          src: params.row.headimgurl,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 图片加载失败展示默认图片</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">onError</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;img&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            src: </span><span style="color:#9ECBFF;">&quot;https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    prop: </span><span style="color:#9ECBFF;">&quot;link&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;查看&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#9ECBFF;">&quot;160&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">resolveComponent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;el-link&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          underline: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">handleDetail</span><span style="color:#E1E4E8;">(params);</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;查看&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">operates</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  fixed: </span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  list: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;编辑&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      plain: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      link: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;Edit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      disabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;编辑&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">handleEdit</span><span style="color:#E1E4E8;">(index, row);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;删除&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;Delete&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      plain: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      link: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;删除&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">handleDel</span><span style="color:#E1E4E8;">(index, row);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;测试下拉1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;el-icon-delete&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;测试下拉1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">handleDel</span><span style="color:#E1E4E8;">(index, row);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;测试下拉2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;el-icon-delete&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;测试下拉2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">handleDel</span><span style="color:#E1E4E8;">(index, row);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pagination</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  pageIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  pageSize: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  stripe: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否为斑马纹 table</span></span>
<span class="line"><span style="color:#E1E4E8;">  loading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否添加表格loading加载动画</span></span>
<span class="line"><span style="color:#E1E4E8;">  highlightCurrentRow: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否支持当前行高亮显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  mutiSelect: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否支持列表项选中功能</span></span>
<span class="line"><span style="color:#E1E4E8;">  border: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否显示边框</span></span>
<span class="line"><span style="color:#E1E4E8;">  numbers: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否显示序号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">selectable</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//禁用选中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  headerCellStyle: { backgroundColor: </span><span style="color:#9ECBFF;">&quot;#FFF&quot;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">//表头颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleSizeChange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">pagination</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">, pagination);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleIndexChange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">pagination</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;pagination&quot;</span><span style="color:#E1E4E8;">, pagination);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleSelectionChange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;val:&quot;</span><span style="color:#E1E4E8;">, val);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleEdit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; index:&quot;</span><span style="color:#E1E4E8;">, index);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; row:&quot;</span><span style="color:#E1E4E8;">, row);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; index:&quot;</span><span style="color:#E1E4E8;">, index);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; row:&quot;</span><span style="color:#E1E4E8;">, row);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sortChange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">changeMsgStatus</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ev</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(ev, params);</span></span>
<span class="line"><span style="color:#E1E4E8;">  list[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].isOpend </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">list[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].isOpend;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleDetail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(params);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;!--</span><span style="color:#24292E;">region table 表格</span><span style="color:#D73A49;">--&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">table</span></span>
<span class="line"><span style="color:#24292E;">    :list</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :total</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;total&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :otherHeight</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;otherHeight&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :options</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;options&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :pagination</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;pagination&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :columns</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;columns&quot;</span></span>
<span class="line"><span style="color:#24292E;">    :operates</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;operates&quot;</span></span>
<span class="line"><span style="color:#24292E;">    @handleSizeChange</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">    @handleIndexChange</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;handleIndexChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">    @handleSelectionChange</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;handleSelectionChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">    @sortChange</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;sortChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">table</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script setup</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, reactive, h, resolveComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> appTable </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/i-table/table.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;标题&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    state: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    author: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    phone: </span><span style="color:#032F62;">&quot;12346788901&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    email: </span><span style="color:#032F62;">&quot;1234556778@qq.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    createDate: </span><span style="color:#032F62;">&quot;2023-04-23 16:11:38&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    zero: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    isOpend: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    headimgurl: </span><span style="color:#032F62;">&quot;https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> otherHeight </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">288</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> columns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;编号&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// element ui的一些props...</span></span>
<span class="line"><span style="color:#24292E;">      sortable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//开启排序</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;author&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;作者&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;phone&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;联系方式&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">160</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//控制这一列是否展示</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;zero&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;邮箱&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">240</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;createDate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;发布时间&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">row</span><span style="color:#24292E;">, </span><span style="color:#E36209;">column</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cellValue</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> row.createDate;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;标题&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">row</span><span style="color:#24292E;">, </span><span style="color:#E36209;">column</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cellValue</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;span style=&quot;white-space: nowrap;color: dodgerblue;&quot;&gt;\${</span><span style="color:#24292E;">row</span><span style="color:#032F62;">.</span><span style="color:#24292E;">title</span><span style="color:#032F62;">}&lt;/span&gt;\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;state&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;状态&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#032F62;">&quot;160&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fieldValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params.row.state;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textMapping</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">: { type: </span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&quot;上架&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">: { type: </span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&quot;下架&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">: { type: </span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;">, text: </span><span style="color:#032F62;">&quot;审核中&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> textMapping.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(fieldValue)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> textMapping[fieldValue].type</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 默认类型，可以根据需要修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">labelText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> textMapping.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(fieldValue)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> textMapping[fieldValue].text</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;未知&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 默认显示字段值，可以根据需要修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolveComponent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;el-tag&quot;</span><span style="color:#24292E;">), { type }, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> labelText);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;switch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;开关&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#032F62;">&quot;160&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolveComponent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;el-switch&quot;</span><span style="color:#24292E;">), {</span></span>
<span class="line"><span style="color:#24292E;">        size: </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        modelValue: params.row.isOpend,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">events</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">changeMsgStatus</span><span style="color:#24292E;">(events, params);</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;headimgurl&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;头像&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resolveComponent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;el-avatar&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          size: </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          src: params.row.headimgurl,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 图片加载失败展示默认图片</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">onError</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;img&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            src: </span><span style="color:#032F62;">&quot;https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          }),</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    prop: </span><span style="color:#032F62;">&quot;link&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;查看&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#032F62;">&quot;160&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resolveComponent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;el-link&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          underline: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">handleDetail</span><span style="color:#24292E;">(params);</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;查看&quot;</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">operates</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  fixed: </span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  list: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;编辑&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      plain: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      link: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;Edit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      disabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;编辑&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">handleEdit</span><span style="color:#24292E;">(index, row);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;删除&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;Delete&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      plain: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      link: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;删除&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">handleDel</span><span style="color:#24292E;">(index, row);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;测试下拉1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;el-icon-delete&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;测试下拉1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">handleDel</span><span style="color:#24292E;">(index, row);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;测试下拉2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;el-icon-delete&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;测试下拉2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">handleDel</span><span style="color:#24292E;">(index, row);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pagination</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  pageIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  pageSize: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  stripe: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否为斑马纹 table</span></span>
<span class="line"><span style="color:#24292E;">  loading: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否添加表格loading加载动画</span></span>
<span class="line"><span style="color:#24292E;">  highlightCurrentRow: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否支持当前行高亮显示</span></span>
<span class="line"><span style="color:#24292E;">  mutiSelect: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否支持列表项选中功能</span></span>
<span class="line"><span style="color:#24292E;">  border: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否显示边框</span></span>
<span class="line"><span style="color:#24292E;">  numbers: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否显示序号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">selectable</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//禁用选中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  headerCellStyle: { backgroundColor: </span><span style="color:#032F62;">&quot;#FFF&quot;</span><span style="color:#24292E;"> }, </span><span style="color:#6A737D;">//表头颜色</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleSizeChange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">pagination</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">, pagination);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleIndexChange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">pagination</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;pagination&quot;</span><span style="color:#24292E;">, pagination);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleSelectionChange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;val:&quot;</span><span style="color:#24292E;">, val);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleEdit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; index:&quot;</span><span style="color:#24292E;">, index);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; row:&quot;</span><span style="color:#24292E;">, row);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; index:&quot;</span><span style="color:#24292E;">, index);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; row:&quot;</span><span style="color:#24292E;">, row);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sortChange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">changeMsgStatus</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ev</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(ev, params);</span></span>
<span class="line"><span style="color:#24292E;">  list[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].isOpend </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">list[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].isOpend;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleDetail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(params);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    noStatic: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否计算表格高度</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        stripe: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否为斑马纹 table</span></span>
<span class="line"><span style="color:#E1E4E8;">        loading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否添加表格loading加载动画</span></span>
<span class="line"><span style="color:#E1E4E8;">        highlightCurrentRow: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否支持当前行高亮显示</span></span>
<span class="line"><span style="color:#E1E4E8;">        mutiSelect: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否支持列表项选中功能</span></span>
<span class="line"><span style="color:#E1E4E8;">        border: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否显示边框</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">selectable</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//是否可以选中</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#6A737D;">// table 表格的控制参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    total: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#6A737D;">// 总数</span></span>
<span class="line"><span style="color:#E1E4E8;">    list: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: [], </span><span style="color:#6A737D;">// prop:表头绑定的地段，label：表头名称，align：每列数据展示形式（left, center, right），width:列宽</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#6A737D;">// 数据列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    customHeight: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//与noStatic一起使用</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">320</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    columns: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: [], </span><span style="color:#6A737D;">// 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    operates: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">defaultt</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#6A737D;">// width:按钮列宽，fixed：是否固定（left,right）,按钮集合 === label: 文本，type :类型（primary / success / warning / danger / info / text），show：是否显示，icon：按钮图标，plain：是否朴素按钮，disabled：是否禁用，method：回调方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    otherHeight: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#6A737D;">// 计算表格的高度</span></span>
<span class="line"><span style="color:#E1E4E8;">    pagination: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分页参数 === pageSize:每页展示的条数，pageIndex:当前页，pageArray: 每页展示条数的控制集合，默认 _page_array</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    noStatic: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否计算表格高度</span></span>
<span class="line"><span style="color:#24292E;">    options: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      default: {</span></span>
<span class="line"><span style="color:#24292E;">        stripe: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否为斑马纹 table</span></span>
<span class="line"><span style="color:#24292E;">        loading: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否添加表格loading加载动画</span></span>
<span class="line"><span style="color:#24292E;">        highlightCurrentRow: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否支持当前行高亮显示</span></span>
<span class="line"><span style="color:#24292E;">        mutiSelect: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否支持列表项选中功能</span></span>
<span class="line"><span style="color:#24292E;">        border: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否显示边框</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">selectable</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//是否可以选中</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#6A737D;">// table 表格的控制参数</span></span>
<span class="line"><span style="color:#24292E;">    total: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#6A737D;">// 总数</span></span>
<span class="line"><span style="color:#24292E;">    list: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array,</span></span>
<span class="line"><span style="color:#24292E;">      default: [], </span><span style="color:#6A737D;">// prop:表头绑定的地段，label：表头名称，align：每列数据展示形式（left, center, right），width:列宽</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#6A737D;">// 数据列表</span></span>
<span class="line"><span style="color:#24292E;">    customHeight: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//与noStatic一起使用</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">320</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    columns: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array,</span></span>
<span class="line"><span style="color:#24292E;">      default: [], </span><span style="color:#6A737D;">// 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    operates: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">defaultt</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}, </span><span style="color:#6A737D;">// width:按钮列宽，fixed：是否固定（left,right）,按钮集合 === label: 文本，type :类型（primary / success / warning / danger / info / text），show：是否显示，icon：按钮图标，plain：是否朴素按钮，disabled：是否禁用，method：回调方法</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    otherHeight: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#6A737D;">// 计算表格的高度</span></span>
<span class="line"><span style="color:#24292E;">    pagination: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分页参数 === pageSize:每页展示的条数，pageIndex:当前页，pageArray: 每页展示条数的控制集合，默认 _page_array</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><p>support all <a href="https://element-plus.org/zh-CN/#/zh-CN" target="_blank" rel="noreferrer">el-table&#39;s methods</a></p><h2 id="inspiration" tabindex="-1">Inspiration <a class="header-anchor" href="#inspiration" aria-label="Permalink to &quot;Inspiration&quot;">​</a></h2><p>thanks to <a href="https://juejin.cn/post/6844903555598401544" target="_blank" rel="noreferrer">Vue2.5 结合 Element UI 之 Table 和 Pagination 组件实现分页</a></p>`,20),t=[e];function c(E,r,y,i,F,u){return a(),l("div",null,t)}const g=n(o,[["render",c]]);export{C as __pageData,g as default};
