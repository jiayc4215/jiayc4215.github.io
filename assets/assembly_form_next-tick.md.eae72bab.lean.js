import{_ as f}from"./chunks/el-form-renderer.61b70910.js";import{_,h as t,a0 as B,C as i,o as u,c as d,H as l,w as c,a1 as F,l as A,F as v,O as x,a as r,p as b,m as k,k as o,Q as h}from"./chunks/framework.d9d351fe.js";import"./chunks/commonjsHelpers.725317a4.js";const T=n=>(b("data-v-8857d3cd"),n=n(),k(),n),R=T(()=>o("div",{class:"box"},"$nextTick",-1)),V={__name:"next",setup(n){let s=t(!1);const E=t(),a=t(),m=B([{id:"name",type:"input",label:"姓名",el:{placeholder:"请输入"}}]),g=async()=>{console.log(a.value),a.value.updateForm({name:"小明"})},C=async()=>{s.value=!0,await x(),a.value.updateForm({name:"小明"})},q=()=>{a.value.resetFields()};return($,p)=>{const y=i("el-button"),D=i("el-dialog");return u(),d(v,null,[R,l(y,{type:"primary",onClick:C},{default:c(()=>[r("点击打开 Dialog（带数据）")]),_:1}),l(y,{type:"primary",onClick:p[0]||(p[0]=e=>F(s)?s.value=!0:s=!0)},{default:c(()=>[r("点击打开 Dialog")]),_:1}),l(D,{modelValue:A(s),"onUpdate:modelValue":p[1]||(p[1]=e=>F(s)?s.value=e:s=e),title:"Next Tick",onOpen:g,ref_key:"dialog",ref:E,onClose:q},{default:c(()=>[l(f,{content:m,inline:"",ref_key:"formRender",ref:a},null,8,["content"])]),_:1},8,["modelValue"])],64)}}},O=_(V,[["__scopeId","data-v-8857d3cd"]]),N=o("h1",{id:"next-tick",tabindex:"-1"},[r("next-tick "),o("a",{class:"header-anchor",href:"#next-tick","aria-label":'Permalink to "next-tick"'},"​")],-1),S=o("br",null,null,-1),w=h("",1),z=JSON.parse('{"title":"next-tick","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/form/next-tick.md","filePath":"assembly/form/next-tick.md"}'),I={name:"assembly/form/next-tick.md"},j=Object.assign(I,{setup(n){return(s,E)=>(u(),d("div",null,[N,S,l(O),w]))}});export{z as __pageData,j as default};
