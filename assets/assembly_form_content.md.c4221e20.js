import{_ as v}from"./chunks/el-form-renderer.7dd73455.js";import{h as i,a0 as m,C as d,o as g,b as _,w as a,l as u,a1 as k,k as e,t as F,H as l,a as o,c as w,Q as x}from"./chunks/framework.ce0e3599.js";import"./chunks/commonjsHelpers.725317a4.js";const M={__name:"content",setup(C){let r=i(0);const E=i();let y=i(0),t=m({name:"1111",region:[],type:[],startDate:"2019-01-01",endDate:"2019-01-02"});const n=m([{type:"input",id:"name",label:"name",attrs:{"data-name":"form1"},el:{size:"default",placeholder:"test placeholder"},rules:[{required:!0,message:"miss name",trigger:"blur"},{min:3,max:5,message:"length between 3 to 5",trigger:"blur"}]},{type:"select",id:"region",label:"region",remote:{request:()=>{const s=[{label:"shanghai",value:"shanghai"},{label:"beijing",value:"beijing"},{label:"guangzhou",value:"guangzhou"}];return r.value++,new Promise(p=>setTimeout(()=>p(s),2e3))}},el:{filterable:!0,multiple:!0,multipleLimit:2},rules:[{required:!0,message:"miss area",trigger:"change"}]},{type:"date-picker",id:"date",label:"date",el:{type:"daterange",valueFormat:"yyyy-MM-dd"},rules:[{required:!0,message:"miss date",trigger:"change"}],inputFormat:s=>{if(s.startDate&&s.endDate)return[s.startDate,s.endDate]},outputFormat:s=>s?{startDate:s[0],endDate:s[1]}:{startDate:"",endDate:""}},{type:"switch",id:"delivery",label:"delivery"},{type:"checkbox-group",id:"type",label:"type",default:[],options:[{label:"typeA"},{label:"typeB"},{label:"typeC"}],rules:[{type:"array",required:!0,message:"miss type",trigger:"change"}]},{type:"radio-group",id:"resource",label:"resource",options:[{label:"resourceA"},{label:"resourceB"}],rules:[{required:!0,message:"miss resource",trigger:"change"}]},{type:"input",id:"desc",label:"desc",el:{type:"textarea"},rules:[{required:!0,message:"miss desc",trigger:"blur"}]}]),B=()=>{E.value.methods.resetFields()},D=()=>{n[0].disabled=!n[0].disabled},b=()=>{const s=n.find(p=>p.id==="region");s&&(s.options=[{label:"广州",value:"广州"}])},A=()=>{const s=Math.floor(Math.random()*(n.length+1));y.value++,n.splice(s,0,{id:`name${y.value}`,label:`表单项${y.value}`,type:"input"})},f=()=>{if(n.length<=1)return;const s=Math.floor(Math.random()*n.length);n.splice(s,1)};return(s,p)=>{const c=d("el-button"),h=d("el-form-item");return g(),_(v,{"label-width":"100px",content:n,FormData:u(t),"onUpdate:FormData":p[0]||(p[0]=q=>k(t)?t.value=q:t=q),ref_key:"form",ref:E},{"id:region":a(()=>[e("div",null,"requestRemoteCount: "+F(u(r)),1)]),default:a(()=>[l(h,null,{default:a(()=>[l(c,{onClick:B},{default:a(()=>[o("resetForm")]),_:1}),l(c,{onClick:D},{default:a(()=>[o(F(n[0].disabled?"启":"禁")+"用第一项",1)]),_:1}),l(c,{onClick:b},{default:a(()=>[o("更新 region 的 options")]),_:1}),l(c,{onClick:A},{default:a(()=>[o("随机插入表单项")]),_:1}),l(c,{onClick:f},{default:a(()=>[o("随机移除表单项")]),_:1})]),_:1}),e("pre",null,F(u(t)),1)]),_:1},8,["content","FormData"])}}},I=e("h1",{id:"content",tabindex:"-1"},[o("content "),e("a",{class:"header-anchor",href:"#content","aria-label":'Permalink to "content"'},"​")],-1),R=e("p",null,"现在 content 是响应式的。这意味着: 1. disabled、options 和其他任何属性都可以直接在 content 上修改 2. 可以直接修改 content 来新增删除表单项",-1),z=e("br",null,null,-1),N=x(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-form-renderer</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model:FormData</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FormData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">region</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;requestRemoteCount: {{ requestRemoteCount }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;resetForm&quot;</span><span style="color:#E1E4E8;">&gt;resetForm&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;disableName&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;{{ content[0].disabled ? &quot;启&quot; : &quot;禁&quot; }}用第一项&lt;/</span><span style="color:#85E89D;">el-button</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setOptions&quot;</span><span style="color:#E1E4E8;">&gt;更新 region 的 options&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;addFormItem&quot;</span><span style="color:#E1E4E8;">&gt;随机插入表单项&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;removeFormItem&quot;</span><span style="color:#E1E4E8;">&gt;随机移除表单项&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;{{ FormData }}&lt;/</span><span style="color:#85E89D;">pre</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> requestRemoteCount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> FormData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;1111&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  region: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  startDate: </span><span style="color:#9ECBFF;">&quot;2019-01-01&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  endDate: </span><span style="color:#9ECBFF;">&quot;2019-01-02&quot;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    remote: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// url: &#39;https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&quot;guangzhou&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&quot;guangzhou&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">        requestRemoteCount.value</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">(data), </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
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
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  form.value.methods.</span><span style="color:#B392F0;">resetFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disableName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  content[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].disabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">content[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].disabled;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">region</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> content.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.id </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;region&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">region) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  region.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{ label: </span><span style="color:#9ECBFF;">&quot;广州&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;广州&quot;</span><span style="color:#E1E4E8;"> }];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addFormItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (content.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  id.value</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  content.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(i, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">\`name\${</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">\`表单项\${</span><span style="color:#E1E4E8;">id</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeFormItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (content.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> content.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  content.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-form-renderer</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model:FormData</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FormData&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">region</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;requestRemoteCount: {{ requestRemoteCount }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;resetForm&quot;</span><span style="color:#24292E;">&gt;resetForm&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;disableName&quot;</span></span>
<span class="line"><span style="color:#24292E;">        &gt;{{ content[0].disabled ? &quot;启&quot; : &quot;禁&quot; }}用第一项&lt;/</span><span style="color:#22863A;">el-button</span></span>
<span class="line"><span style="color:#24292E;">      &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setOptions&quot;</span><span style="color:#24292E;">&gt;更新 region 的 options&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;addFormItem&quot;</span><span style="color:#24292E;">&gt;随机插入表单项&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;removeFormItem&quot;</span><span style="color:#24292E;">&gt;随机移除表单项&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">pre</span><span style="color:#24292E;">&gt;{{ FormData }}&lt;/</span><span style="color:#22863A;">pre</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> requestRemoteCount </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">form</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> FormData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;1111&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  region: [],</span></span>
<span class="line"><span style="color:#24292E;">  type: [],</span></span>
<span class="line"><span style="color:#24292E;">  startDate: </span><span style="color:#032F62;">&quot;2019-01-01&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  endDate: </span><span style="color:#032F62;">&quot;2019-01-02&quot;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">    remote: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// url: &#39;https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&quot;guangzhou&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&quot;guangzhou&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ];</span></span>
<span class="line"><span style="color:#24292E;">        requestRemoteCount.value</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">r</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">(data), </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
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
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  form.value.methods.</span><span style="color:#6F42C1;">resetFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disableName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  content[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].disabled </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">content[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].disabled;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">region</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> content.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.id </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;region&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">region) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  region.options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{ label: </span><span style="color:#032F62;">&quot;广州&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;广州&quot;</span><span style="color:#24292E;"> }];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addFormItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">i</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (content.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">  id.value</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  content.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">\`name\${</span><span style="color:#24292E;">id</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">\`表单项\${</span><span style="color:#24292E;">id</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeFormItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (content.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">i</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> content.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  content.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1),$=JSON.parse('{"title":"content","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/content.md","filePath":"assembly/form/content.md"}'),T={name:"assembly/form/content.md"},S=Object.assign(T,{setup(C){return(r,E)=>(g(),w("div",null,[I,R,z,l(M),N]))}});export{$ as __pageData,S as default};
