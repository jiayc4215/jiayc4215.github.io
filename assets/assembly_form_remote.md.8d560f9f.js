import{_ as c}from"./chunks/el-form-renderer.61b70910.js";import{a0 as r,o as e,b as E,c as y,H as i,k as n,a as l,Q as F}from"./chunks/framework.d9d351fe.js";import"./chunks/commonjsHelpers.725317a4.js";const u={__name:"remote",setup(t){let p=s=>"https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote&input="+s;const a=r([{type:"select",id:"select",label:"remote-by-url",remote:{url:""},el:{placeholder:"请输入会发请求,",filterable:!0,remote:!0,remoteMethod:s=>{a[0].remote.url=p(s)}}},{type:"select",id:"remote-by-request",label:"remote-by-request",remote:{request(s){console.log(s)}},el:{width:"200px",placeholder:"请输入，控制台会打印输入值",filterable:!0,remote:!0}},{type:"radio-group",id:"radio",label:"radio",remote:{url:"fake.url",request(){const s={path:[{title:"resourceA",name:1},{title:"resourceB",name:2}]};return new Promise(o=>setTimeout(()=>o(s),2e3))},dataPath:"path",label:"title",value:"name"}},{type:"checkbox-group",id:"checkbox",label:"checkbox",default:[],remote:{request(){return Promise.reject(new Error("test2"))},onError:s=>(console.warn(s.message),[{label:"typeA"},{label:"typeB"},{label:"typeC"}])}},{type:"cascader",id:"cascader",label:"cascader",default:[],remote:{prop:"options",request(){return[{label:"hello",value:"hello",children:[{label:"world",value:"world"}]}]}}}]);return(s,o)=>(e(),E(c,{content:a,inline:""},null,8,["content"]))}},m=n("h1",{id:"remote",tabindex:"-1"},[l("remote "),n("a",{class:"header-anchor",href:"#remote","aria-label":'Permalink to "remote"'},"​")],-1),d=n("p",null,[l("远程获取 el-select、checkbox-group & radio-group 的 options。 "),n("br"),l(" 你甚至可以远程获取任意一个组件 prop！")],-1),C=n("br",null,null,-1),b=F(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inline</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRemoteUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote&amp;input=&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;remote-by-url&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            remote: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                url: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 通过设置 url，获取远程配置 options</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                placeholder: </span><span style="color:#9ECBFF;">&#39;请输入会发请求,&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                filterable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                remote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">remoteMethod</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    content[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].remote.url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRemoteUrl</span><span style="color:#E1E4E8;">(query)</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;remote-by-request&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;remote-by-request&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            remote: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// filterable 与 remote 为 true 时，会传入 query 参数</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(query)</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                width: </span><span style="color:#9ECBFF;">&#39;200px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                placeholder: </span><span style="color:#9ECBFF;">&#39;请输入，控制台会打印输入值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                filterable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                remote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 可以自定义 request 方法，做各种操作</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;radio-group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;radio&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;radio&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            remote: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                url: </span><span style="color:#9ECBFF;">&#39;fake.url&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 同时存在 url 与 request, 以后者为准</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        path: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            { title: </span><span style="color:#9ECBFF;">&#39;resourceA&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            { title: </span><span style="color:#9ECBFF;">&#39;resourceB&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">(resp), </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                dataPath: </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                label: </span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                value: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// request 报错时也可以处理</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;checkbox-group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;checkbox&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;checkbox&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            default: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">            remote: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// throw new Error(&#39;test&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test2&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">onError</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(error.message)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        { label: </span><span style="color:#9ECBFF;">&#39;typeA&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        { label: </span><span style="color:#9ECBFF;">&#39;typeB&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        { label: </span><span style="color:#9ECBFF;">&#39;typeC&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 你想远程配置任何 prop 都行！</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;cascader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&#39;cascader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;cascader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            default: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">            remote: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                prop: </span><span style="color:#9ECBFF;">&#39;options&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            label: </span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            value: </span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    label: </span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    value: </span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inline</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRemoteUrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">query</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote&amp;input=&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> query</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;remote-by-url&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            remote: {</span></span>
<span class="line"><span style="color:#24292E;">                url: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 通过设置 url，获取远程配置 options</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            el: {</span></span>
<span class="line"><span style="color:#24292E;">                placeholder: </span><span style="color:#032F62;">&#39;请输入会发请求,&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                filterable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                remote: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">remoteMethod</span><span style="color:#24292E;">: </span><span style="color:#E36209;">query</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    content[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].remote.url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRemoteUrl</span><span style="color:#24292E;">(query)</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&#39;remote-by-request&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;remote-by-request&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            remote: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// filterable 与 remote 为 true 时，会传入 query 参数</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">(</span><span style="color:#E36209;">query</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(query)</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            el: {</span></span>
<span class="line"><span style="color:#24292E;">                width: </span><span style="color:#032F62;">&#39;200px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                placeholder: </span><span style="color:#032F62;">&#39;请输入，控制台会打印输入值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                filterable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                remote: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 可以自定义 request 方法，做各种操作</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;radio-group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&#39;radio&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;radio&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            remote: {</span></span>
<span class="line"><span style="color:#24292E;">                url: </span><span style="color:#032F62;">&#39;fake.url&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 同时存在 url 与 request, 以后者为准</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                        path: [</span></span>
<span class="line"><span style="color:#24292E;">                            { title: </span><span style="color:#032F62;">&#39;resourceA&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                            { title: </span><span style="color:#032F62;">&#39;resourceB&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                        ]</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#E36209;">r</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">(resp), </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                dataPath: </span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                label: </span><span style="color:#032F62;">&#39;title&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                value: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// request 报错时也可以处理</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;checkbox-group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&#39;checkbox&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;checkbox&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            default: [],</span></span>
<span class="line"><span style="color:#24292E;">            remote: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// throw new Error(&#39;test&#39;)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test2&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">onError</span><span style="color:#24292E;">: </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    console.</span><span style="color:#6F42C1;">warn</span><span style="color:#24292E;">(error.message)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">                        { label: </span><span style="color:#032F62;">&#39;typeA&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                        { label: </span><span style="color:#032F62;">&#39;typeB&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                        { label: </span><span style="color:#032F62;">&#39;typeC&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                    ]</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 你想远程配置任何 prop 都行！</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;cascader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&#39;cascader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;cascader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            default: [],</span></span>
<span class="line"><span style="color:#24292E;">            remote: {</span></span>
<span class="line"><span style="color:#24292E;">                prop: </span><span style="color:#032F62;">&#39;options&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            label: </span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            value: </span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            children: [</span></span>
<span class="line"><span style="color:#24292E;">                                {</span></span>
<span class="line"><span style="color:#24292E;">                                    label: </span><span style="color:#032F62;">&#39;world&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                    value: </span><span style="color:#032F62;">&#39;world&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                }</span></span>
<span class="line"><span style="color:#24292E;">                            ]</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    ]</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1),g=JSON.parse('{"title":"remote","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/remote.md","filePath":"assembly/form/remote.md"}'),B={name:"assembly/form/remote.md"},f=Object.assign(B,{setup(t){return(p,a)=>(e(),y("div",null,[m,d,C,i(u),b]))}});export{g as __pageData,f as default};
