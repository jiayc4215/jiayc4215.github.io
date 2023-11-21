import{_ as q}from"./chunks/el-form-renderer.7dd73455.js";import{_ as v,h as y,a0 as f,C,o as i,c as u,k as s,H as l,w as o,t as _,l as B,F as A,a as e,p as D,m as b,Q as h}from"./chunks/framework.ce0e3599.js";import"./chunks/commonjsHelpers.725317a4.js";const F=a=>(D("data-v-1d38f2ad"),a=a(),b(),a),V=F(()=>s("div",{class:"box"},"update-form",-1)),x=F(()=>s("div",null,"默认情况下，updateForm 来者不拒，不在表单设置内的值，也可以存储进去",-1)),k={class:"update-form"},R={__name:"update",setup(a){let p=y(),t=y();const d=f([{id:"name",type:"input",label:"name",el:{placeholder:"name"}},{id:"area",type:"select",label:"area",el:{placeholder:"area"},options:[{label:"shanghai",value:"shanghai"},{label:"beijing",value:"beijing"}]}]),r=E=>{let n=p.value.getFormValue({strict:E});t.value=n},m=()=>{p.value.updateForm({name:"alvin",area:"shanghai",extraKey:"extraValue"})};return(E,n)=>{const c=C("el-button");return i(),u(A,null,[V,x,s("div",k,[l(q,{content:d,ref_key:"formRender",ref:p},{default:o(()=>[l(c,{onClick:m},{default:o(()=>[e("updateForm()")]),_:1}),s("div",null,[l(c,{type:"primary",onClick:n[0]||(n[0]=g=>r(!1))},{default:o(()=>[e("log getFormValue()")]),_:1}),l(c,{type:"primary",onClick:n[1]||(n[1]=g=>r(!0))},{default:o(()=>[e("log getFormValue({strict: true})")]),_:1})])]),_:1},8,["content"]),s("div",null,_(B(t)),1)])],64)}}},S=v(R,[["__scopeId","data-v-1d38f2ad"]]),j=s("h1",{id:"update-form",tabindex:"-1"},[e("update-form "),s("a",{class:"header-anchor",href:"#update-form","aria-label":'Permalink to "update-form"'},"​")],-1),T=s("br",null,null,-1),$=h(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;update-form&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;默认情况下，updateForm 来者不拒，不在表单设置内的值，也可以存储进去&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;update-form&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;formRender&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setValue&quot;</span><span style="color:#E1E4E8;">&gt;updateForm()&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getValue(false)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &gt;log getFormValue()&lt;/</span><span style="color:#85E89D;">el-button</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getValue(true)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &gt;log getFormValue({strict: true})&lt;/</span><span style="color:#85E89D;">el-button</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;{{ value }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> formRender </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      placeholder: </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;area&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;select&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;area&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      placeholder: </span><span style="color:#9ECBFF;">&quot;area&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&quot;beijing&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">strict</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> formRender.value.</span><span style="color:#B392F0;">getFormValue</span><span style="color:#E1E4E8;">({ strict });</span></span>
<span class="line"><span style="color:#E1E4E8;">  value.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  formRender.value.</span><span style="color:#B392F0;">updateForm</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;alvin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    area: </span><span style="color:#9ECBFF;">&quot;shanghai&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置冗余字段</span></span>
<span class="line"><span style="color:#E1E4E8;">    extraKey: </span><span style="color:#9ECBFF;">&quot;extraValue&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;update-form&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;默认情况下，updateForm 来者不拒，不在表单设置内的值，也可以存储进去&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;update-form&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;formRender&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setValue&quot;</span><span style="color:#24292E;">&gt;updateForm()&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getValue(false)&quot;</span></span>
<span class="line"><span style="color:#24292E;">          &gt;log getFormValue()&lt;/</span><span style="color:#22863A;">el-button</span></span>
<span class="line"><span style="color:#24292E;">        &gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getValue(true)&quot;</span></span>
<span class="line"><span style="color:#24292E;">          &gt;log getFormValue({strict: true})&lt;/</span><span style="color:#22863A;">el-button</span></span>
<span class="line"><span style="color:#24292E;">        &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;{{ value }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> formRender </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      placeholder: </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;area&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;select&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;area&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      placeholder: </span><span style="color:#032F62;">&quot;area&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    options: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&quot;beijing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">strict</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> formRender.value.</span><span style="color:#6F42C1;">getFormValue</span><span style="color:#24292E;">({ strict });</span></span>
<span class="line"><span style="color:#24292E;">  value.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  formRender.value.</span><span style="color:#6F42C1;">updateForm</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;alvin&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    area: </span><span style="color:#032F62;">&quot;shanghai&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置冗余字段</span></span>
<span class="line"><span style="color:#24292E;">    extraKey: </span><span style="color:#032F62;">&quot;extraValue&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1),K=JSON.parse('{"title":"update-form","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/update-form.md","filePath":"assembly/form/update-form.md"}'),I={name:"assembly/form/update-form.md"},z=Object.assign(I,{setup(a){return(p,t)=>(i(),u("div",null,[j,T,l(S),$]))}});export{K as __pageData,z as default};
