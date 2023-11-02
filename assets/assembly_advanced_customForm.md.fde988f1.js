import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.d9d351fe.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/advanced/customForm.md","filePath":"assembly/advanced/customForm.md"}'),l={name:"assembly/advanced/customForm.md"},p=a(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>el-form-renderer 的 type 有限, 默认只能渲染普通的表单项, 假如现在要渲染一个上传组件, type 就不够用了, 那怎么办呢? 这时候 component 选项就派上用场了</p><p>本文将介绍如何开发符合 el-form-renderer 接入标准的自定义组件, 实现对自定义组件的渲染</p><h3 id="接入标准" tabindex="-1">接入标准 <a class="header-anchor" href="#接入标准" aria-label="Permalink to &quot;接入标准&quot;">​</a></h3><p>自定义组件接入的关键是在组件内部实现 v-model</p><p>建议在自定义组件上绑定 $attrs</p><p>el-form-renderer 对 v-model 的要求是:</p><ul><li>有一个 props 为 modelValue</li><li>对外触发 update:modelValue 事件</li></ul><p>下面是一个简单的例子</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-input v-model=&quot;newValue&quot; v-bind=&quot;$attrs&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">let emit = defineEmits([&quot;customEvent&quot;, &quot;update:modelValue&quot;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">import { watch, computed } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">let props = defineProps({</span></span>
<span class="line"><span style="color:#e1e4e8;">  modelValue: String,</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: String,</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">watch(</span></span>
<span class="line"><span style="color:#e1e4e8;">  () =&gt; props.modelValue,</span></span>
<span class="line"><span style="color:#e1e4e8;">  () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&quot;触发&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    emit(&quot;customEvent&quot;, newValue.value);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 计算属性求和</span></span>
<span class="line"><span style="color:#e1e4e8;">const newValue = computed({</span></span>
<span class="line"><span style="color:#e1e4e8;">  get: () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&quot;get&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return props.modelValue;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  set: (value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&quot;set&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return emit(&quot;update:modelValue&quot;, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-input v-model=&quot;newValue&quot; v-bind=&quot;$attrs&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">let emit = defineEmits([&quot;customEvent&quot;, &quot;update:modelValue&quot;]);</span></span>
<span class="line"><span style="color:#24292e;">import { watch, computed } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">let props = defineProps({</span></span>
<span class="line"><span style="color:#24292e;">  modelValue: String,</span></span>
<span class="line"><span style="color:#24292e;">  title: String,</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">watch(</span></span>
<span class="line"><span style="color:#24292e;">  () =&gt; props.modelValue,</span></span>
<span class="line"><span style="color:#24292e;">  () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;触发&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    emit(&quot;customEvent&quot;, newValue.value);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">// 计算属性求和</span></span>
<span class="line"><span style="color:#24292e;">const newValue = computed({</span></span>
<span class="line"><span style="color:#24292e;">  get: () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;get&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    return props.modelValue;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  set: (value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;set&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    return emit(&quot;update:modelValue&quot;, value);</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span></code></pre></div><p>则可以用 component 属性让 el-form-renderer 渲染此自定义组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-form-renderer :content=&quot;content&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { reactive, markRaw } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import elFormRenderer from &quot;../components/femessage/el-form-renderer.vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import MyInput from &quot;../your-component.vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">const content = reactive([</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    component: markRaw(MyInput),</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &quot;myInput&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    label: &quot;label&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 传入组件属性</span></span>
<span class="line"><span style="color:#e1e4e8;">    el: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      placeholder: &quot;请输入一个 title&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      type: &quot;input&quot;, // submit button</span></span>
<span class="line"><span style="color:#e1e4e8;">      title: &quot;这是一个标题&quot;, // custom defined props</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 传入组件事件</span></span>
<span class="line"><span style="color:#e1e4e8;">    on: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      focus: ([event], updateForm) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(event.target.value); // output: input value</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">      customEvent: ([value, msg], updateForm) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(value, msg); // output: &#39;message&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">]);</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-form-renderer :content=&quot;content&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">import { reactive, markRaw } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import elFormRenderer from &quot;../components/femessage/el-form-renderer.vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import MyInput from &quot;../your-component.vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">const content = reactive([</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    component: markRaw(MyInput),</span></span>
<span class="line"><span style="color:#24292e;">    id: &quot;myInput&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    label: &quot;label&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    // 传入组件属性</span></span>
<span class="line"><span style="color:#24292e;">    el: {</span></span>
<span class="line"><span style="color:#24292e;">      placeholder: &quot;请输入一个 title&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      type: &quot;input&quot;, // submit button</span></span>
<span class="line"><span style="color:#24292e;">      title: &quot;这是一个标题&quot;, // custom defined props</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 传入组件事件</span></span>
<span class="line"><span style="color:#24292e;">    on: {</span></span>
<span class="line"><span style="color:#24292e;">      focus: ([event], updateForm) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(event.target.value); // output: input value</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      customEvent: ([value, msg], updateForm) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(value, msg); // output: &#39;message&#39;</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">]);</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><ul><li>需要注意，on 中的 function 定义，组件 emit 事件的 payload 将以「数组」的方式，回调到第一个参数</li><li>第二个参数为 updateForm 方法</li></ul>`,13),o=[p];function t(c,r,i,u,y,m){return n(),e("div",null,o)}const g=s(l,[["render",t]]);export{q as __pageData,g as default};
