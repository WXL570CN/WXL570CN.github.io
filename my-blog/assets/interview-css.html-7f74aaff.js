import{_ as o,p as r,q as u,t as e,a2 as s,s as n,R as a,Y as i,n as c}from"./framework-e1bed10d.js";const p={},h=i('<h1 id="「面试」css" tabindex="-1"><a class="header-anchor" href="#「面试」css" aria-hidden="true">#</a> 「面试」Css</h1><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><ol><li>标签选择器 <code>div {}</code></li><li>属性选择器 <code>a[title=&#39;..&#39;] {}</code></li><li>id选择器</li><li>class选择器</li><li>子代选择器 <code>ul&gt;li {}</code></li><li>后代选择器 <code>body li {}</code></li><li>群组选择器 <code>h1,p</code></li><li>相邻兄弟选择器 <code>h1 + p {}</code></li><li>伪类选择器 <code>:hover</code></li></ol><h2 id="first-child-和-first-of-type" tabindex="-1"><a class="header-anchor" href="#first-child-和-first-of-type" aria-hidden="true">#</a> first-child 和 first-of-type</h2><ul><li><code>p:first-child</code>：当父元素下的第一个元素为p元素时</li><li><code>p:first-of-type</code>：父元素下的第一个p元素</li></ul><h2 id="属性的权重" tabindex="-1"><a class="header-anchor" href="#属性的权重" aria-hidden="true">#</a> 属性的权重</h2><p>!important &gt; 内联样式 &gt; ID选择器 &gt; class选择器 &gt; 标签选择器 &gt; 通配符（*） &gt; 浏览器默认样式 &gt; 继承样式</p><h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h2><blockquote><p>box-sizing</p></blockquote><ul><li><code>content-box </code>浏览器默认，盒子宽度为 width（内容宽度） + padding + border</li><li><code>border-box</code>盒子宽度为width， 即 内容宽度 + padding + border</li></ul><h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h2><blockquote><p>过渡效果</p></blockquote><ul><li><code>transition-property</code> 过渡属性(默认值为all)</li><li><code>transition-duration</code> 过渡持续时间(默认值为0s)</li><li><code>transiton-timing-function</code> 过渡函数(默认值为ease函数)</li><li><code>transition-delay</code> 过渡延迟时间(默认值为0s)</li></ul><blockquote><p>注意：IE9-不支持该属性，safari3.1-6、IOS3.2-6.1、android2.1-4.3需要添加-webkit-前缀；而其余高版本浏览器支持标准写法</p></blockquote><h2 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> animation</h2><blockquote><p>动画效果</p></blockquote><ul><li><code>animation-name</code> 动画名</li><li><code>animation-duration</code> 持续时间</li><li><code>animation-timing-function</code> 动画曲线</li><li><code>animation-delay</code> 延迟</li><li><code>animation-iteration-count</code> 播放次数</li><li><code>animation-direction</code> 是否在下一周期逆向播放</li></ul><h2 id="元素分类" tabindex="-1"><a class="header-anchor" href="#元素分类" aria-hidden="true">#</a> 元素分类</h2><h4 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h4><p>不独占一行；宽度(width)、高度(height)、内边距和外边距的 top/bottom 都不可改变，也就是说 padding 和 margin 的左右是可以改变的。<br><code>a b br i span input select</code></p><h4 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h4><p>独占一行；宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;<br><code>div p h1 h2 h3 h4 form ul</code></p><h4 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a> 行内块元素</h4><p>不独占一行；可以设置宽和高。<br><code>&lt;input&gt; 、&lt;img&gt; 、&lt;button&gt; 、&lt;texterea&gt; 、&lt;label&gt;</code></p><h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h2>',25),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("father"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("children"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* 绝对定位 + margin-top/left + top/left */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      position: relative
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -100px;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* 绝对定位 + margin-top/left + calc() */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      position: relative
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
      position: absolute;
      top: calc(50% - 100px);
      left: calc(50% - 100px);
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* 绝对定位 + transform + top/left */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      position: relative
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* 绝对定位 + margin: auto */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      position: relative
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* flex布局 */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* flex布局 + margin: auto */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      display: flex;
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
      margin: auto;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* table布局 */
    .father {
      width: 500px;
      height: 500px;
      background: black;
      display: table-cell;
      vertical-align: middle;
    }
    .children {
      width: 200px;
      height: 200px;
      background: white;
      margin: 0 auto;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=i('<h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><p>Block Formatting Contexts （块级格式化上下文）<br> 它是一个独立的盒子，并且这个独立的盒子内部布局不受外界影响。</p><h3 id="何时会触发bfc" tabindex="-1"><a class="header-anchor" href="#何时会触发bfc" aria-hidden="true">#</a> 何时会触发BFC</h3><ul><li>根元素&lt; html&gt;</li><li>float的值不为none。</li><li>position的值不为relative和static。</li><li>overflow的值为auto,scroll或hidden。</li><li>display的值为table-cell, table-caption, inline-block中的任何一个。</li></ul><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ul><li>清除浮动（阻止高度塌陷）。</li><li>外边距合并：同属一个BFC的相邻元素会发生外边距（margin）重叠。</li><li>阻止元素被浮动元素覆盖，可用来实现两列布局。</li></ul><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2><h3 id="浮动的影响" tabindex="-1"><a class="header-anchor" href="#浮动的影响" aria-hidden="true">#</a> 浮动的影响</h3><p>在父元素未定义高度时，父元素高度会坍缩</p><h3 id="清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#清除浮动的方法" aria-hidden="true">#</a> 清除浮动的方法</h3><ul><li>BFC清除浮动</li><li>添加额外标签，应用 clear: both</li></ul>',11),w=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[a("  "),n("span",{class:"token comment"},"<!-- 在浮动的盒子后面添加一个空盒子，并给样式添加该属性 -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("father"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("float-child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("normal-child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* 添加空盒子清除浮动 */
    .father {
      width: 500px;
      background: red;
    }

    .float-child {
      width: 100px;
      height: 100px;
      background: white;
    }

    .float-child {
      float: right;
    }

    .normal-child {
      clear: both;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("ul",null,[n("li",null,"使用伪元素 :after")],-1),B=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[a("  "),n("span",{class:"token comment"},"<!-- 优化，在浮动的盒子后面追加一个块元素 -->"),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("father"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("float-child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`    /* 伪元素清除浮动 */
    .father {
      width: 500px;
      background: red;
    }
    .float-child {
      width: 100px;
      height: 100px;
      background: white;
    }
    .float-child {
        float: right;
    }
    .father:after {
        content: "";
        display: block;
        clear: both;
    }
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=i(`<h2 id="inline-block的间隙问题" tabindex="-1"><a class="header-anchor" href="#inline-block的间隙问题" aria-hidden="true">#</a> inline-block的间隙问题</h2><p>两个<code>display: inline-block</code>的元素放到一起会产生一段空白<br> 因为这时两个元素之间的代码换行会被转换成空白符</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>代码写在同一行</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span><span class="token punctuation">&#39;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span><span class="token punctuation">&#39;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="display-none-visibility-hidden-opacity-0-的区别" tabindex="-1"><a class="header-anchor" href="#display-none-visibility-hidden-opacity-0-的区别" aria-hidden="true">#</a> display: none，visibility: hidden, opacity: 0 的区别</h2><h3 id="结构上" tabindex="-1"><a class="header-anchor" href="#结构上" aria-hidden="true">#</a> 结构上</h3><ul><li><code>display: none</code> 会让目标元素不会被渲染进渲染树， 因此不占空间，而且不能点击。</li><li><code>visibility: hidden</code>目标元素会被渲染进渲染树，因此占空间，但是不能点击。</li><li><code>opacity: 0</code>目标元素会被渲染进渲染树，因此占空间，而且能点击。</li></ul><h3 id="继承上" tabindex="-1"><a class="header-anchor" href="#继承上" aria-hidden="true">#</a> 继承上</h3><ul><li><code>display: none</code>作用于父元素后，子元素也不会被渲染（即使给子元素加了display: block）</li><li><code>visibility: hidden</code>作用于父元素后，子元素继承这个属性，也不可见；可以给子元素设置visibility: visible使其可见。</li><li><code>opacity: 0</code>作用于父元素后，虽然子元素不会继承这个属性，但是子元素的透明度也会被影响，所以也不可见；而且不能通过给子元素设置opacity: 1使其变成不透明。</li></ul><h3 id="性能上" tabindex="-1"><a class="header-anchor" href="#性能上" aria-hidden="true">#</a> 性能上</h3><ul><li><code>display: none</code>会造成回流/重绘，性能影响大</li><li><code>visibility: hidden</code>会造成元素内部的重绘，性能影响相对小</li><li><code>opacity: 0</code>由于opacity属性启用了GPU加速，性能最好</li></ul>`,12),F=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[a("opacity是不继承属性，父元素设置opacity，子元素并不会继承。"),n("br"),a(" 但是因为该属性的特殊性（类似background），父元素有了透明度，子元素的样式也会被影响。"),n("br"),a(" 如果父元素设置"),n("code",null,"opacity: 0.5"),a("，子元素设置"),n("code",null,"opacity: 0.5"),a("，那么实际上子元素的透明度是0.5 * 0.5 = 0.25。"),n("br"),a(" 如果希望子元素不被父元素的透明度影响，我们可以使用"),n("code",null,"background: rgba"),a("代替"),n("code",null,"opacity: 0")])],-1),G=i('<h2 id="重绘和回流" tabindex="-1"><a class="header-anchor" href="#重绘和回流" aria-hidden="true">#</a> 重绘和回流</h2><ul><li>重绘: 当渲染树中的一些元素需要更新属性，而这些属性只是影响元素的外观、风格，而不会影响布局的操作，比如 background-color，我们将这样的操作称为重绘。</li><li>回流：当渲染树中的一部分（或全部）因为元素的规模尺寸、布局、隐藏等改变而需要重新构建的操作，会影响到布局的操作，这样的操作我们称为回流。</li></ul><h3 id="如何减少重排、重绘" tabindex="-1"><a class="header-anchor" href="#如何减少重排、重绘" aria-hidden="true">#</a> 如何减少重排、重绘</h3><ul><li>CSS <ul><li>尽可能在DOM树的末端改变class</li><li>将动画效果加在position属性为fixed或absolute的元素上，避免影响其他元素。</li><li>避免使用table布局（一个小改动会使整个table重新布局）</li><li>使用visibility:0（引起重绘）代替display:none（引起重排）</li></ul></li><li>JS <ul><li>避免频繁更改样式，对于多处更改最好一次性完成</li><li>避免频繁操作DOM，创建一个容器元素，在其中完成所有DOM操作，再将其添加到文档</li></ul></li></ul>',4),M={id:"akara的博客",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#akara的博客","aria-hidden":"true"},"#",-1),E={href:"https://messiahhh.github.io/blog/docs/CSS",target:"_blank",rel:"noopener noreferrer"};function N(O,V){const l=c("CodeGroupItem"),t=c("CodeGroup"),d=c("ExternalLinkIcon");return r(),u("div",null,[h,e(t,null,{default:s(()=>[e(l,{title:"Html"},{default:s(()=>[b]),_:1}),e(l,{title:"绝对定位1"},{default:s(()=>[m]),_:1}),e(l,{title:"绝对定位2"},{default:s(()=>[v]),_:1}),e(l,{title:"绝对定位3"},{default:s(()=>[k]),_:1}),e(l,{title:"绝对定位4"},{default:s(()=>[g]),_:1}),e(l,{title:"flex布局1"},{default:s(()=>[f]),_:1}),e(l,{title:"flex布局2"},{default:s(()=>[x]),_:1}),e(l,{title:"table布局"},{default:s(()=>[_]),_:1})]),_:1}),y,e(t,null,{default:s(()=>[e(l,{title:"Html"},{default:s(()=>[w]),_:1}),e(l,{title:"Css"},{default:s(()=>[q]),_:1})]),_:1}),C,e(t,null,{default:s(()=>[e(l,{title:"Html"},{default:s(()=>[B]),_:1}),e(l,{title:"Css"},{default:s(()=>[I]),_:1})]),_:1}),S,F,G,n("h2",M,[D,a(),n("a",E,[a("Akara的博客"),e(d)])])])}const j=o(p,[["render",N],["__file","interview-css.html.vue"]]);export{j as default};
