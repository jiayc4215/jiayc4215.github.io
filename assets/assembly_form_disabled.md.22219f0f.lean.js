import{_ as A}from"./chunks/el-form-renderer.61b70910.js";import{_ as h,h as y,a0 as _,x as v,C as u,o as g,c as b,H as e,w as c,l as i,k as s,F as q,a1 as m,a as r,p as D,m as x,Q as k}from"./chunks/framework.d9d351fe.js";import"./chunks/commonjsHelpers.725317a4.js";const C=p=>(D("data-v-61cec2ac"),p=p(),x(),p),w=C(()=>s("div",{class:"box"},"disabled",-1)),V=C(()=>s("ul",null,[s("li",null,"作为 el-form-renderer 的 prop 传入，禁用整个表单项，优先级最高 "),s("li",null," 作为 el 的属性传入，作用于单个表单项组件"),s("li",null," 与 el 平级传入，效果和 2 相同（因历史原因存在）")],-1)),S={style:{"margin-top":"16px"}},T={__name:"disabled",setup(p){let n=y(!1),a=y(!1),E=y();const F=_([{type:"input",id:"name",label:"name",attrs:{"data-name":"form1"},el:{size:"default",placeholder:"test placeholder"},rules:[{required:!0,message:"miss name",trigger:"blur"},{min:3,max:5,message:"length between 3 to 5",trigger:"blur"}]},{type:"select",id:"region",label:"area",disabled:!1,options:[{label:"area1",value:"shanghai"},{label:"area2",value:"beijing"}],rules:[{required:!0,message:"miss area",trigger:"change"}]},{type:"switch",id:"delivery",label:"禁用开关",default:!0},{type:"checkbox-group",id:"type",label:"根据开关值禁用",disabled:l=>l.delivery,options:[{label:"typeA"},{label:"typeB"},{label:"typeC"}],rules:[{type:"array",required:!0,message:"miss type",trigger:"change"}]},{type:"input",id:"desc",label:"desc",default:"使用el禁用",el:{disabled:!0,type:"textarea"},rules:[{required:!0,message:"miss desc",trigger:"blur"}]}]);v(a,l=>{F[1].disabled=l});const B=()=>{E.value.methods.validate(l=>{l&&console.log(E.value.getFormValue())})};return(l,t)=>{const d=u("el-checkbox"),f=u("el-button");return g(),b(q,null,[w,V,e(A,{"label-width":"140px",ref_key:"form",ref:E,content:F,disabled:i(n)},{default:c(()=>[e(d,{modelValue:i(n),"onUpdate:modelValue":t[0]||(t[0]=o=>m(n)?n.value=o:n=o)},{default:c(()=>[r("禁用全部")]),_:1},8,["modelValue"]),e(d,{modelValue:i(a),"onUpdate:modelValue":t[1]||(t[1]=o=>m(a)?a.value=o:a=o)},{default:c(()=>[r("禁用 area")]),_:1},8,["modelValue"])]),_:1},8,["content","disabled"]),s("div",S,[e(f,{type:"primary",onClick:B},{default:c(()=>[r("提交，在控制台查看表单数据")]),_:1})])],64)}}},I=h(T,[["__scopeId","data-v-61cec2ac"]]),N=s("h1",{id:"disabled",tabindex:"-1"},[r("disabled "),s("a",{class:"header-anchor",href:"#disabled","aria-label":'Permalink to "disabled"'},"​")],-1),z=s("br",null,null,-1),P=k("",1),U=JSON.parse('{"title":"disabled","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/disabled.md","filePath":"assembly/form/disabled.md"}'),j={name:"assembly/form/disabled.md"},H=Object.assign(j,{setup(p){return(n,a)=>(g(),b("div",null,[N,z,e(I),P]))}});export{U as __pageData,H as default};
