<<<<<<<< HEAD:assets/assembly_form_rules-plus.md.9d3d6311.js
import{_ as t}from"./chunks/el-form-renderer.d17e9645.js";import{_ as c,a0 as l,o as p,b as r,c as E,H as y,k as n,a as i,Q as u}from"./chunks/framework.52b122f8.js";import"./chunks/commonjsHelpers.725317a4.js";const F={__name:"rulesPlus",setup(o){const s=[{required:!0,message:"请输入活动名称",trigger:"change"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"change"}],a=l({name:[...s]}),e=l([{type:"input",id:"name",label:"name"},{type:"input",id:"desc",label:"desc",rules:[...s]}]);return(q,B)=>(p(),r(t,{"label-width":"100px",content:e,ref:"form",rules:a},null,8,["content","rules"]))}},m=c(F,[["__scopeId","data-v-4261a767"]]),d=n("h1",{id:"rules-plus",tabindex:"-1"},[i("rules-plus "),n("a",{class:"header-anchor",href:"#rules-plus","aria-label":'Permalink to "rules-plus"'},"​")],-1),_=n("br",null,null,-1),g=u(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
========
import{_ as t}from"./chunks/el-form-renderer.1ac91fef.js";import{_ as c,a0 as l,o as p,b as r,c as E,H as y,k as n,a as i,Q as u}from"./chunks/framework.52b122f8.js";import"./chunks/commonjsHelpers.725317a4.js";const F={__name:"rulesPlus",setup(o){const s=[{required:!0,message:"请输入活动名称",trigger:"change"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"change"}],a=l({name:[...s]}),e=l([{type:"input",id:"name",label:"name"},{type:"input",id:"desc",label:"desc",rules:[...s]}]);return(q,B)=>(p(),r(t,{"label-width":"100px",content:e,ref:"form",rules:a},null,8,["content","rules"]))}},m=c(F,[["__scopeId","data-v-dcc0b713"]]),d=n("h1",{id:"rules-plus",tabindex:"-1"},[i("rules-plus "),n("a",{class:"header-anchor",href:"#rules-plus","aria-label":'Permalink to "rules-plus"'},"​")],-1),_=n("br",null,null,-1),g=u(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
>>>>>>>> 38d3bc37b37fd8175a1d2a9bdf95322492d0935b:assets/assembly_form_rules-plus.md.84ecaad2.js
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:rules</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;rules&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rule</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;请输入活动名称&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { min: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;长度在 3 到 5 个字符&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rules</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({ name: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">rule] })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#9ECBFF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            rules: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">rule],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:rules</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;rules&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rule</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;请输入活动名称&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { min: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, max: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;长度在 3 到 5 个字符&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rules</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({ name: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">rule] })</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#032F62;">&quot;desc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&quot;desc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            rules: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">rule],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1),A=JSON.parse('{"title":"rules-plus","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/rules-plus.md","filePath":"assembly/form/rules-plus.md"}'),C={name:"assembly/form/rules-plus.md"},v=Object.assign(C,{setup(o){return(s,a)=>(p(),E("div",null,[d,_,y(m),g]))}});export{A as __pageData,v as default};
