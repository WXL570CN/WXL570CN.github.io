import{_ as a,p as n,q as s,Y as e}from"./framework-e1bed10d.js";const t={},p=e(`<h2 id="如何用jquery批量替换一段html中文本的数字" tabindex="-1"><a class="header-anchor" href="#如何用jquery批量替换一段html中文本的数字" aria-hidden="true">#</a> 如何用jQuery批量替换一段HTML中文本的数字</h2><h3 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h3><ol><li>使用<strong>jQuery和正则</strong>将<strong>HTML中（含不同程度嵌套标签）<strong>的文本内含有的数字</strong>批量替换</strong>为其他字符，如*号</li><li>不能替换标签中的数字</li><li>不能替换内联样式里的数字</li><li>HTML代码为接口获取，所以不存在给含数字的标签添加相同类进行替换的可能</li></ol><h3 id="实现效果示例" tabindex="-1"><a class="header-anchor" href="#实现效果示例" aria-hidden="true">#</a> 实现效果示例</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css">font-size=20px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>文本文本文本：1232<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css">font-size=18px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>文本文本文本：1232<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改文本数字后</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css">font-size=18px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>文本文本文本：****<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css">font-size=18px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>文本文本文本：****<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.test-content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;&lt;span class=&quot;data-hidden&quot;&gt;*&lt;/span&gt;&#39;</span><span class="token punctuation">)</span>
  <span class="token function">$</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本问题" tabindex="-1"><a class="header-anchor" href="#版本问题" aria-hidden="true">#</a> 版本问题</h2><p>jQuery3.0版本只兼容IE9+，在国内并不受欢迎，一般用jQuery1.x版本</p><h2 id="jquery中的顶级对象-jquery-可简写成" tabindex="-1"><a class="header-anchor" href="#jquery中的顶级对象-jquery-可简写成" aria-hidden="true">#</a> jquery中的顶级对象：jquery，可简写成$</h2><h2 id="页面加载事件" tabindex="-1"><a class="header-anchor" href="#页面加载事件" aria-hidden="true">#</a> 页面加载事件</h2><h3 id="ready事件-入口函数-在页面标签加载完毕后触发-不等待图片文件加载" tabindex="-1"><a class="header-anchor" href="#ready事件-入口函数-在页面标签加载完毕后触发-不等待图片文件加载" aria-hidden="true">#</a> ready事件（入口函数）：在页面标签加载完毕后触发，不等待图片文件加载</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//第一种写法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//第二种写法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="load事件-页面加载事件-在页面所有元素加载完毕后触发" tabindex="-1"><a class="header-anchor" href="#load事件-页面加载事件-在页面所有元素加载完毕后触发" aria-hidden="true">#</a> load事件：页面加载事件（在页面所有元素加载完毕后触发）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jquery中的页面加载事件不会被覆盖-即可以同时写多个事件" tabindex="-1"><a class="header-anchor" href="#jquery中的页面加载事件不会被覆盖-即可以同时写多个事件" aria-hidden="true">#</a> jquery中的页面加载事件不会被覆盖，即可以同时写多个事件</h3><h2 id="jquery的入口函数要比javascript的入口函数执行更快" tabindex="-1"><a class="header-anchor" href="#jquery的入口函数要比javascript的入口函数执行更快" aria-hidden="true">#</a> jQuery的入口函数要比JavaScript的入口函数执行更快</h2><p>jQuery的入口函数在页面加载完成之后执行，但并不等待图片的加载<br> JavaScript的入口函数在页面以及图片的加载完成之后才执行</p><h2 id="dom对象和jquery对象" tabindex="-1"><a class="header-anchor" href="#dom对象和jquery对象" aria-hidden="true">#</a> DOM对象和jQuery对象</h2><h3 id="dom对象-用js方式获取到的对象" tabindex="-1"><a class="header-anchor" href="#dom对象-用js方式获取到的对象" aria-hidden="true">#</a> DOM对象：用JS方式获取到的对象</h3><p><code>var cloth = document.getElementById(&quot;cloth&quot;);</code></p><h3 id="jquery对象-用jquery方式获取到的对象" tabindex="-1"><a class="header-anchor" href="#jquery对象-用jquery方式获取到的对象" aria-hidden="true">#</a> jQuery对象：用jQuery方式获取到的对象</h3><p><code>var li = $(&quot;li&quot;);</code></p><h2 id="jquery对象不能调用dom对象的方法" tabindex="-1"><a class="header-anchor" href="#jquery对象不能调用dom对象的方法" aria-hidden="true">#</a> jQuery对象不能调用DOM对象的方法</h2><p>jQuery对象实际上是js对象的集合，是一个伪数组。<br> jQuery对象中虽然有js对象，但它不能调用DOM对象的方法，只能将其取出才能调用<br> 相当于洗衣机和衣服的关系：<br> jQuery对象是洗衣机，DOM对象是衣服，洗衣机中含有多件衣服<br> 但衣服没有洗衣机的洗的功能，洗衣机也没有衣服的穿的功能，所以互相不能调用<br> 如果要使用洗衣机中衣服的功能，只能将其取出来<br> 取得方法如下</p><h2 id="获取jquery对象中的dom对象方法" tabindex="-1"><a class="header-anchor" href="#获取jquery对象中的dom对象方法" aria-hidden="true">#</a> 获取jQuery对象中的DOM对象方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> li <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$li<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>		<span class="token comment">// a 为数组下标</span>
<span class="token comment">//$li.get(a)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery对象和dom对象的转换" tabindex="-1"><a class="header-anchor" href="#jquery对象和dom对象的转换" aria-hidden="true">#</a> jQuery对象和DOM对象的转换</h2><h3 id="jquery对象转换成dom对象" tabindex="-1"><a class="header-anchor" href="#jquery对象转换成dom对象" aria-hidden="true">#</a> jQuery对象转换成DOM对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> li <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$li<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
或$li<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom对象转换成jquery对象-将dom对象放入-中就变成了jquery对象" tabindex="-1"><a class="header-anchor" href="#dom对象转换成jquery对象-将dom对象放入-中就变成了jquery对象" aria-hidden="true">#</a> DOM对象转换成jQuery对象：将DOM对象放入$中就变成了jQuery对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var cloth = document.getElementById(&quot;cloth&quot;);
$(cloth).text(&quot;衣服&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><ul><li>类选择器 $(.className)</li><li>ID选择器 $(#id)</li><li>标签选择器 $(标签名)</li><li>交集选择器 $(s1s2)</li><li>并集选择器 $(s1,s2)</li><li>子代选择器 $(s1&gt;s2)</li><li>后代选择器 $(s1 s2)</li></ul><h2 id="为选择的对象添加样式" tabindex="-1"><a class="header-anchor" href="#为选择的对象添加样式" aria-hidden="true">#</a> 为选择的对象添加样式</h2><p><code>$().css(&quot;属性名&quot;,&quot;属性值&quot;)</code></p><h2 id="鼠标触发事件" tabindex="-1"><a class="header-anchor" href="#鼠标触发事件" aria-hidden="true">#</a> 鼠标触发事件</h2><p>mouseover mouseout mouseenter：鼠标进入事件 mouseleave：鼠标离开事件 两种方法的区别</p><ul><li>mouseover（mouseout）每当鼠标经过设置元素或其子元素都会触发</li><li>mouseenter（mouseleave）鼠标经过只触发一次</li></ul><h2 id="过滤选择器-带冒号" tabindex="-1"><a class="header-anchor" href="#过滤选择器-带冒号" aria-hidden="true">#</a> 过滤选择器（带冒号）</h2><ul><li>:first 第一个</li><li>:last 最后一个</li><li>:even 下标为偶数</li><li>:odd 下标为奇数</li><li>:eq(index) 根据下标选</li><li>:gt(index) 大于该下标</li><li>:lt(index) 小于该下标</li></ul><h2 id="修改单个样式" tabindex="-1"><a class="header-anchor" href="#修改单个样式" aria-hidden="true">#</a> 修改单个样式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value1&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value2&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value3&quot;</span><span class="token punctuation">)</span>
  <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改多个样式-在里面传一个对象" tabindex="-1"><a class="header-anchor" href="#修改多个样式-在里面传一个对象" aria-hidden="true">#</a> 修改多个样式（在里面传一个对象）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name1</span> <span class="token operator">:</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name2</span> <span class="token operator">:</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取样式-当有多个li标签时-不会返回全部的li标签-而是只返回获取到的第一个值" tabindex="-1"><a class="header-anchor" href="#获取样式-当有多个li标签时-不会返回全部的li标签-而是只返回获取到的第一个值" aria-hidden="true">#</a> 获取样式(当有多个li标签时，不会返回全部的li标签，而是只返回获取到的第一个值)</h2><p><code>$(&quot;li&quot;).css(&quot;name&quot;)</code></p><h2 id="添加类" tabindex="-1"><a class="header-anchor" href="#添加类" aria-hidden="true">#</a> 添加类</h2><p><code>addClass(&quot;className&quot;)</code></p><h2 id="移除类" tabindex="-1"><a class="header-anchor" href="#移除类" aria-hidden="true">#</a> 移除类</h2><p><code>removeClass(&quot;className&quot;)</code></p><h2 id="判断类" tabindex="-1"><a class="header-anchor" href="#判断类" aria-hidden="true">#</a> 判断类</h2><p><code>hasClass(&quot;classname&quot;)</code></p><h2 id="切换类-判断是否有该类-有就删除-没有就添加" tabindex="-1"><a class="header-anchor" href="#切换类-判断是否有该类-有就删除-没有就添加" aria-hidden="true">#</a> 切换类(判断是否有该类，有就删除，没有就添加)</h2><p><code>toggleClass(&quot;classname&quot;)</code></p><h2 id="属性操作attr" tabindex="-1"><a class="header-anchor" href="#属性操作attr" aria-hidden="true">#</a> 属性操作attr</h2><p>修改，获取和css用法一样<br> 当获取selected,disabled,checked这三个属性时，有可能会报错，这时需要用prop方法<br> 也就是说，对于布尔值类型的属性，需要用prop方法</p><h2 id="阻止a标签的默认跳转" tabindex="-1"><a class="header-anchor" href="#阻止a标签的默认跳转" aria-hidden="true">#</a> 阻止a标签的默认跳转</h2><p>在a标签的click事件触发函数中最后添加return false;</p><h2 id="为什么jquery不报错" tabindex="-1"><a class="header-anchor" href="#为什么jquery不报错" aria-hidden="true">#</a> 为什么jquery不报错</h2><p>因为返回的还是jquery对象，jQuery可以还是可以调用jQuery方法</p><h2 id="动画效果" tabindex="-1"><a class="header-anchor" href="#动画效果" aria-hidden="true">#</a> 动画效果</h2><h3 id="显示隐藏" tabindex="-1"><a class="header-anchor" href="#显示隐藏" aria-hidden="true">#</a> 显示隐藏</h3><pre><code>show()方法，可传多个参，参数可以是数值，也可以时回调函数
hide()方法可传参数与show一致
</code></pre><h3 id="滑入滑出-上下" tabindex="-1"><a class="header-anchor" href="#滑入滑出-上下" aria-hidden="true">#</a> 滑入滑出（上下）</h3><pre><code>滑入：slideDown()
滑出：slideUp()
切换：slideToggle()
     在滑入滑出之间切换
</code></pre><h3 id="淡入淡出" tabindex="-1"><a class="header-anchor" href="#淡入淡出" aria-hidden="true">#</a> 淡入淡出</h3><pre><code>淡入：fadeIn()
淡出：fadeOut()
切换：fadeToggle()
</code></pre><h3 id="自定义动画animate" tabindex="-1"><a class="header-anchor" href="#自定义动画animate" aria-hidden="true">#</a> 自定义动画animate</h3><pre><code>animate(参数1,参数2,参数3,参数4)
参数1：对象，里面可传需要动画的样式，如{left:800}，当然前提是需要定位
参数2：持续时间
参数3：动画的执行效果：swing（秋千效果），linear（匀速），默认为秋千效果，
参数4：回调函数，动画完成后
</code></pre><h2 id="动画不停止bug" tabindex="-1"><a class="header-anchor" href="#动画不停止bug" aria-hidden="true">#</a> 动画不停止bug</h2><p>动画队列问题：jquery会将未完成的动画放在一个队列中挨个执行</p><p>解决：在动画效果前调用stop方法，即要调用动画时检测当前是否还有动画在执行，有的话就停止 <code>.stop().show()</code></p><h2 id="当字符串中需要传参时" tabindex="-1"><a class="header-anchor" href="#当字符串中需要传参时" aria-hidden="true">#</a> 当字符串中需要传参时，</h2><p><code>&quot;我是&#39;+name+&#39;&quot;</code><br> 其中，name为参数</p><h2 id="音乐标签auto" tabindex="-1"><a class="header-anchor" href="#音乐标签auto" aria-hidden="true">#</a> 音乐标签auto</h2><h2 id="视频标签video" tabindex="-1"><a class="header-anchor" href="#视频标签video" aria-hidden="true">#</a> 视频标签video</h2><h2 id="添加节点-append" tabindex="-1"><a class="header-anchor" href="#添加节点-append" aria-hidden="true">#</a> 添加节点 append</h2><p><code>$(&quot;div&quot;).append(可以是一个jQuery对象，也可以是一个html代码)</code><br> 当是一个html代码时，实际上jQuery会将其转换成一个jQuery对象</p><h2 id="清除一个节点中的内容" tabindex="-1"><a class="header-anchor" href="#清除一个节点中的内容" aria-hidden="true">#</a> 清除一个节点中的内容</h2><p><code>$(&quot;div&quot;).html(&quot;&quot;)</code><br> 即让其内容为空 但会有内存泄露问题：当该标签绑定了事件时，该操作仅仅删除了内容，但并未删除事件，导致占用内存造成浪费 <code>$(&quot;div&quot;).empty()</code><br> 不仅会删除内容，同时会删除该标签上面绑定的事件</p><h2 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h2><p><code>$(&quot;div&quot;).remove()</code></p><h2 id="复制节点" tabindex="-1"><a class="header-anchor" href="#复制节点" aria-hidden="true">#</a> 复制节点</h2><p><code>$(&quot;div&quot;).clone(|false|true)</code></p><ul><li>不传参和传false：深度复制，但不会复制事件</li><li>传true：深度复制，会复制事件</li></ul><h2 id="val-和-text" tabindex="-1"><a class="header-anchor" href="#val-和-text" aria-hidden="true">#</a> val 和 text</h2><ul><li>val：获取与插入表单标签value值</li><li>text：获取插入普通标签内容</li><li>html：获取插入普通标签内容，且能识别html标签</li></ul><h2 id="width-height-获取元素的宽高" tabindex="-1"><a class="header-anchor" href="#width-height-获取元素的宽高" aria-hidden="true">#</a> width height：获取元素的宽高</h2><p>单纯获取到的就是width和height的值<br> 不常用的一些东东：<br> innerWidth：width + padding outWidth：width + padding + border outWidth(true)：width + padding + margin</p><h2 id="获取可视区域的宽高" tabindex="-1"><a class="header-anchor" href="#获取可视区域的宽高" aria-hidden="true">#</a> 获取可视区域的宽高</h2><p>注意这里不需要加双引号</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//当调整浏览器窗口大小，就会触发resize事件</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scroll事件" tabindex="-1"><a class="header-anchor" href="#scroll事件" aria-hidden="true">#</a> scroll事件</h2><p>当用户滚动指定的元素时，会触发 scroll 事件。<br> scrollTop()：返回滚动条垂直方向的位置<br> scrollLeft()：返回滚动条水平方向的位置</p><h2 id="offset-返回相对于页面的位置-返回的是对象" tabindex="-1"><a class="header-anchor" href="#offset-返回相对于页面的位置-返回的是对象" aria-hidden="true">#</a> offset()：返回相对于页面的位置，返回的是对象</h2><p>position：返回相对于有定位的父元素的位置，返回的也是对象</p><h2 id="注册事件会出现的问题-当有元素在页面加载完成之后创建的时候-就难以给该元素注册事件" tabindex="-1"><a class="header-anchor" href="#注册事件会出现的问题-当有元素在页面加载完成之后创建的时候-就难以给该元素注册事件" aria-hidden="true">#</a> 注册事件会出现的问题：当有元素在页面加载完成之后创建的时候，就难以给该元素注册事件</h2><p>解决方法：使用委托事件绑定 委托事件：即给父元素注册事件，当触发了新生成的元素时，虽然该元素没有绑定事件，但会冒泡到父元素，这时会触发父元素的委托事件 delegate()：给父元素注册委托事件，子元素执行 $(&quot;div&quot;).delegate(&quot;p&quot;,&quot;click&quot;,function(){ alert(&quot;呵呵&quot;); }) //即为父元素div注册点击事件，且只有当点击的是子元素中的p标签时，才会触发该事件 但delegate()事件并不常用，on()方法诞生 on()方法既可以为父元素注册委托事件，同时也可以为自己注册普通事件</p><h2 id="on-events-selector-data-handle-事件绑定" tabindex="-1"><a class="header-anchor" href="#on-events-selector-data-handle-事件绑定" aria-hidden="true">#</a> on(events,selector,data,handle)：事件绑定</h2><p>events：绑定事件的名称 selector：子元素标签，可选参数，要注册委托事件时候使用， data：可以传值，初始为undefined，通过给function传参使用 callback：即function</p><h2 id="off-解绑事件" tabindex="-1"><a class="header-anchor" href="#off-解绑事件" aria-hidden="true">#</a> off：解绑事件</h2><p><code>$(&quot;div&quot;).off(&quot;click&quot;)</code><br> 解绑div上绑定的click事件 不传参，即解绑div上绑定的所有事件</p><h2 id="trigger-触发事件" tabindex="-1"><a class="header-anchor" href="#trigger-触发事件" aria-hidden="true">#</a> trigger：触发事件</h2><h2 id="on方法中的data参数使用" tabindex="-1"><a class="header-anchor" href="#on方法中的data参数使用" aria-hidden="true">#</a> on方法中的data参数使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e为一个事件对象，e中有data这个属性</p><h2 id="阻止浏览器默认行为" tabindex="-1"><a class="header-anchor" href="#阻止浏览器默认行为" aria-hidden="true">#</a> 阻止浏览器默认行为</h2><p><code>e.preventDefault()</code></p><h2 id="阻止冒泡" tabindex="-1"><a class="header-anchor" href="#阻止冒泡" aria-hidden="true">#</a> 阻止冒泡</h2><p><code>e.stopPropagation()</code></p><h2 id="即阻止浏览器默认行为-也阻止事件冒泡" tabindex="-1"><a class="header-anchor" href="#即阻止浏览器默认行为-也阻止事件冒泡" aria-hidden="true">#</a> 即阻止浏览器默认行为，也阻止事件冒泡</h2><p><code>return false;</code></p><h2 id="链式编程并不一定能一直链式下去-五星评论案例" tabindex="-1"><a class="header-anchor" href="#链式编程并不一定能一直链式下去-五星评论案例" aria-hidden="true">#</a> 链式编程并不一定能一直链式下去：五星评论案例</h2><p>即后面再链式所链的jQuery对象不一定是想要的对象，最初的jQuery在链式的过程中已经变化 需要用到end()方法</p><h2 id="each-方法-替代for遍历" tabindex="-1"><a class="header-anchor" href="#each-方法-替代for遍历" aria-hidden="true">#</a> each()方法：替代for遍历</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span>element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//index:获取到的每个li的下标</span>
    <span class="token comment">//element：获取到的每个li的DOM对象</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="冲突问题解决" tabindex="-1"><a class="header-anchor" href="#冲突问题解决" aria-hidden="true">#</a> $冲突问题解决</h2><p>当jQuery的$与其他框架冲突时，可以通过$.noConflict()释放$的控制权（前提是jQuery有$的控制权，即最后引入的script是jQuery文件） var j$ = $.noConflict() 即jQuery改用j$代替$</p><h2 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h2><p>引入懒加载插件 将图片的src换成data-original，给需要懒加载的图片一个类，如lazy jQuery代码: <code>$(&quot;img.lazy&quot;).lazyload();</code></p><h2 id="jquery插件" tabindex="-1"><a class="header-anchor" href="#jquery插件" aria-hidden="true">#</a> jQuery插件</h2><p>插件即功能，为jQuery添加功能 其实，jQuery对象之所以能调用方法，是因为这些方法都存在于这些对象的原型中，原型就是jQuery对象存储方法的一个地方，jQuery对象调用方法时，其实是从原型中调用这些方法。 那要制作插件，即为jQuery对象的原型添加功能就行 方法：<code>&amp;.fn.自定义的方法</code></p>`,125),o=[p];function i(c,l){return n(),s("div",null,o)}const d=a(t,[["render",i],["__file","Notes-JQuery-review.html.vue"]]);export{d as default};
