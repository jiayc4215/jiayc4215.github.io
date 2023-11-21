import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.ce0e3599.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"assembly/advanced/customFormRoules.md","filePath":"assembly/advanced/customFormRoules.md"}'),l={name:"assembly/advanced/customFormRoules.md"},p=a(`<h3 id="为何要在自定义组件设置校验规则" tabindex="-1">为何要在自定义组件设置校验规则? <a class="header-anchor" href="#为何要在自定义组件设置校验规则" aria-label="Permalink to &quot;为何要在自定义组件设置校验规则?&quot;">​</a></h3><p>一个复杂的表单项配置, 往往需要定义一些规则(rules)来限制用户输入, 规则里面可能还会有自定义的验证器(validator), 这样的表单项多了之后, 就会导致 <strong>页面文件的配置项变得很长很长.</strong></p><p>现在 el-form-renderer 为自定义组件提供了一个接口, 自定义组件可以内部设置一些规则, 从而达到封装隐藏目的, 使用者可以不用再关心表单的验证规则。</p><p><strong>只需引入一个组件, 它全帮你做好了!</strong></p><h3 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-label="Permalink to &quot;教程&quot;">​</a></h3><p>使用了 el-form-renderer 的页面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
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
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.box {</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 20px 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  font-size: 20px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
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
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  margin: 20px 0;</span></span>
<span class="line"><span style="color:#24292e;">  font-size: 20px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p>组件</p><p>your-page.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-input v-model=&quot;newValue&quot; v-bind=&quot;$attrs&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">let emit = defineEmits([&quot;customEvent&quot;, &quot;update:modelValue&quot;]);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import { watch, computed, useAttrs } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">let props = defineProps({</span></span>
<span class="line"><span style="color:#e1e4e8;">  modelValue: String,</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: String,</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">const attrs = useAttrs();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(attrs);</span></span>
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
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 校验规则</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      required: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      message: &quot;自定义组件的提醒消息&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-input v-model=&quot;newValue&quot; v-bind=&quot;$attrs&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">let emit = defineEmits([&quot;customEvent&quot;, &quot;update:modelValue&quot;]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import { watch, computed, useAttrs } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">let props = defineProps({</span></span>
<span class="line"><span style="color:#24292e;">  modelValue: String,</span></span>
<span class="line"><span style="color:#24292e;">  title: String,</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">const attrs = useAttrs();</span></span>
<span class="line"><span style="color:#24292e;">console.log(attrs);</span></span>
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
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  // 校验规则</span></span>
<span class="line"><span style="color:#24292e;">  rules: [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      required: true,</span></span>
<span class="line"><span style="color:#24292e;">      message: &quot;自定义组件的提醒消息&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>rules 也可以是个函数, 参数是当前表单项配置, 需要返回一个数组.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  rules(item) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(item);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        required: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        message: \`\${item.id} 不能为空\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ];</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  rules(item) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(item);</span></span>
<span class="line"><span style="color:#24292e;">    return [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        required: true,</span></span>
<span class="line"><span style="color:#24292e;">        message: \`\${item.id} 不能为空\`,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ];</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span></code></pre></div><p>可以通过 overrideRules: true 来覆盖自定义组件内置的校验规则</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
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
<span class="line"><span style="color:#e1e4e8;">    // 可以通过 overrideRules: true 来覆盖自定义组件内置的校验规则</span></span>
<span class="line"><span style="color:#e1e4e8;">    overrideRules: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        required: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        trigger: &quot;blur&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        message: &quot;不能为空！&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
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
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.box {</span></span>
<span class="line"><span style="color:#e1e4e8;">  margin: 20px 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">  font-size: 20px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
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
<span class="line"><span style="color:#24292e;">    // 可以通过 overrideRules: true 来覆盖自定义组件内置的校验规则</span></span>
<span class="line"><span style="color:#24292e;">    overrideRules: true,</span></span>
<span class="line"><span style="color:#24292e;">    rules: [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        required: true,</span></span>
<span class="line"><span style="color:#24292e;">        trigger: &quot;blur&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        message: &quot;不能为空！&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
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
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  margin: 20px 0;</span></span>
<span class="line"><span style="color:#24292e;">  font-size: 20px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><p>暂不支持全局注册的组件</p><p>即使用 Vue.component(&#39;your-component&#39;, YourComponent) 注册的组件</p>`,17),o=[p];function t(c,r,i,u,y,m){return n(),e("div",null,o)}const q=s(l,[["render",t]]);export{g as __pageData,q as default};
