import{_ as P}from"./chunks/el-form-renderer.1ac91fef.js";import{p as $,E as c,a as N}from"./chunks/index.b9d9a31e.js";import{_ as k,a0 as A,h as f,g as w,x as H,C as B,o as q,c as D,H as e,w as d,k as r,a as E,F as h,t as L,e as S,l as u,n as J,a1 as Q,a2 as G,Q as K}from"./chunks/framework.52b122f8.js";import"./chunks/commonjsHelpers.725317a4.js";const W={class:"component-upload-image"},X={style:{color:"#f56c6c"}},Y={style:{color:"#f56c6c"}},Z=["src"],ss={__name:"ImageUpload",props:{modelValue:[String,Object,Array],action:{type:String,default:"/dev-api/admin/product/fileUpload"},extralData:{type:Object,default:()=>({})},limit:{type:Number,default:5},fileSize:{type:Number,default:5},fileType:{type:Array,default:()=>["png","jpg","jpeg"]},isShowTip:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:t}){const n=o;let y=A([]),i=f(0),p=A([]),v=A({Authorization:"Bearer 1111"}),m=f(""),g=f(!1),C=null;const V=A({a:1}),b=f("");w(()=>n.isShowTip&&(n.fileType||n.fileSize)),H(()=>n.modelValue,s=>{if(console.log("watch触发",s),s)p=(Array.isArray(s)?s:Array.isArray(n.modelValue.split(","))?n.modelValue.split(","):Array.of(n.modelValue)).map(a=>(typeof a=="string"&&(a={name:a,url:a}),a)),console.log(p,"数据回显fileList");else return p=[],[]});const T=(s,l)=>{t("update:modelValue",x(p))},U=w(()=>n.action),j=(s,l)=>{s.code===200?(y.push({name:s.data,url:s.data}),y.length===i.value&&(p=p.concat(y),y=[],i.value=0,t("update:modelValue",x(p)),C.close()),C.close(),c({message:"上传成功",type:"success"})):s.code===401?c({message:"登录状态过期，请重新登录",type:"error"}):(i.value--,C.close(),c({message:"上传失败",type:"error"}),b.value.handleRemove(l))},I=s=>{let l=!1;if(n.fileType.length){let a="";s.name.lastIndexOf(".")>-1&&(a=s.name.slice(s.name.lastIndexOf(".")+1)),l=n.fileType.some(F=>s.type.indexOf(F)>-1?!0:!!(a&&a.indexOf(F)>-1))}else l=s.type.indexOf("image")>-1;if(!l)return c({message:`文件格式不正确, 请上传${n.fileType.join("/")}图片格式文件!`,type:"error"}),!1;if(n.fileSize&&!(s.size/1024/1024<n.fileSize))return c({message:`上传图片大小不能超过 ${n.fileSize} MB!`,type:"error"}),!1;C=N.service({lock:!0,text:"正在上传图片，请稍候...",background:"rgba(0, 0, 0, 0.7)"}),i.value++},x=(s,l)=>{let a="";l=l||",";for(let F in s)a+=s[F].url+l;return a!==""?a.substr(0,a.length-1):""},z=s=>{console.log(s),c({message:"上传图片失败，请重试",type:"error"}),C.close()},M=()=>{c({message:`上传文件数量不能超过 ${n.limit} 个!`,type:"error"})},R=s=>{m.value=s.url,g.value=!0};return(s,l)=>{const a=B("el-icon"),F=B("el-upload"),O=B("el-dialog");return q(),D("div",W,[e(F,{ref_key:"upload",ref:b,disabled:o.disabled,multiple:"",action:U.value,"list-type":"picture-card","on-success":j,"before-upload":I,limit:o.limit,"on-error":z,"on-exceed":M,data:{...V,...o.extralData},name:"file","on-remove":T,"show-file-list":!0,headers:u(v),"file-list":u(p),"on-preview":R,class:J({hide:u(p).length>=o.limit})},{tip:d(()=>[r("div",null,[E(" 请上传 "),o.fileSize?(q(),D(h,{key:0},[E(" 大小不超过 "),r("b",X,L(o.fileSize)+"MB",1)],64)):S("",!0),o.fileType?(q(),D(h,{key:1},[E(" 格式为 "),r("b",Y,L(o.fileType.join("/")),1)],64)):S("",!0),E(" 的文件 ")])]),default:d(()=>[e(a,{class:"avatar-uploader-icon"},{default:d(()=>[e(u($))]),_:1})]),_:1},8,["disabled","action","limit","data","headers","file-list","class"]),e(O,{modelValue:u(g),"onUpdate:modelValue":l[0]||(l[0]=_=>Q(g)?g.value=_:g=_),title:"预览",width:"800","append-to-body":""},{default:d(()=>[r("img",{src:u(m),style:{display:"block","max-width":"100%",margin:"0 auto"}},null,8,Z)]),_:1},8,["modelValue"])])}}},ns=k(ss,[["__scopeId","data-v-fe4b35f2"]]);const as={__name:"upload",setup(o){const t=f(""),n=A([{label:"图片上传",component:G(ns),el:{isShowTip:!1,limit:2,extralData:{type:"identityBack"}},id:"identityBack",rules:[{required:!0,message:"请选择门头照",trigger:"blur"}]}]),y=()=>{const p=t.value.getFormValue();console.log(p)},i=()=>{t.value.updateForm({identityBack:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100,https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"})};return(p,v)=>{const m=B("el-button");return q(),D(h,null,[e(P,{ref_key:"formRender",ref:t,content:n},null,8,["content"]),e(m,{onClick:y},{default:d(()=>[E("获取图片地址")]),_:1}),e(m,{onClick:i},{default:d(()=>[E("设置图片地址")]),_:1})],64)}}},ls=k(as,[["__scopeId","data-v-487086a9"]]),ps=r("h1",{id:"basic",tabindex:"-1"},[E("basic "),r("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "basic"'},"​")],-1),os=r("br",null,null,-1),es=K(`<h2 id="父组件代码" tabindex="-1">父组件代码 <a class="header-anchor" href="#父组件代码" aria-label="Permalink to &quot;父组件代码&quot;">​</a></h2><ul><li>isShowTip:是否展示提示</li><li>limit: 最大上传的个数</li><li>extralData: 附加参数</li></ul><details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;formRender&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getValue&quot;</span><span style="color:#E1E4E8;">&gt;获取图片地址&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setValue&quot;</span><span style="color:#E1E4E8;">&gt;设置图片地址&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, markRaw, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ImageUpload </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/ImageUpload.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">formRender</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;图片上传&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: </span><span style="color:#B392F0;">markRaw</span><span style="color:#E1E4E8;">(ImageUpload),</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      isShowTip: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      limit: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      extralData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;identityBack&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&quot;identityBack&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [{ required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&quot;请选择门头照&quot;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&quot;blur&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> formRender.value.</span><span style="color:#B392F0;">getFormValue</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  formRender.value.</span><span style="color:#B392F0;">updateForm</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    identityBack:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100,https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;formRender&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getValue&quot;</span><span style="color:#24292E;">&gt;获取图片地址&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setValue&quot;</span><span style="color:#24292E;">&gt;设置图片地址&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, markRaw, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ImageUpload </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/ImageUpload.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">formRender</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;图片上传&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: </span><span style="color:#6F42C1;">markRaw</span><span style="color:#24292E;">(ImageUpload),</span></span>
<span class="line"><span style="color:#24292E;">    el: {</span></span>
<span class="line"><span style="color:#24292E;">      isShowTip: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      limit: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      extralData: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;identityBack&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&quot;identityBack&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    rules: [{ required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&quot;请选择门头照&quot;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&quot;blur&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> formRender.value.</span><span style="color:#6F42C1;">getFormValue</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  formRender.value.</span><span style="color:#6F42C1;">updateForm</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    identityBack:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100,https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="上传组件代码" tabindex="-1">上传组件代码 <a class="header-anchor" href="#上传组件代码" aria-label="Permalink to &quot;上传组件代码&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">测试用例不可以上传; 请将 action 替换为上传地址； 或者点击设置图片地址查看效果</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">测试用例不可以上传; 请将 action 替换为上传地址； 或者点击设置图片地址查看效果</span></span></code></pre></div><ul><li>disabled：禁用</li><li>multiple：支持多选</li><li>action：提交地址</li><li>list-type：文件列表的类型 （text/picture/picture-card）、</li><li>on-success：文件上传成功时的钩子</li><li>before-upload：上传文件之前的钩子</li><li>limit：最大允许上传个数</li><li>on-error：文件上传失败时的钩子</li><li>on-exceed：文件超出个数限制时的钩子</li><li>data： 上传时附带的额外参数</li><li>on-remove 文件列表移除文件时的钩子</li><li>show-file-list 是否显示已上传文件列表</li><li>headers 设置上传的请求头部</li><li>file-list 上传的文件列表, 例如: [{name: &#39;food.jpg&#39;, url: &#39;<a href="https://xxx.cdn.com/xxx.jpg" target="_blank" rel="noreferrer">https://xxx.cdn.com/xxx.jpg</a>&#39;}]</li><li>on-preview 点击文件列表中已上传的文件时的钩子</li></ul><details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">disabled：禁用</span></span>
<span class="line"><span style="color:#6A737D;">multiple：支持多选</span></span>
<span class="line"><span style="color:#6A737D;">action：提交地址</span></span>
<span class="line"><span style="color:#6A737D;">list-type：文件列表的类型 （text/picture/picture-card）、</span></span>
<span class="line"><span style="color:#6A737D;">on-success：文件上传成功时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">before-upload：上传文件之前的钩子</span></span>
<span class="line"><span style="color:#6A737D;">limit：最大允许上传个数</span></span>
<span class="line"><span style="color:#6A737D;">on-error：文件上传失败时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">on-exceed：文件超出个数限制时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">data：	上传时附带的额外参数</span></span>
<span class="line"><span style="color:#6A737D;">on-remove	文件列表移除文件时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">show-file-list	是否显示已上传文件列表</span></span>
<span class="line"><span style="color:#6A737D;">headers	设置上传的请求头部</span></span>
<span class="line"><span style="color:#6A737D;">file-list	上传的文件列表, 例如: [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">on-preview	点击文件列表中已上传的文件时的钩子</span></span>
<span class="line"><span style="color:#6A737D;"> --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;component-upload-image&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-upload</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;upload&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">multiple</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;uploadFileUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">list-type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;picture-card&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:on-success</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleUploadSuccess&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:before-upload</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleBeforeUpload&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:limit</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;limit&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:on-error</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleUploadError&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:on-exceed</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleExceed&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ ...defaultData, ...extralData }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;file&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:on-remove</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleRemove&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:show-file-list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:headers</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;headers&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:file-list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fileList&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:on-preview</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handlePictureCardPreview&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ hide: fileList.length &gt;= limit }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;avatar-uploader-icon&quot;</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#FDAEB7;font-style:italic;">Plus</span><span style="color:#E1E4E8;"> /&gt;&lt;/</span><span style="color:#85E89D;">el-icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">tip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          请上传</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">fileSize</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            大小不超过 &lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #f56c6c&quot;</span><span style="color:#E1E4E8;">&gt;{{ fileSize }}MB&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">fileType</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            格式为 &lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;color: #f56c6c&quot;</span><span style="color:#E1E4E8;">&gt;{{ fileType.join(&quot;/&quot;) }}&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-upload</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-dialog</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dialogVisible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;预览&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;800&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">append-to-body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">img</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dialogImageUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;display: block; max-width: 100%; margin: 0 auto&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-dialog</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed, reactive, watch } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElMessage, ElLoading } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-plus&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Plus } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@element-plus/icons-vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> uploadList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([]); </span><span style="color:#6A737D;">// 准备上传的数组</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 准备上传的个数</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> fileList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([]); </span><span style="color:#6A737D;">// 上传的文件列表</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> headers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({ Authorization: </span><span style="color:#9ECBFF;">&quot;Bearer &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1111</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// 设置上传的请求头部</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dialogImageUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dialogVisible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> loading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 回显的值</span></span>
<span class="line"><span style="color:#E1E4E8;">  modelValue: [String, Object, Array],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 	必选参数，上传的地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  action: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;/dev-api/admin/product/fileUpload&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 	上传时附带的额外参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  extralData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 图片数量限制</span></span>
<span class="line"><span style="color:#E1E4E8;">  limit: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 大小限制(MB)</span></span>
<span class="line"><span style="color:#E1E4E8;">  fileSize: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 文件类型, 例如[&#39;png&#39;, &#39;jpg&#39;, &#39;jpeg&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">  fileType: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;png&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;jpg&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;jpeg&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 是否显示提示</span></span>
<span class="line"><span style="color:#E1E4E8;">  isShowTip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 禁用</span></span>
<span class="line"><span style="color:#E1E4E8;">  disabled: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">defaultData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;update:modelValue&quot;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">showTip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> props.isShowTip </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (props.fileType </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> props.fileSize);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> props.modelValue,</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;watch触发&quot;</span><span style="color:#E1E4E8;">, val);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 首先将值转为数组, 当只穿了一个图片时，会报map方法错误</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 如果&quot;value&quot;是一个数组，则直接使用它；否则，将&quot;value&quot;按逗号分隔成一个数组；</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 如果&quot;value&quot;不是一个数组或字符串，则将&quot;value&quot;作为单独的元素创建一个数组。\\</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 然后，将数组中的每个元素转换为对象，并将转换后的对象数组赋值给组件的&quot;fileList&quot;属性。</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(props.modelValue.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> props.modelValue.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">of</span><span style="color:#E1E4E8;">(props.modelValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 然后将数组转为对象数组</span></span>
<span class="line"><span style="color:#E1E4E8;">      fileList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;string&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// edit by</span></span>
<span class="line"><span style="color:#E1E4E8;">          item </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name: item, url: item };</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> item;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(fileList, </span><span style="color:#9ECBFF;">&quot;数据回显fileList&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fileList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除图片</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleRemove</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">List</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const findex = fileList.map((f) =&gt; f.name).indexOf(file.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// if (findex &gt; -1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   fileList.splice(findex, 1);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   emit(&quot;update:modelValue&quot;, listToString(fileList));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;update:modelValue&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">listToString</span><span style="color:#E1E4E8;">(fileList));</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 提交地址</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">uploadFileUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> props.action;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 上传成功回调</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleUploadSuccess</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// edit by</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// edit by</span></span>
<span class="line"><span style="color:#E1E4E8;">    uploadList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ name: res.data, url: res.data });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 上传成功数等于上传数（上传成功）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (uploadList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> number.value) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 回显赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">      fileList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fileList.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(uploadList);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 情空数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      uploadList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">      number.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 向父组件派发最终结果</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;update:modelValue&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">listToString</span><span style="color:#E1E4E8;">(fileList));</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    loading.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&quot;上传成功&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">401</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&quot;登录状态过期，请重新登录&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 删除上传</span></span>
<span class="line"><span style="color:#E1E4E8;">    number.value</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    loading.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&quot;上传失败&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    upload.value.</span><span style="color:#B392F0;">handleRemove</span><span style="color:#E1E4E8;">(file);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 上传前loading加载</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleBeforeUpload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> isImg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (props.fileType.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 用来存储文件的扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> fileExtension </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果包含扩展名返回扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (file.name.</span><span style="color:#B392F0;">lastIndexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      fileExtension </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> file.name.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(file.name.</span><span style="color:#B392F0;">lastIndexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果有一个元素满足条件，则表达式返回true</span></span>
<span class="line"><span style="color:#E1E4E8;">    isImg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> props.fileType.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 如果文件的类型（file.type）中包含当前遍历到的类型（type），则返回true，表示文件类型匹配成功。</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (file.type.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(type) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 如果文件的扩展名（fileExtension）存在，并且文件的扩展名中包含当前遍历到的类型（type），则返回true，表示文件类型匹配成功。</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">(fileExtension </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> fileExtension.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(type) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有定义文件类型，则会检查文件的类型是否包含&quot;image&quot;字符串，如果是图片类型，则将isImg设置为true。</span></span>
<span class="line"><span style="color:#E1E4E8;">    isImg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> file.type.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;image&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//图片格式不正确</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isImg) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">\`文件格式不正确, 请上传\${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">fileType</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}图片格式文件!\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 会检查文件的大小是否小于指定的大小。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (props.fileSize) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isLt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> file.size </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> props.fileSize;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isLt) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">\`上传图片大小不能超过 \${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">fileSize</span><span style="color:#9ECBFF;">} MB!\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  loading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ElLoading.</span><span style="color:#B392F0;">service</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    lock: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&quot;正在上传图片，请稍候...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    background: </span><span style="color:#9ECBFF;">&quot;rgba(0, 0, 0, 0.7)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  number.value</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 对象转成指定字符串分隔</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">listToString</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">list</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">separator</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用来存储最终的字符串结果。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> strs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果没有传入分隔符参数separator，则将separator设置为逗号&quot;,&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  separator </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> separator </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> list) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将列表中的每个元素的url属性值去除baseUrl部分，并将其与分隔符连接起来，然后添加到strs字符串中</span></span>
<span class="line"><span style="color:#E1E4E8;">    strs </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> list[i].url </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> separator;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 通过判断strs是否为空字符串，如果不为空，则使用substr函数去掉最后一个分隔符，否则返回空字符串。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> strs </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> strs.</span><span style="color:#B392F0;">substr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, strs.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 上传失败</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleUploadError</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&quot;上传图片失败，请重试&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  loading.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 文件个数超出</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleExceed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ElMessage</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">\`上传文件数量不能超过 \${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">limit</span><span style="color:#9ECBFF;">} 个!\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handlePictureCardPreview</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialogImageUrl.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> file.url;</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialogVisible.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">:deep(</span><span style="color:#B392F0;">.hide</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.el-upload--picture-card</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.avatar-uploader</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.avatar</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">178</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">178</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.avatar-uploader</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.el-upload</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dashed</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--el-border-color</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">6</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--el-transition-duration-fast</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.avatar-uploader</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.el-upload:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--el-color-primary</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.el-icon.avatar-uploader-icon</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">28</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#8c939d</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">178</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">178</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">disabled：禁用</span></span>
<span class="line"><span style="color:#6A737D;">multiple：支持多选</span></span>
<span class="line"><span style="color:#6A737D;">action：提交地址</span></span>
<span class="line"><span style="color:#6A737D;">list-type：文件列表的类型 （text/picture/picture-card）、</span></span>
<span class="line"><span style="color:#6A737D;">on-success：文件上传成功时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">before-upload：上传文件之前的钩子</span></span>
<span class="line"><span style="color:#6A737D;">limit：最大允许上传个数</span></span>
<span class="line"><span style="color:#6A737D;">on-error：文件上传失败时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">on-exceed：文件超出个数限制时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">data：	上传时附带的额外参数</span></span>
<span class="line"><span style="color:#6A737D;">on-remove	文件列表移除文件时的钩子</span></span>
<span class="line"><span style="color:#6A737D;">show-file-list	是否显示已上传文件列表</span></span>
<span class="line"><span style="color:#6A737D;">headers	设置上传的请求头部</span></span>
<span class="line"><span style="color:#6A737D;">file-list	上传的文件列表, 例如: [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">on-preview	点击文件列表中已上传的文件时的钩子</span></span>
<span class="line"><span style="color:#6A737D;"> --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;component-upload-image&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-upload</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;upload&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">multiple</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;uploadFileUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">list-type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;picture-card&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:on-success</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleUploadSuccess&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:before-upload</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleBeforeUpload&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:limit</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;limit&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:on-error</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleUploadError&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:on-exceed</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleExceed&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ ...defaultData, ...extralData }&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;file&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:on-remove</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleRemove&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:show-file-list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:headers</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;headers&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:file-list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fileList&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:on-preview</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handlePictureCardPreview&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ hide: fileList.length &gt;= limit }&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar-uploader-icon&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#B31D28;font-style:italic;">Plus</span><span style="color:#24292E;"> /&gt;&lt;/</span><span style="color:#22863A;">el-icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">tip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          请上传</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">fileSize</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            大小不超过 &lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;color: #f56c6c&quot;</span><span style="color:#24292E;">&gt;{{ fileSize }}MB&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">fileType</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            格式为 &lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;color: #f56c6c&quot;</span><span style="color:#24292E;">&gt;{{ fileType.join(&quot;/&quot;) }}&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          的文件</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-upload</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-dialog</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dialogVisible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;预览&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;800&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">append-to-body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dialogImageUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;display: block; max-width: 100%; margin: 0 auto&quot;</span></span>
<span class="line"><span style="color:#24292E;">      /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-dialog</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, computed, reactive, watch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElMessage, ElLoading } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-plus&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Plus } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@element-plus/icons-vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> uploadList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([]); </span><span style="color:#6A737D;">// 准备上传的数组</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 准备上传的个数</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> fileList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([]); </span><span style="color:#6A737D;">// 上传的文件列表</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> headers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({ Authorization: </span><span style="color:#032F62;">&quot;Bearer &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1111</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// 设置上传的请求头部</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dialogImageUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dialogVisible </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> loading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 回显的值</span></span>
<span class="line"><span style="color:#24292E;">  modelValue: [String, Object, Array],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 	必选参数，上传的地址</span></span>
<span class="line"><span style="color:#24292E;">  action: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;/dev-api/admin/product/fileUpload&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 	上传时附带的额外参数</span></span>
<span class="line"><span style="color:#24292E;">  extralData: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Object,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 图片数量限制</span></span>
<span class="line"><span style="color:#24292E;">  limit: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Number,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 大小限制(MB)</span></span>
<span class="line"><span style="color:#24292E;">  fileSize: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Number,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文件类型, 例如[&#39;png&#39;, &#39;jpg&#39;, &#39;jpeg&#39;]</span></span>
<span class="line"><span style="color:#24292E;">  fileType: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Array,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;png&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;jpg&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;jpeg&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 是否显示提示</span></span>
<span class="line"><span style="color:#24292E;">  isShowTip: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 禁用</span></span>
<span class="line"><span style="color:#24292E;">  disabled: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">defaultData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">emit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEmits</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;update:modelValue&quot;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">upload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">showTip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> props.isShowTip </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (props.fileType </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> props.fileSize);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> props.modelValue,</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;watch触发&quot;</span><span style="color:#24292E;">, val);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (val) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 首先将值转为数组, 当只穿了一个图片时，会报map方法错误</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果&quot;value&quot;是一个数组，则直接使用它；否则，将&quot;value&quot;按逗号分隔成一个数组；</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果&quot;value&quot;不是一个数组或字符串，则将&quot;value&quot;作为单独的元素创建一个数组。\\</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 然后，将数组中的每个元素转换为对象，并将转换后的对象数组赋值给组件的&quot;fileList&quot;属性。</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(val)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(props.modelValue.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> props.modelValue.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">of</span><span style="color:#24292E;">(props.modelValue);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 然后将数组转为对象数组</span></span>
<span class="line"><span style="color:#24292E;">      fileList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;string&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// edit by</span></span>
<span class="line"><span style="color:#24292E;">          item </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name: item, url: item };</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> item;</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(fileList, </span><span style="color:#032F62;">&quot;数据回显fileList&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      fileList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除图片</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleRemove</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">file</span><span style="color:#24292E;">, </span><span style="color:#E36209;">List</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const findex = fileList.map((f) =&gt; f.name).indexOf(file.name);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// if (findex &gt; -1) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   fileList.splice(findex, 1);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   emit(&quot;update:modelValue&quot;, listToString(fileList));</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;update:modelValue&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">listToString</span><span style="color:#24292E;">(fileList));</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 提交地址</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">uploadFileUrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> props.action;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 上传成功回调</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleUploadSuccess</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">, </span><span style="color:#E36209;">file</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// edit by</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// edit by</span></span>
<span class="line"><span style="color:#24292E;">    uploadList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({ name: res.data, url: res.data });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 上传成功数等于上传数（上传成功）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (uploadList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> number.value) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 回显赋值</span></span>
<span class="line"><span style="color:#24292E;">      fileList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fileList.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(uploadList);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 情空数据</span></span>
<span class="line"><span style="color:#24292E;">      uploadList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">      number.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 向父组件派发最终结果</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;update:modelValue&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">listToString</span><span style="color:#24292E;">(fileList));</span></span>
<span class="line"><span style="color:#24292E;">      loading.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    loading.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&quot;上传成功&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">401</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&quot;登录状态过期，请重新登录&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 删除上传</span></span>
<span class="line"><span style="color:#24292E;">    number.value</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    loading.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&quot;上传失败&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    upload.value.</span><span style="color:#6F42C1;">handleRemove</span><span style="color:#24292E;">(file);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 上传前loading加载</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleBeforeUpload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">file</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> isImg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (props.fileType.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 用来存储文件的扩展名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> fileExtension </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果包含扩展名返回扩展名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (file.name.</span><span style="color:#6F42C1;">lastIndexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      fileExtension </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> file.name.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(file.name.</span><span style="color:#6F42C1;">lastIndexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果有一个元素满足条件，则表达式返回true</span></span>
<span class="line"><span style="color:#24292E;">    isImg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> props.fileType.</span><span style="color:#6F42C1;">some</span><span style="color:#24292E;">((</span><span style="color:#E36209;">type</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果文件的类型（file.type）中包含当前遍历到的类型（type），则返回true，表示文件类型匹配成功。</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (file.type.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(type) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果文件的扩展名（fileExtension）存在，并且文件的扩展名中包含当前遍历到的类型（type），则返回true，表示文件类型匹配成功。</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!!</span><span style="color:#24292E;">(fileExtension </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> fileExtension.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(type) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有定义文件类型，则会检查文件的类型是否包含&quot;image&quot;字符串，如果是图片类型，则将isImg设置为true。</span></span>
<span class="line"><span style="color:#24292E;">    isImg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> file.type.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;image&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//图片格式不正确</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">isImg) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">\`文件格式不正确, 请上传\${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">fileType</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">join</span><span style="color:#032F62;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}图片格式文件!\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 会检查文件的大小是否小于指定的大小。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (props.fileSize) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isLt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> file.size </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> props.fileSize;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">isLt) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        message: </span><span style="color:#032F62;">\`上传图片大小不能超过 \${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">fileSize</span><span style="color:#032F62;">} MB!\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  loading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ElLoading.</span><span style="color:#6F42C1;">service</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    lock: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&quot;正在上传图片，请稍候...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    background: </span><span style="color:#032F62;">&quot;rgba(0, 0, 0, 0.7)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  number.value</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 对象转成指定字符串分隔</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">listToString</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">list</span><span style="color:#24292E;">, </span><span style="color:#E36209;">separator</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用来存储最终的字符串结果。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> strs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果没有传入分隔符参数separator，则将separator设置为逗号&quot;,&quot;</span></span>
<span class="line"><span style="color:#24292E;">  separator </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> separator </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> list) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将列表中的每个元素的url属性值去除baseUrl部分，并将其与分隔符连接起来，然后添加到strs字符串中</span></span>
<span class="line"><span style="color:#24292E;">    strs </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> list[i].url </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> separator;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 通过判断strs是否为空字符串，如果不为空，则使用substr函数去掉最后一个分隔符，否则返回空字符串。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> strs </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> strs.</span><span style="color:#6F42C1;">substr</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, strs.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 上传失败</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleUploadError</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    message: </span><span style="color:#032F62;">&quot;上传图片失败，请重试&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  loading.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 文件个数超出</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleExceed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ElMessage</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    message: </span><span style="color:#032F62;">\`上传文件数量不能超过 \${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">limit</span><span style="color:#032F62;">} 个!\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handlePictureCardPreview</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">file</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  dialogImageUrl.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> file.url;</span></span>
<span class="line"><span style="color:#24292E;">  dialogVisible.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">:deep(</span><span style="color:#6F42C1;">.hide</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.el-upload--picture-card</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.avatar-uploader</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.avatar</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">178</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">178</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.avatar-uploader</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.el-upload</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dashed</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--el-border-color</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pointer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--el-transition-duration-fast</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.avatar-uploader</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.el-upload:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--el-color-primary</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.el-icon.avatar-uploader-icon</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">28</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#8c939d</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">178</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">178</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,7),is=JSON.parse('{"title":"basic","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/advanced/upload.md","filePath":"assembly/advanced/upload.md"}'),ts={name:"assembly/advanced/upload.md"},Fs=Object.assign(ts,{setup(o){return(t,n)=>(q(),D("div",null,[ps,os,e(ls),es]))}});export{is as __pageData,Fs as default};
