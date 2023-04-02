import{_ as i,p as r,q as c,s as a,R as n,t,Y as e,n as o}from"./framework-e1bed10d.js";const l={},p=e(`<h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2><p>字号尽量用偶数字号，奇数字号有可能出问题<br> 字体名含空格，则选用该字体时需要加引号</p><h2 id="链接伪类选择器-主要针对a标签" tabindex="-1"><a class="header-anchor" href="#链接伪类选择器-主要针对a标签" aria-hidden="true">#</a> 链接伪类选择器，主要针对a标签</h2><pre><code>link：未访问的链接
visited：已访问的链接
hover：鼠标移动到链接上
active：鼠标点击但未松开时的状态
</code></pre><p>使用方法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a：link</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">a：visited</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">a：hover</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">a：active</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>且如果同时存在，四个选择器的顺序不能乱</p><h2 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器" aria-hidden="true">#</a> 结构伪类选择器</h2><ul><li>first-child:第一个元素</li><li>last-child：最后一个</li><li>nth-child(an)：第a*n个元素，a取自然数，n取0，1，2，3，4...</li><li>nth-last-child：和nth-child相反，它是从最后一个元素开始数 使用方法(以列表为例)：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">li:first-child</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">li:nth-child(n)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">li:nth-child(odd)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token selector">// 选择所有第奇数个元素
li:nth-child(even)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> // 选择所有第偶数个元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>:first-child 和 :first-of-type 的区别</p><blockquote><p>p:first-child，第一个子元素且该元素为p元素<br> p:first-of-type: 第一个p子元素</p></blockquote></blockquote><h2 id="目标伪类选择器" tabindex="-1"><a class="header-anchor" href="#目标伪类选择器" aria-hidden="true">#</a> 目标伪类选择器</h2><p>与锚点链接配合使用，当点击导航到达目标段时，改变目标段的状态<br> 使用方法： <code>:target{}</code></p><h2 id="选择器优先级" tabindex="-1"><a class="header-anchor" href="#选择器优先级" aria-hidden="true">#</a> 选择器优先级</h2><p><code>!important &gt; 内联样式 &gt; ID选择器 &gt; class选择器 &gt; 标签选择器 &gt; 通配符（*） &gt; 浏览器默认样式 &gt; 继承样式</code></p><h2 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式" aria-hidden="true">#</a> 文本样式</h2><ul><li>text-align：文字水平对齐</li><li>text-indent: 所有段落首行缩进，单位用em</li><li>letter-spacing: 字间距</li><li>word-spacing: 单词间距，针对英文</li><li>word-wrap: normal | break-word 文本超出是否断行</li><li>white-space: nowrap 文本中换行无效(word-wrap无效)</li><li>text-shadow: 水平位置 垂直位置 模糊距离 阴影颜色; 文字阴影（前两个参数必须写）</li></ul><h2 id="块级标签-h系列-p-div-ul-ol-li" tabindex="-1"><a class="header-anchor" href="#块级标签-h系列-p-div-ul-ol-li" aria-hidden="true">#</a> 块级标签（h系列,p,div,ul,ol,li）</h2><p>独自占一行，可控制高宽，行高，外边距和内边距，宽度默认100%</p><h2 id="行内元素-a-strong-b-em-i-del-s-ins-u-span" tabindex="-1"><a class="header-anchor" href="#行内元素-a-strong-b-em-i-del-s-ins-u-span" aria-hidden="true">#</a> 行内元素（a,strong,b,em,i,del,s,ins,u,span）</h2><p>和相邻行内同处一行，高宽无效，垂直方向无效，水平方向的padding和margin控制<br> 宽度默认为其中的内容宽度</p><h2 id="行内块标签-img-input-td" tabindex="-1"><a class="header-anchor" href="#行内块标签-img-input-td" aria-hidden="true">#</a> 行内块标签（img,input,td）</h2><p>和相邻行内（行内块）元素处同一行，之间会有空隙，宽度之类的控制和块级标签一致<br> 默认宽度为其中内容的宽度</p><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a[title]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>			    <span class="token comment">/* &lt;a href=&quot;#&quot; title=&quot;我是title&quot;&gt;haha&lt;a&gt; */</span>
<span class="token selector">input[type=type名]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>	<span class="token comment">/* &lt;input type=&quot;type名&quot; value=&quot;&quot;&gt;  */</span> 
<span class="token selector">div[class^=name]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>		<span class="token comment">/* class名字以name开头的 */</span> 
<span class="token selector">div[class$=name]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>		<span class="token comment">/* class名字以name结束的 */</span> 
<span class="token selector">div[class*=name]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>		<span class="token comment">/* class名字中含有name的 */</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p::first-letter</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>	                 <span class="token comment">/* p标签中内容的第一个字 */</span>
<span class="token selector">p::first-line</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>		             <span class="token comment">/* p标签中内容的第一个行  */</span>
<span class="token selector">p::selection</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>		                 <span class="token comment">/* 当选中文字时可以改变的样式，如color=red，改变当选中文字时文字显示为红色 */</span>
<span class="token selector">div::before</span><span class="token punctuation">{</span> content=<span class="token string">&quot;要加的内容&quot;</span> <span class="token punctuation">}</span>	 <span class="token comment">/* 在div标签的内容前面加入content */</span>
<span class="token selector">div::after</span><span class="token punctuation">{</span> content=<span class="token string">&quot;要加的内容&quot;</span> <span class="token punctuation">}</span>	 <span class="token comment">/* 在div标签的内容后面加入content */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> background</h2><pre><code>background-repeat:背景图片是否平铺
	repeat
	repeat-x
	repeat-y
	no-repeat
background-position:背景图片位置
background-attachment:
	fixed	背景固定
	scoll	背景随文字滚动
</code></pre><p>实际应用：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2>`,32),d=a("br",null,null,-1),u={href:"https://zhuanlan.zhihu.com/p/25321647",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>盒子内部布局不受外界影响</p><h3 id="如何触发bfc" tabindex="-1"><a class="header-anchor" href="#如何触发bfc" aria-hidden="true">#</a> 如何触发BFC</h3><ul><li>Html</li><li>float不为none</li><li>position的值不为relative和static</li><li>overflow的值为auto,scroll或hidden</li><li>display的值为table-cell, table-caption, inline-block中的任何一个</li></ul><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ul><li>阻止高度塌陷</li><li>外边距合并：同属一个BFC的相邻元素会发生外边距（margin）重叠</li><li>阻止元素被浮动元素覆盖，可用来实现两列布局</li></ul><h2 id="清除浮动的影响" tabindex="-1"><a class="header-anchor" href="#清除浮动的影响" aria-hidden="true">#</a> 清除浮动的影响</h2><pre><code>clear:both		在浮动的盒子后面添加一个空盒子，并给样式添加该属性
overflow:hidden/auto/scoll	在父元素的样式中加入该属性（该属性会触发BFC，BFC可以清除浮动）
							缺点：内容太多时容易造成内容被隐藏
after伪元素清除浮动		原理：是第一种方法的优化，在浮动的盒子后面追加一个块元素
</code></pre><h2 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position" aria-hidden="true">#</a> 定位 --position</h2><ul><li>静态定位：static，标准流，边偏移无效，用于清除定位</li><li>相对定位：relative，标准流，相对于自己的位置移动，通过边偏移移动位置后，原来的位置仍然占有</li><li>绝对定位：absolute，脱离标准流，当父元素有定位时，相对于父元素移动；当父元素没有定位时，相对于浏览器定位，通过边偏移移动位置后，不占有位置，即下面的盒子有可能会上来。</li><li>固定定位：fix，脱离标准流，不管父级有没有定位，都只相对于浏览器定位，不占有位置，且不随浏览器滚动而滑动 ，需要写宽高，除非有内容撑开则不用写</li></ul><blockquote><p>子绝父相：儿子用绝对定位时，父亲要用相对定位。使用了绝对定位的盒子，无法用margin：0 auto水平居中于父盒子中，这时用位偏移解决：</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span>自身长度的一半px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者可以</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
transform：<span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>都能达到使盒子水平居中的效果，同理，垂直居中也是如此。</p><blockquote><p>绝对定位或者固定定位之后，会转换成行内块元素，行内块元素没写宽度时，宽度根据内容宽度决定（因为这几种方式都是脱离标准流的）</p></blockquote><h2 id="元素的隐藏与显示" tabindex="-1"><a class="header-anchor" href="#元素的隐藏与显示" aria-hidden="true">#</a> 元素的隐藏与显示</h2><pre><code>display显示
	display:none	隐藏对象
	display:block   显示元素，前面用来转换成块元素
	特点：隐藏之后就不再保留位置

visibility可见性
	visible		对象可见
	hidden		对象隐藏
	特点：隐藏之后，继续保留原位置

opacity透明度
</code></pre><h3 id="display-visibility-opacity-性能对比" tabindex="-1"><a class="header-anchor" href="#display-visibility-opacity-性能对比" aria-hidden="true">#</a> display/visibility/opacity 性能对比</h3><p>    display: none会造成回流/重绘，性能影响大</p><p>    visibility: hidden会造成元素内部的重绘，性能影响相对小</p><p>    opacity: 0 由于opacity属性启用了GPU加速，性能最好</p><h2 id="鼠标样式" tabindex="-1"><a class="header-anchor" href="#鼠标样式" aria-hidden="true">#</a> 鼠标样式</h2><ul><li>cursor:default 箭头</li><li>cursor:pointer 手</li><li>cursor:move 拖动标</li><li>cursor:text 默认，文本I符</li></ul><h2 id="轮廓线outline-类似与边框" tabindex="-1"><a class="header-anchor" href="#轮廓线outline-类似与边框" aria-hidden="true">#</a> 轮廓线outline（类似与边框）</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>		<span class="token comment">/* 最常用的方法，取消轮廓线 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文本域textarea" tabindex="-1"><a class="header-anchor" href="#文本域textarea" aria-hidden="true">#</a> 文本域textarea</h2><p>右下角可供拖拽，但拖拽会影响布局，所以一般要清除拖拽</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">resize</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> <span class="token comment">/* 取消拖拽 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="图片和文字处于同一行时的对齐问题" tabindex="-1"><a class="header-anchor" href="#图片和文字处于同一行时的对齐问题" aria-hidden="true">#</a> 图片和文字处于同一行时的对齐问题</h2><p>原因：图片默认是和父盒子基线对齐的</p><ul><li>a、将图片转换成块元素</li><li>b、将图片设置为顶线对齐（vertical-align:top）</li></ul><h2 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出" aria-hidden="true">#</a> 文本溢出</h2><h3 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> overflow</h3><pre><code>overflow：		内容超出控制
overflow:visible	默认设置，即文字超出盒子时会溢出
overflow:auto		超出时显示滚动条，不超出时不显示
overflow:scroll		一直显示滚动条
overflow:hidden		超出部分直接隐藏
</code></pre><h3 id="行内块和文字对齐" tabindex="-1"><a class="header-anchor" href="#行内块和文字对齐" aria-hidden="true">#</a> 行内块和文字对齐</h3><pre><code>vertical-align:baseline;	默认，基线对齐
vertical-align:middle;		中线对齐
vertical-align:top;		顶线对齐
</code></pre><h3 id="自动换行word-break-主要针对英文" tabindex="-1"><a class="header-anchor" href="#自动换行word-break-主要针对英文" aria-hidden="true">#</a> 自动换行word-break（主要针对英文）</h3><pre><code>word-break:normal	默认换行规则（达到盒子宽度自动换行）
word-break:break-all	允许单词拆开换行
word-break:keep-all	不允许单词拆开换行
</code></pre><h3 id="强制一行显示内容white-space" tabindex="-1"><a class="header-anchor" href="#强制一行显示内容white-space" aria-hidden="true">#</a> 强制一行显示内容white-space</h3><pre><code>white-space:normal	默认处理方式（即达到盒子宽度自动换行）
white-space:nowrap	强制在同一行显示所有文本，直到文本结束或者遭遇br标签才换行
</code></pre><h3 id="超出部分隐藏或者以省略号显示" tabindex="-1"><a class="header-anchor" href="#超出部分隐藏或者以省略号显示" aria-hidden="true">#</a> 超出部分隐藏或者以省略号显示</h3><pre><code>white-space:nowrap;
overflow:hidden;
text-overflow:clip;	超出部分直接隐藏
text-overflow:ellipsis;	超出部分以省略号代替
</code></pre><h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h2><p>content -&gt; padding -&gt; border -&gt; margin</p><blockquote><p>box-sizing: content-box</p></blockquote><p>设置盒子长度width<br> 盒子实际长度等于content（width） + padding + border</p><blockquote><p>box-sizing: border-box</p></blockquote><p>设置盒子长度width<br> 盒子实际长度等于width</p><h2 id="过渡效果transition" tabindex="-1"><a class="header-anchor" href="#过渡效果transition" aria-hidden="true">#</a> 过渡效果transition</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition-property</span><span class="token punctuation">:</span> width<span class="token punctuation">;</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
<span class="token property">transition-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span>width 0.6s ease 0s<span class="token punctuation">;</span> //<span class="token punctuation">(</span>要过渡的属性<span class="token punctuation">(</span>长度或者高度<span class="token punctuation">)</span> 花费时间 运动曲线 等待时间<span class="token punctuation">)</span>
<span class="token property">transition</span><span class="token punctuation">:</span>all 0.6s<span class="token punctuation">;</span> //<span class="token punctuation">(</span><span class="token property">all</span><span class="token punctuation">:</span>宽高一块变，有了all之后后两项可以省略<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ease改为ease-in :过渡动画放慢</p><h2 id="变形transform" tabindex="-1"><a class="header-anchor" href="#变形transform" aria-hidden="true">#</a> 变形transform</h2><pre><code>移动：transform:translate(x,y)		在水平或者垂直方向移动，如果只写一个参数，则水平垂直一起移动
缩放：transform:scale(x,y)			在水平或者垂直方向缩放，如果只写一个参数，则水平垂直一起缩放
旋转：transform:rotate(180deg)		以中心点为轴顺时针旋转180度，
倾斜：transform:skew(30deg,0deg)		X轴方向倾斜30度，Y轴方向不倾斜
</code></pre><h2 id="transform-origin-left-top" tabindex="-1"><a class="header-anchor" href="#transform-origin-left-top" aria-hidden="true">#</a> transform-origin:left top;</h2><pre><code>可以调整元素转换变形的轴心,此时轴心为左上角,也可以用像素更精确
</code></pre><h2 id="backface-visibility-hidden" tabindex="-1"><a class="header-anchor" href="#backface-visibility-hidden" aria-hidden="true">#</a> backface-visibility:hidden;</h2><pre><code>当元素反转到正面不朝向前面时就隐藏
用途：实现硬币的翻转效果
</code></pre><h2 id="perspective-1000px" tabindex="-1"><a class="header-anchor" href="#perspective-1000px" aria-hidden="true">#</a> perspective：1000px;</h2><pre><code>透视效果（使翻转时有3d效果），一般给父类加这一属性
</code></pre><h2 id="动画效果animation" tabindex="-1"><a class="header-anchor" href="#动画效果animation" aria-hidden="true">#</a> 动画效果animation</h2><pre><code>@keyframes
animation
animation-name
animation-duration
animation-timing-function
引用动画		animation:wo 2s ease/linear 0s 2/infinite normal/reverse/alternate/alternate-reverse; 
(动画名称 动画时间 速度曲线/匀速 开始时间 播放次数/无限循环播放 下一周期正常播放/逆序播放/先正序播放后逆序播放/先逆序播放后正序播放)

一般情况下，只给前两个就行
</code></pre><blockquote><p>定义动画：@keyframes name{ from { 开始位置 } to { 结束位置 }}</p></blockquote><pre><code>@keyframes wo{
	from{
		transform:translateX(0);
	}
	to{
		transform:translateX(600px);
	}
}


animation-play-state:paused;	暂停动画

实现一组照片无缝滚动效果：需要有两组相同的照片
</code></pre><h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> flex布局</h2><pre><code>display:flex		当需要使用伸缩布局时，用在父元素
flex:n 				用在子元素，表示这个子盒子占了父盒子的n份
min-width:a px;		用于父元素，盒子缩放最小宽度不小于a

一个盒子中有很多子盒子时，可以给部分子盒子设置成固定的宽度（网页缩放时宽度不变），其他盒子伸缩划分。

flex-direction:row		排列方式，默认横排列
flex-direction:column 		竖排列
</code></pre><h3 id="justify-content调整主轴对齐-水平对齐" tabindex="-1"><a class="header-anchor" href="#justify-content调整主轴对齐-水平对齐" aria-hidden="true">#</a> justify-content调整主轴对齐（水平对齐）</h3><pre><code>当一个盒子中有多个盒子时可以用这个属性调整这些子盒子在水平方向对齐方式
flex-start			默认值，子盒子从左向右排列，最右边可能会出现空隙（左对齐）
flex-end			子盒子从右向左排列，最左边可能会出现空隙（右对齐）
center				全部子盒子居中
space-between		左右盒子贴近父盒子，中间盒子居中
space-around		相当于给每个子盒子添加外边距margin
</code></pre><h3 id="align-items调整侧轴对齐-垂直对齐" tabindex="-1"><a class="header-anchor" href="#align-items调整侧轴对齐-垂直对齐" aria-hidden="true">#</a> align-items调整侧轴对齐（垂直对齐）</h3><pre><code>当一个盒子中有多个盒子时可以用这个属性调整这些子盒子在垂直方向对齐方式
flex-start			上对齐
flex-end			下对齐
center				垂直居中对齐
stretch				子盒子不给高度的情况下，子盒子高度会被拉伸至等于父盒子高度
</code></pre><h3 id="flex-wrap控制是否换行" tabindex="-1"><a class="header-anchor" href="#flex-wrap控制是否换行" aria-hidden="true">#</a> flex-wrap控制是否换行</h3><pre><code>当子盒子的宽度和大于父盒子宽度时的处理方式
nowrap				不换行，压缩显示
wrap 				在必要的时候换行
wrap-reverse		在必要的时候换行，但是会反转
</code></pre><h3 id="align-content多行对齐方式" tabindex="-1"><a class="header-anchor" href="#align-content多行对齐方式" aria-hidden="true">#</a> align-content多行对齐方式</h3><pre><code>前提：必须对父元素设置自由盒属性display:flex，并设置排列方式为flex-direction:row，并设置换行。
flex-start			项目位于容器开头
flex-end			项目位于容器结尾 
center				项目位于容器中心
stretch				项目被拉伸以适应容器高度
space-between		
space-around
</code></pre><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><pre><code>flex-direction和flex-wrap的简写形式
flex-flow：flex-direction flex-wrap
</code></pre><h3 id="order控制子项目的排列顺序" tabindex="-1"><a class="header-anchor" href="#order控制子项目的排列顺序" aria-hidden="true">#</a> order控制子项目的排列顺序</h3><pre><code>用数值大小来定义排列顺序，数值越小排的越前，默认是0
</code></pre>`,79),v={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="网格布局grid" tabindex="-1"><a class="header-anchor" href="#网格布局grid" aria-hidden="true">#</a> 网格布局Grid</h2><p>相比起Flex布局只局限于单行一维布局，Grid可以对行列进行二维布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。</p></blockquote>`,4),m={href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<h3 id="设置行宽、列宽" tabindex="-1"><a class="header-anchor" href="#设置行宽、列宽" aria-hidden="true">#</a> 设置行宽、列宽</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置行、列间距" tabindex="-1"><a class="header-anchor" href="#设置行、列间距" aria-hidden="true">#</a> 设置行、列间距</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简写：gap: row column;</p><h3 id="单元格布局" tabindex="-1"><a class="header-anchor" href="#单元格布局" aria-hidden="true">#</a> 单元格布局</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简写：place-items: align justify;</p><h3 id="整块内容布局" tabindex="-1"><a class="header-anchor" href="#整块内容布局" aria-hidden="true">#</a> 整块内容布局</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
<span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简写：place-content: align justify</p><h2 id="适配问题" tabindex="-1"><a class="header-anchor" href="#适配问题" aria-hidden="true">#</a> 适配问题</h2><h3 id="vw-和-rem" tabindex="-1"><a class="header-anchor" href="#vw-和-rem" aria-hidden="true">#</a> vw 和 rem</h3><ol><li>1em等于一倍父元素的字体的大小</li><li>1rem等于一倍根元素（html标签）的字体的大小</li><li>1vw等于1%的viewport宽</li><li>1vh等于1%的viewport高</li></ol><p>开发移动端页面时，需要注意的是不同手机设备的viewport都是有差异的。所以我们通常不会给元素一个固定像素的宽高，比如50px这种。否则可能页面在A手机上显示正常，再B手机上又不符合预期。</p><p>所以我们需要一个相对于viewport的单位，也就是vw了。</p><p>而以前使用rem来写移动端主要是历史原因了，早年各大浏览器对vw的单位还远不如今天这么完美。</p><p>以前的移动端开发通常使用rem单位配合淘系团队的flexible.js使用，flexisble.js这个库简单来说就是根据设备的不同，为根元素设置不同的font-size。又因为我们使用了rem单位，所以元素大小就和viewport相关联了。</p><p>总的来说就是以后只用vw就行了</p><h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h3><pre><code>@media screen and (max-width: )
</code></pre>`,21);function f(g,x){const s=o("ExternalLinkIcon");return r(),c("div",null,[p,a("blockquote",null,[a("p",null,[n("Block Formatting Contexts（块级格式化上下文)"),d,a("a",u,[n("10 分钟理解 BFC 原理"),t(s)])])]),h,a("blockquote",null,[a("p",null,[a("a",v,[n("更多内容参考阮大文章"),t(s)])])]),b,a("blockquote",null,[a("p",null,[a("a",m,[n("更多内容参考阮大文章"),t(s)])])]),k])}const y=i(l,[["render",f],["__file","Notes-CSS-review.html.vue"]]);export{y as default};
