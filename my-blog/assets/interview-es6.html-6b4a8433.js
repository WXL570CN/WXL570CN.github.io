import{_ as n,p as a,q as s,Y as p}from"./framework-e1bed10d.js";const e={},t=p(`<h1 id="「面试」es6" tabindex="-1"><a class="header-anchor" href="#「面试」es6" aria-hidden="true">#</a> 「面试」ES6</h1><h2 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h2><ul><li>ES6新增语法</li><li>只在当前代码块有效：{}中</li><li>不存在变量提升：在使用let命令声明变量之前使用该变量会报错而不是undefined</li><li>暂时性死区：在代码块内，使用let命令声明变量之前，该变量都是不可用的</li><li>在相同作用域内，不允许重复申明</li></ul><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h2><ul><li>定义时必须赋值</li><li>赋值后常量本身不可更改，其实是不可更改其内存地址</li></ul><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><p>位置一一对应，可以指定默认值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// a = 1, b = 2, c = 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>通过键名对应，位置随意，可以定义一个变量接收，同样可以指定默认值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> myname<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> myage<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的解构赋值本质上是赋值给键值对中的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>
<span class="token comment">// 实际上是</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h2><h3 id="深拷贝or浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝or浅拷贝" aria-hidden="true">#</a> 深拷贝or浅拷贝？</h3><p>单层结构视为深拷贝</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">222</span><span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span>
b<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//  {name:123, age:222}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//  {name: &#39;张三&#39;, age:222}</span>
<span class="token comment">// 数组</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//  [1,2,3]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//  [4,2,3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多层结构视为浅拷贝</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">person</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span>
b<span class="token punctuation">.</span>person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//  {person:{name:&#39;李四&#39;}}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//  {person:{name:&#39;李四&#39;}}</span>
<span class="token comment">// 数组</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//  [{name:&#39;李四&#39;}]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//  [{name:&#39;李四&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[t];function c(l,i){return a(),s("div",null,o)}const u=n(e,[["render",c],["__file","interview-es6.html.vue"]]);export{u as default};
