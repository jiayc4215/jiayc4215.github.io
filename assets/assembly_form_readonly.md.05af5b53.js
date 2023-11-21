import{_ as C}from"./chunks/el-form-renderer.7dd73455.js";import{_ as B,h as b,a0 as h,C as E,o as y,c as i,H as n,w as e,F as f,a as t,p as v,m as _,k as a,Q as q}from"./chunks/framework.ce0e3599.js";import"./chunks/commonjsHelpers.725317a4.js";const F=s=>(v("data-v-a580f54d"),s=s(),_(),s),A=F(()=>a("div",{class:"box"},"readonly",-1)),D=F(()=>a("div",null,"设置 readonly 属性后，el-input 直接展示纯文本的值（value）；el-select 显示对应的 label；其他组件等同于 disabled = true",-1)),x={__name:"readonly",setup(s){const l=b(),c=h([{default:"小明",type:"input",id:"name",label:"name",attrs:{"data-name":"form1"},el:{size:"default",placeholder:"test placeholder"},rules:[{required:!0,message:"miss name",trigger:"blur"},{min:3,max:5,message:"length between 3 to 5",trigger:"blur"}]},{default:"shanghai",type:"select",id:"region",label:"area",options:[{label:"上海",value:"shanghai"},{label:"北京",value:"beijing"}],rules:[{required:!0,message:"miss area",trigger:"change"}]},{default:["shanghai","beijing"],type:"select",id:"multi-region",label:"multi area",options:[{label:"上海",value:"shanghai"},{label:"北京",value:"beijing"}],el:{multiple:!0},rules:[{required:!0,message:"miss area",trigger:"change"}]},{default:"[native Date Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)]",type:"date-picker",id:"date",label:"date",el:{type:"datetime",placeholder:"select date"},rules:[{type:"date",required:!0,message:"miss date",trigger:"change"}]},{default:!0,type:"switch",id:"delivery",label:"delivery"},{type:"checkbox-group",id:"type",label:"type",default:["typeA","typeB"],options:[{label:"typeA"},{label:"typeB"},{label:"typeC"}],rules:[{type:"array",required:!0,message:"miss type",trigger:"change"}]},{default:"resourceA",type:"radio-group",id:"resource",label:"resource",options:[{label:"resourceA"},{label:"resourceB"}],rules:[{required:!0,message:"miss resource",trigger:"change"}]},{default:"小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述",type:"input",id:"desc",label:"desc",el:{type:"textarea"},rules:[{required:!0,message:"miss desc",trigger:"blur"}]}]),u=()=>{try{l.value.methods.validate(p=>{if(p)console.log("OK");else return console.log("error submit!!"),!1})}catch(p){console.log(p)}},d=()=>{l.value.methods.resetFields()};return(p,o)=>{const r=E("el-button"),m=E("el-form-item");return y(),i(f,null,[A,D,n(C,{readonly:"","label-width":"100px",content:c,ref_key:"ruleForm",ref:l},{default:e(()=>[n(m,null,{default:e(()=>[n(r,{type:"primary",onClick:o[0]||(o[0]=g=>u("ruleForm"))},{default:e(()=>[t("submit")]),_:1}),n(r,{onClick:o[1]||(o[1]=g=>d("ruleForm"))},{default:e(()=>[t("reset")]),_:1})]),_:1})]),_:1},8,["content"])],64)}}},k=B(x,[["__scopeId","data-v-a580f54d"]]),w=a("h1",{id:"readonly",tabindex:"-1"},[t("readonly "),a("a",{class:"header-anchor",href:"#readonly","aria-label":'Permalink to "readonly"'},"​")],-1),j=a("br",null,null,-1),T=q(`<details class="details custom-block"><summary>查看源代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;readonly&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;设置 readonly 属性后，el-input 直接展示纯文本的值（value）；el-select 显示对应的 label；其他组件等同于 disabled = true&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">readonly</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ruleForm&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submitForm(&#39;ruleForm&#39;)&quot;</span><span style="color:#E1E4E8;">&gt;submit&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;resetForm(&#39;ruleForm&#39;)&quot;</span><span style="color:#E1E4E8;">&gt;reset&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-form-renderer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { reactive, ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> elFormRenderer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ruleForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        attrs: { </span><span style="color:#9ECBFF;">&#39;data-name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;form1&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            size: </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            placeholder: </span><span style="color:#9ECBFF;">&#39;test placeholder&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss name&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;blur&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { min: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;length between 3 to 5&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;blur&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;shanghai&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;region&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;area&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        options: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;上海&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;shanghai&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;北京&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;beijing&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss area&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: [</span><span style="color:#9ECBFF;">&#39;shanghai&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;beijing&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;multi-region&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;multi area&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        options: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;上海&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;shanghai&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;北京&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            value: </span><span style="color:#9ECBFF;">&#39;beijing&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            multiple: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss area&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;[native Date Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;date-picker&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;date&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;date&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;datetime&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            placeholder: </span><span style="color:#9ECBFF;">&#39;select date&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { type: </span><span style="color:#9ECBFF;">&#39;date&#39;</span><span style="color:#E1E4E8;">, required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss date&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;switch&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;delivery&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;delivery&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;checkbox-group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: [</span><span style="color:#9ECBFF;">&#39;typeA&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;typeB&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        options: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;typeA&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;typeB&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;typeC&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { type: </span><span style="color:#9ECBFF;">&#39;array&#39;</span><span style="color:#E1E4E8;">, required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss type&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;resourceA&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;radio-group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;resource&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;resource&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        options: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;resourceA&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: </span><span style="color:#9ECBFF;">&#39;resourceB&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss resource&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;change&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;desc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;desc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        el: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;textarea&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, message: </span><span style="color:#9ECBFF;">&#39;miss desc&#39;</span><span style="color:#E1E4E8;">, trigger: </span><span style="color:#9ECBFF;">&#39;blur&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">submitForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        ruleForm.value.methods.</span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">valid</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (valid) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;OK&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;error submit!!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetForm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ruleForm.value.methods.</span><span style="color:#B392F0;">resetFields</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;readonly&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;设置 readonly 属性后，el-input 直接展示纯文本的值（value）；el-select 显示对应的 label；其他组件等同于 disabled = true&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">readonly</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ruleForm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submitForm(&#39;ruleForm&#39;)&quot;</span><span style="color:#24292E;">&gt;submit&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;resetForm(&#39;ruleForm&#39;)&quot;</span><span style="color:#24292E;">&gt;reset&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-form-renderer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { reactive, ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> elFormRenderer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../components/femessage/el-form-renderer.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ruleForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">content</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        attrs: { </span><span style="color:#032F62;">&#39;data-name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;form1&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        el: {</span></span>
<span class="line"><span style="color:#24292E;">            size: </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            placeholder: </span><span style="color:#032F62;">&#39;test placeholder&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss name&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;blur&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { min: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, max: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;length between 3 to 5&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;blur&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;shanghai&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;region&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;area&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: [{</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;上海&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;shanghai&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;北京&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;beijing&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss area&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        default: [</span><span style="color:#032F62;">&#39;shanghai&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;beijing&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;multi-region&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;multi area&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: [{</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;上海&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;shanghai&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;北京&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            value: </span><span style="color:#032F62;">&#39;beijing&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        el: {</span></span>
<span class="line"><span style="color:#24292E;">            multiple: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss area&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;[native Date Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;date-picker&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;date&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;date&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        el: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;datetime&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            placeholder: </span><span style="color:#032F62;">&#39;select date&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { type: </span><span style="color:#032F62;">&#39;date&#39;</span><span style="color:#24292E;">, required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss date&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;switch&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;delivery&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;delivery&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;checkbox-group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        default: [</span><span style="color:#032F62;">&#39;typeA&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;typeB&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        options: [{</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;typeA&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;typeB&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;typeC&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { type: </span><span style="color:#032F62;">&#39;array&#39;</span><span style="color:#24292E;">, required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss type&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;resourceA&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;radio-group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;resource&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;resource&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        options: [{</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;resourceA&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">            label: </span><span style="color:#032F62;">&#39;resourceB&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }],</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss resource&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;change&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }, {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;desc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;desc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        el: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;textarea&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            { required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, message: </span><span style="color:#032F62;">&#39;miss desc&#39;</span><span style="color:#24292E;">, trigger: </span><span style="color:#032F62;">&#39;blur&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">submitForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        ruleForm.value.methods.</span><span style="color:#6F42C1;">validate</span><span style="color:#24292E;">((</span><span style="color:#E36209;">valid</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (valid) {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;OK&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;error submit!!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetForm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    ruleForm.value.methods.</span><span style="color:#6F42C1;">resetFields</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,1),$=JSON.parse('{"title":"readonly","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/readonly.md","filePath":"assembly/form/readonly.md"}'),S={name:"assembly/form/readonly.md"},z=Object.assign(S,{setup(s){return(l,c)=>(y(),i("div",null,[w,j,n(k),T]))}});export{$ as __pageData,z as default};
