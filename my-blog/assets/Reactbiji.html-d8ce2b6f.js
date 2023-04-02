import{_ as t,p as c,q as o,s,R as n,t as i,Y as a,n as p}from"./framework-e1bed10d.js";const l={},r=a(`<h2 id="useimperativehandle" tabindex="-1"><a class="header-anchor" href="#useimperativehandle" aria-hidden="true">#</a> useImperativeHandle</h2><p><code>useImperativeHandle</code> 需搭配 <code>forwardRef</code> 一起使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 父组件
const testRef =  useRef(null)
const getList = () =&gt; {
  const list = testRef.current.getList()
}
return {
 &lt;Child ref={testRef} /&gt;  \\
}

// 子组件
const Child = react.forwardRef(props, ref) {
  const [list, setList] = useState([])
    useImperativeHandle(ref, () =&gt; ({
      getList: () =&gt; {
          return [...list];
      },
      changeList: (copyList) =&gt; {
          setList([...copyList]);
      },
    }));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h2>`,4),d=s("code",null,"this",-1),u=s("code",null,"useRef",-1),v=s("code",null,"useRef",-1),k={href:"https://link.zhihu.com/?target=https%3A//reactjs.org/docs/hooks-faq.html%23is-there-something-like-instance-variables",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="uselayouteffect" tabindex="-1"><a class="header-anchor" href="#uselayouteffect" aria-hidden="true">#</a> <code>useLayoutEffect</code></h2><p><code>useLayoutEffect</code> (等效于 <code>didMount</code> 和 <code>didUpdate</code>)</p><h2 id="connect和forwardref冲突解决方案" tabindex="-1"><a class="header-anchor" href="#connect和forwardref冲突解决方案" aria-hidden="true">#</a> <code>connect</code>和<code>forwardRef</code>冲突解决方案</h2><p>再封装一层</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">A</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token punctuation">{</span> refInstance <span class="token punctuation">}</span> <span class="token operator">=</span> props

	<span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>refInstance<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> APackage <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
	<span class="token operator">&lt;</span>APackage <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> refInstance<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(h,b){const e=p("ExternalLinkIcon");return c(),o("div",null,[r,s("p",null,[n("因为在函数式组件里没有了 "),d,n(" 来存放一些实例的变量，所以 React 建议使用 "),u,n(" 来存放一些会发生变化的值，"),v,n(" 并不再单单是为了 DOM 的 ref 准备的，同时也会"),s("a",k,[n("用来存放组件实例的属性"),i(e)]),n("。")]),m])}const _=t(l,[["render",f],["__file","Reactbiji.html.vue"]]);export{_ as default};
