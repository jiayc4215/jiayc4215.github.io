import{_ as F}from"./chunks/el-form-renderer.7dd73455.js";import{a0 as q,h as m,C as c,o as r,b as d,w as a,H as l,a as p,c as g,k as o,Q as C}from"./chunks/framework.ce0e3599.js";import"./chunks/commonjsHelpers.725317a4.js";const B={__name:"HomeView",setup(E){const e=q([{type:"input",id:"name",label:"name",attrs:{"data-name":"form1"},el:{size:"default",placeholder:"test placeholder"},rules:[{required:!0,message:"miss name",trigger:"blur"},{min:3,max:5,message:"length between 3 to 5",trigger:"blur"}]},{type:"select",id:"region",label:"area",el:{valueKey:"id"},options:[{label:"area1",value:{id:"shanghai",name:"shanghai"}},{label:"area2",value:{id:"beijing",name:"beijing"}}],rules:[{required:!0,message:"miss area",trigger:"change"}]},{type:"date-picker",id:"date",label:"date",el:{type:"datetime",placeholder:"select date",teleported:!1},rules:[{type:"date",required:!0,message:"miss date",trigger:"change"}]},{type:"switch",id:"delivery",label:"delivery"},{type:"checkbox-group",id:"type",label:"type",default:[],options:[{label:"typeA",value:"A"},{label:"typeB",value:"B"},{label:"typeC",value:"C"}],rules:[{type:"array",required:!0,message:"miss type",trigger:"change"}]},{type:"radio-group",id:"resource",label:"resource",options:[{label:"resourceA"},{label:"resourceB"}],rules:[{required:!0,message:"miss resource",trigger:"change"}]},{type:"input",id:"desc",label:"desc",el:{type:"textarea"},rules:[{required:!0,message:"miss desc",trigger:"blur"}]}]),s=m(),y=()=>{try{s.value.methods.validate(n=>{if(n)console.log("OK");else return console.log("error submit!!"),!1})}catch(n){console.log(n)}},i=()=>{s.value.methods.resetFields()};return(n,_)=>{const t=c("el-button"),u=c("el-form-item");return r(),d(F,{"label-width":"100px",content:e,ref_key:"ruleForm",ref:s},{default:a(()=>[l(u,null,{default:a(()=>[l(t,{type:"primary",onClick:y},{default:a(()=>[p("submit")]),_:1}),l(t,{onClick:i},{default:a(()=>[p("reset")]),_:1})]),_:1})]),_:1},8,["content"])}}},b=o("h1",{id:"basic",tabindex:"-1"},[p("basic "),o("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "basic"'},"​")],-1),h=o("br",null,null,-1),f=C(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ruleForm&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submitForm&quot;</span><span style="color:#E1E4E8;">&gt;submit&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;resetForm&quot;</span><span style="color:#E1E4E8;">&gt;reset&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;area&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      valueKey: </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;area1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          id: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;area2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          id: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss area&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;date-picker&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;datetime&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      placeholder: </span><span style="color:#9ECBFF;">&quot;select date&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      teleported: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ type: </span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">, required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;miss date&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;typeB&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;typeC&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;resourceB&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ruleForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">submitForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ruleForm.value.methods.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">valid</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (valid) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;OK&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;error submit!!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ruleForm.value.methods.</span><span style="color:#B392F0;">resetFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ruleForm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submitForm&quot;</span><span style="color:#24292E;">&gt;submit&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;resetForm&quot;</span><span style="color:#24292E;">&gt;reset&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
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
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;area&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      valueKey: </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    options: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;area1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: {</span></span>
<span class="line"><span style="color:#24292E;">          id: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;area2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: {</span></span>
<span class="line"><span style="color:#24292E;">          id: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss area&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;date-picker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;datetime&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      placeholder: </span><span style="color:#032F62;">&quot;select date&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      teleported: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    rules: [{ type: </span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">, required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;miss date&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;"> }],</span></span>
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
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;A&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;typeB&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;B&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;typeC&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;C&quot;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;resourceB&quot;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ruleForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">submitForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ruleForm.value.methods.</span><span style="color:#6F42C1;">validate</span><span style="color:#24292E;">((</span><span style="color:#E36209;">valid</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (valid) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;OK&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error submit!!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  ruleForm.value.methods.</span><span style="color:#6F42C1;">resetFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1),x=JSON.parse('{"title":"basic","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/basic.md","filePath":"assembly/form/basic.md"}'),v={name:"assembly/form/basic.md"},w=Object.assign(v,{setup(E){return(e,s)=>(r(),g("div",null,[b,h,l(B),f]))}});export{x as __pageData,w as default};
