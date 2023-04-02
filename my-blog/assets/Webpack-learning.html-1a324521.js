import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const p={},t=e(`<blockquote><p>功能：将ES6等代码编译成浏览器能识别的代码 注意：webpack能处理js/json，但不能处理css/img等</p></blockquote><h2 id="一、开始" tabindex="-1"><a class="header-anchor" href="#一、开始" aria-hidden="true">#</a> 一、开始</h2><p><code>npm install webpack webpack-cli --save-dev</code></p><h2 id="二、编译环境" tabindex="-1"><a class="header-anchor" href="#二、编译环境" aria-hidden="true">#</a> 二、编译环境</h2><p>开发环境打包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>webpack ./src/index.js -o ./build --mode=development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生产环境（打包后的代码是压缩的）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>webpack ./src/index.js -o ./build --mode=production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置了webpack.config.js之后，可以直接用 <code>webpack</code>进行打包</p><h2 id="三、webpack-config-js" tabindex="-1"><a class="header-anchor" href="#三、webpack-config-js" aria-hidden="true">#</a> 三、webpack.config.js</h2><p>webpack配置文件<br> 所有构建工具都是基于<code>nodejs平台</code>运行的，模块化默认采用<code>commonjs</code><br> 基本配置(webpack的五个核心基本概念)：</p><h3 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h3><p>入口文件</p><ol><li>string --&gt; <code>&#39;入口文件路径&#39;</code><br> 单入口<br> 打包形成一个chunk,输出一个bundle文件。<br> 此时chunk的名称默认是main</li><li>array --&gt; <code>[&#39;入口文件1路径&#39;, &#39;入口文件2路径&#39;]</code><br> 多入口<br> 所有入口文件最终只会形成一个chunk,输出出去只有一个bundle文件。<br> --&gt;只有在HMR功能中让html热更新生效</li><li>object --&gt; <code>{ key（输出文件名）: string（入口文件路径） }</code><br> 多入口<br> 有几个入口文件就形成几个chunk,输出几个bundle文件。<br> 此时chunk的名称是key</li></ol><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output：</h3><p>输出文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">,</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 设置公共资源路径前缀</span>
  <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]_chunk.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置非入口chunk的名称</span>
  <span class="token comment">// library一般配合dll使用</span>
  <span class="token comment">// library: &#39;[name]&#39;  // 让打包后的内容可以全局使用（即库向外暴露的变量名）</span>
  <span class="token comment">// libraryTarget: &#39;window&#39;  // 将打包后并暴露到全局的内容挂载到window</span>
  <span class="token comment">// libraryTarget: &#39;global&#39;</span>
  <span class="token comment">// libraryTarget: &#39;commonjs&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>loaders： 让webpack能够处理非js文件<br> 当一种文件同时被多个 loader 处理时，需要声明 loader 的执行顺序</li><li>plugins： 可以执行范围更广的任务</li><li>mode： 配置环境</li></ol><h2 id="四、css处理" tabindex="-1"><a class="header-anchor" href="#四、css处理" aria-hidden="true">#</a> 四、CSS处理</h2><h3 id="_1、抽成单独文件" tabindex="-1"><a class="header-anchor" href="#_1、抽成单独文件" aria-hidden="true">#</a> 1、抽成单独文件</h3><p><code>npm install mini-css-extract-plugin -D</code></p><blockquote><p>既然将 css 代码提取成了单独文件，那么 style 引入自然也不需要了，所以要取消 style-loader 的使用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一、引入</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 二、使用</span>
<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 设置输出文件名</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;style/built.css&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 三、配置loader</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// 取消style-loader的使用</span>
    <span class="token comment">// &#39;style-loader&#39;,</span>
    MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 将less解析为css，需要下载两个包 npm i less-loader css-loader -D</span>
    <span class="token string">&#39;less-loader&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、兼容性处理" tabindex="-1"><a class="header-anchor" href="#_2、兼容性处理" aria-hidden="true">#</a> 2、兼容性处理</h3><p><code>npm install postcss-loader postcss-preset-env -D</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一、loader使用</span>
<span class="token comment">// 作用：帮 postcss 找到 package.json 中 browserslist 里面的配置，通过配置加载指定的css兼容性样式</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 二、browserslist：更多配置可以 GitHub搜 browserslist</span>
<span class="token string-property property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;development&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 兼容chrome最近版本</span>
    <span class="token string">&quot;last 1 chrome version&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 1 firefox version&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 1 safari version&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 市面上百分之99.8的浏览器兼容</span>
    <span class="token string">&quot;&gt;0.2%&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 不要已经over的浏览器</span>
    <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 不要op_mini浏览器</span>
    <span class="token string">&quot;not op_mini all&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 三、默认是生产环境，如果要在开发环境中测试，则需要在外层设置node环境变量</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、压缩处理" tabindex="-1"><a class="header-anchor" href="#_3、压缩处理" aria-hidden="true">#</a> 3、压缩处理</h3><p><code>npm i optimize-css-assets-webpack-plugin -D</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 使用</span>
plugins<span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、js处理" tabindex="-1"><a class="header-anchor" href="#五、js处理" aria-hidden="true">#</a> 五、JS处理</h2><h3 id="_1、eslint-语法检查" tabindex="-1"><a class="header-anchor" href="#_1、eslint-语法检查" aria-hidden="true">#</a> 1、ESLint 语法检查</h3><p><code>npm i eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import -D</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一、使用</span>
<span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;/\\.js$/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 排除第三方库的语法检查</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 自动修复</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// 二、配置</span>
<span class="token comment">// package.json</span>
<span class="token comment">// 用到的是 airbnb 的配置（基本配置，只有对js语法的检查）</span>
<span class="token string-property property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;airbnb-base&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、兼容性处理-1" tabindex="-1"><a class="header-anchor" href="#_2、兼容性处理-1" aria-hidden="true">#</a> 2、兼容性处理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i babel-loader @babel/core @babel/preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>@babel/preset-env</code> 只能处理基本的js语法，不能处理promise等语法<br> 解决方案：</p><ol><li>方案一：<code>@babel/polyfill</code>，处理全部js语法兼容<br><code>npm i @babel/polyfill -D</code></li></ol><blockquote><p><code>@babel/polyfill</code>不需要做其他配置，在需要做兼容性处理的js文件中引入即可<br> 问题：体积太大</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用：引入即用</span>
<span class="token keyword">import</span> <span class="token string">&#39;@babel/polyfill&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>方案二： <code>core-js</code>，按需加载<br><code>npm install core-js -D</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 按需加载</span>
          <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、压缩处理-1" tabindex="-1"><a class="header-anchor" href="#_3、压缩处理-1" aria-hidden="true">#</a> 3、压缩处理</h3><p>将环境改为生产环境（production）即可</p><h2 id="六、html" tabindex="-1"><a class="header-anchor" href="#六、html" aria-hidden="true">#</a> 六、HTML</h2><h3 id="_1、基本配置" tabindex="-1"><a class="header-anchor" href="#_1、基本配置" aria-hidden="true">#</a> 1、基本配置</h3><p><code>npm i html-webpack-plugin -D</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 设置 webpack 的生成HTML文件依赖</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置压缩属性</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置元信息</span>
    meta：<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、压缩" tabindex="-1"><a class="header-anchor" href="#_2、压缩" aria-hidden="true">#</a> 2、压缩</h3><p>HtmlWebpackPlugin插件配置添加 minify配置 即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">minify</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 去除空格</span>
  <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token comment">// 移除注释</span>
  <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、性能优化" tabindex="-1"><a class="header-anchor" href="#七、性能优化" aria-hidden="true">#</a> 七、性能优化</h2><h3 id="_1、开发环境性能优化" tabindex="-1"><a class="header-anchor" href="#_1、开发环境性能优化" aria-hidden="true">#</a> 1、开发环境性能优化</h3><ol><li>代码构建速度优化 HMR：热模块替换<br> 样式文件：可以使用<code>HMR</code>功能，因为<code>style-loader</code>内部实现了<br><code>HMR</code></li><li>调试功能优化<br><code>source-map </code></li></ol><h3 id="_2、生产环境性能优化" tabindex="-1"><a class="header-anchor" href="#_2、生产环境性能优化" aria-hidden="true">#</a> 2、生产环境性能优化</h3><ol><li>代码打包构建速度优化<br><code>oneOf | babel缓存 | 多进程打包 | externals | dll</code></li><li>代码运行性能优化<br><code>缓存 | tree shaking | code split | 懒加载/预加载 | pwa</code></li></ol><h3 id="_3、hmr-功能" tabindex="-1"><a class="header-anchor" href="#_3、hmr-功能" aria-hidden="true">#</a> 3、HMR 功能</h3><blockquote><p>hot module replacement 热模块替换：一个模块发生变化，只会重新打包更新该模块而不会更新整个页面 代码构建速度优化</p></blockquote><h4 id="开启hmr" tabindex="-1"><a class="header-anchor" href="#开启hmr" aria-hidden="true">#</a> 开启HMR</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 开启HMR功能</span>
<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="样式文件" tabindex="-1"><a class="header-anchor" href="#样式文件" aria-hidden="true">#</a> 样式文件</h4><p>不需要，因为style-loader已经实现了该功能</p><h4 id="js文件" tabindex="-1"><a class="header-anchor" href="#js文件" aria-hidden="true">#</a> js文件</h4><p>默认不能使用<code>HMR</code>，解决方案：在js文件中添加配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">{</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 该方法会监听a.js文件，一旦a.js文件发生变化，则执行这后面的逻辑代码</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>也就是说，无法对入口文件做HMR功能，只能对入口文件中的依赖做HMR功能</p></blockquote><h4 id="html文件" tabindex="-1"><a class="header-anchor" href="#html文件" aria-hidden="true">#</a> html文件</h4><p>不需要使用HMR，因为通常来说html是单独使用的</p><blockquote><p>开启了HMR功能时，会导致html文件热更新失效 解决方案：将html文件加入到入口文件配置中</p></blockquote><h3 id="_4、oneof-代码构建速度优化" tabindex="-1"><a class="header-anchor" href="#_4、oneof-代码构建速度优化" aria-hidden="true">#</a> 4、oneOf（代码构建速度优化）</h3><p>将一系列的rules放在oneOf数组中，使得各类文件在匹配loader时，匹配成功则不再往后匹配，减少匹配loader次数</p><blockquote><p>oneOf中不能出现两个处理同一类型的loader 解决方案：将多余的loader提取到oneOf外面（最好是优先执行的loader）</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、source-map-功能-调试功能优化" tabindex="-1"><a class="header-anchor" href="#_5、source-map-功能-调试功能优化" aria-hidden="true">#</a> 5、source-map 功能（调试功能优化）</h3><blockquote><p>一种提供源代码到构建后代码映射技术 (如果构建后代码出错了,通过映射可以追踪源代码错误)</p></blockquote><p>简言之：对后期代码错误溯源，精准到哪行代码出了错</p><p>开启：</p><p>在webpack.config.js中添加配置：<code>devtool: &#39;source-map&#39;</code></p><p>devtoll配置：</p><blockquote><p>（内联和外部的区别 1：外部生成了文件，内联没有；2：内联构建速度更快，但体积大）</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>source<span class="token operator">-</span>map
<span class="token comment">// 外部</span>
<span class="token comment">// 错误代码准确信息和源代码的错误位置</span>
inline<span class="token operator">-</span>source<span class="token operator">-</span>map
<span class="token comment">// 内联</span>
<span class="token comment">// 只生成一个内联source-map</span>
<span class="token comment">// 错误代码准确信息和源代码的错误位置</span>
hidden<span class="token operator">-</span>source<span class="token operator">-</span>map
<span class="token comment">// 外部</span>
<span class="token comment">// 错误代码错误原因,但是没有错误位置不能追踪源代码错误,只能提示到构建后代码的错误位置</span>
eval<span class="token operator">-</span>source<span class="token operator">-</span>map
<span class="token comment">// 内联</span>
<span class="token comment">// 每一个文件都生成对应的source-map,都在eval错误代码准确信息和源代码的错误位置</span>
nosources<span class="token operator">-</span>source<span class="token operator">-</span>map
<span class="token comment">// 外部</span>
<span class="token comment">// 错误代码准确信息,但是没有任何源代码信息</span>
cheap<span class="token operator">-</span>source<span class="token operator">-</span>map
<span class="token comment">// 外部</span>
<span class="token comment">// 错误代码准确信息和源代码的错误位置只能精确的行</span>
cheap<span class="token operator">-</span>module<span class="token operator">-</span>source<span class="token operator">-</span>map
<span class="token comment">// 外部</span>
<span class="token comment">// 错误代码准确信息和源代码的错误位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发环境需求：速度快，调试更友好<br>        速度：eval &gt; inline &gt; cheap &gt; ...<br>        调试：source-map &gt; cheap-module-souce-map &gt; cheap-source-map<br>        综合 ===&gt; eval-source-map || eval-cheap-module-souce-map</p><p>生产环境需求：源代码隐藏？调试友好？<br>        nosources-source-map<br>        hidden-source-map<br>        综合 ===&gt; source-map || cheap-module-souce-map</p><h3 id="_6、缓存" tabindex="-1"><a class="header-anchor" href="#_6、缓存" aria-hidden="true">#</a> 6、缓存</h3><h4 id="babel缓存" tabindex="-1"><a class="header-anchor" href="#babel缓存" aria-hidden="true">#</a> babel缓存</h4><p>开启<code>babel-loader</code>的缓存</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、文件资源缓存" tabindex="-1"><a class="header-anchor" href="#_7、文件资源缓存" aria-hidden="true">#</a> 7、文件资源缓存</h4><p>hash：每次wepack构建时会生成一个唯一的hash值。<br>        问题：因为js和css同时使用一个hash值。如果重新打包,会导致所有缓存失效。(可能我只改动一个文件)<br> chunkhash：根据chunk（代码块，随着一个文件同时被引入的其他文件统称为一个chunk）生成的hash值。如果打包来源于同一个chunk，那么hash值就一样<br>        问题: js和css的hash值还是一样的，因为css是在js中被引入的，所以同属于一个<br> chunkcontenthash：根据文件的内容生成hash值。不同文件hash值一定不一样<br> 即给输出文件名添加hash值，使得变化的文件hash值发生改变，而未变化的文件hash值也不会发生改变。</p><h3 id="_8、tree-shaking" tabindex="-1"><a class="header-anchor" href="#_8、tree-shaking" aria-hidden="true">#</a> 8、tree shaking</h3><p>取出无用代码（理解：字面意思，树摇，摇晃一棵树，去除枯萎的叶子（无用代码））</p><blockquote><p>前提：必须使用ES6模块化；开启production环境<br> 在package.json中配置</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 所有代码都没有副作用，即都可以进行tree shaking</span>
<span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token comment">// 问题：可能会因为webpack版本问题，会把一些未引入但又必须的文件去除</span>
<span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.less&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、code-split" tabindex="-1"><a class="header-anchor" href="#_9、code-split" aria-hidden="true">#</a> 9、code split</h3><p>代码分割<br> 一：entry设置为多路口</p><blockquote><p>问题：配置繁琐</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;./src/test.js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].[contenthash:10].js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二：<code>webpack.config.js</code>配置optimization</p><blockquote><p>可以将node_modules中的代码单独打包成一个chunk输出 自动分析多个入口chunk中，有没有公用的文件（偏大的文件），如果有的话则将其打包成单独的一个chunk</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三：通过js代码方式，让某个文件单独打包成一个chunk</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES10语法</span>
<span class="token comment">// 下面的注释为设置打包后文件名</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span><span class="token string">&#39;a.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件加载成功&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件加载失败&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、懒加载和预加载" tabindex="-1"><a class="header-anchor" href="#_10、懒加载和预加载" aria-hidden="true">#</a> 10、懒加载和预加载</h3><h4 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载" aria-hidden="true">#</a> 懒加载</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 执行到这才加载 a.js 文件，加载完成会缓存</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span><span class="token string">&#39;a.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件加载成功&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件加载失败&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="预加载" tabindex="-1"><a class="header-anchor" href="#预加载" aria-hidden="true">#</a> 预加载</h4><p>在魔法注释里加上<code>webpackPrefetch: true</code><br> 空闲加载：不会堵塞其他资源加载</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39;, webpackPrefetch: true */</span><span class="token string">&#39;a.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件加载成功&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件加载失败&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、pwa" tabindex="-1"><a class="header-anchor" href="#_11、pwa" aria-hidden="true">#</a> 11、PWA</h3><p>渐进式网络开发应用程序（离线可访问）</p><h3 id="_12、多进程打包" tabindex="-1"><a class="header-anchor" href="#_12、多进程打包" aria-hidden="true">#</a> 12、多进程打包</h3><p><code>npm i thread-loader -D</code> 和babel一起使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 开启多进程打包，进程启动大概600ms</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;thread-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">workers</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// 进程2个</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13、externals" tabindex="-1"><a class="header-anchor" href="#_13、externals" aria-hidden="true">#</a> 13、externals</h3><p>杜绝第三方库被打包进js文件 <code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 库名: 包名</span>
  <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14、dll" tabindex="-1"><a class="header-anchor" href="#_14、dll" aria-hidden="true">#</a> 14、dll</h3><p>对某些库单独进行打包<br> 新建文件<code>webpack.dll.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> resolve<span class="token operator">=</span> <span class="token function">require</span> <span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 当你运行 webpack 时,默认查找 webpack.config.js 配置文作</span>
<span class="token comment">// 需求：需要运行 webpack.d1l.js文件 </span>
<span class="token comment">// 解决：webpack--config webpack.d1l.js</span>
<span class="token comment">// 运行该命令会再目录下生成dll文件夹，里面会有jquery.js、manifest.json</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最终打包生成的[name]--&gt; jquery</span>
    <span class="token comment">// [&#39;jquery&quot;]--&gt;要打包的库是jquery</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span> dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span><span class="token punctuation">,</span> <span class="token comment">//打包的库里面向外暴露出去的内容叫什么名字</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>webpack.config.js</code>中配置<br><code>npm i add-assets-html-webpack-plugin -D</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> AddAssetsHtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;add-assets-html-webpack-plugin&#39;</span><span class="token punctuation">)</span>


<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 告诉webpack哪些库不需要打包，同时使用的名称也需要变</span>
  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/manifest.json&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">new</span> <span class="token class-name">AddAssetsHtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">filepath</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/jquery.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、最终-webpack-config-js-配置" tabindex="-1"><a class="header-anchor" href="#八、最终-webpack-config-js-配置" aria-hidden="true">#</a> 八、最终 <code>webpack.config.js</code> 配置：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// loader: 1. 下载  2. 使用（配置loader）</span>
<span class="token comment">// plugin: 1. 下载  2. 引用 3. 使用</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 设置index.html</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 抽取css代码为单独文件</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// 输出文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 输出路径</span>
    <span class="token comment">// __dirname代表当前文件所在的目录绝对路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// loader的配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 不同文件必须配置不同loader处理</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 匹配哪些文件，正则</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 使用哪些loader进行处理</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 创建style标签，将js中的样式资源插入到head中</span>
          <span class="token comment">// &#39;style-loader&#39;,</span>
          <span class="token comment">// 提取css插件需要引入该loader，但同时也需要关闭style-loader</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token comment">// 会将css文件变成commonjs模块加载到js中 ，里面内容是样式字符串</span>
          <span class="token string">&#39;css-loader&#39;</span>
          <span class="token comment">// 即执行顺序为 css-loader，再 style-loader</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token comment">// &#39;style-loader&#39;,</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 将less解析为css，需要下载两个包 npm i less-loader css-loader -D</span>
          <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 缺点：处理不了html中引入的图片</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 需要下载两个包 npm i url-loader file-loader -D</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 图片小于 8k 时会被base64处理</span>
          <span class="token comment">// 优点： 减少请求数量</span>
          <span class="token comment">// 缺点：图片体积会更大</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token comment">// 由于url-loader 默认使用es6模块化解析，而html-loader引入图片是commonjs。</span>
          <span class="token comment">// 解析时会出错</span>
          <span class="token comment">// 解决：关闭url-loader的es6解析</span>
          <span class="token comment">// 当然，没有使用html-loader就不需要这个命令了</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// 给图片重命名,使其名字不至于太长</span>
          <span class="token comment">// [hash:10]：取hash值得前十位</span>
          <span class="token comment">// [ext]：取图片的原扩展名</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> &#39;<span class="token punctuation">[</span>hash<span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>ext<span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token comment">// 设置输出到 build 中的目录</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;img&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理 html中引入的图片，webpack5.x中不需要引入该 loader 也能处理html中的图片，  </span>
        <span class="token comment">// 这应该是webpack5.x解决了该问题</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 打包其他资源（除html/js/css资源以外的其他资源），如字体文件</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(html|js|css)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;media&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// 创建一个空的html，并引入打包后的所有资源如css/js</span>
    <span class="token comment">// new HtmlWebpackPlugin()</span>
    <span class="token comment">// 想要有结构的Html，则需要配置</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置压缩属性</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 去除空格</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token comment">// 移除注释</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置元信息</span>
      meta：<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;style/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// mode: &#39;production&#39;,</span>
  <span class="token comment">// 自动编译</span>
  <span class="token comment">// 只会在内存中编译打包，而不会有本地输出</span>
  <span class="token comment">// 使用：npm i webpack-dev-server -D</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 启动gzip压缩，让代码体积更小，压缩更快</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启HMR功能，但仅限于样式文件，且会导致html文件不能热更新</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> modules</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 匹配规则</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 使用loader</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 排除文件</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 优先执行，不需要优先执行则不添加 延后执行：post</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolve" tabindex="-1"><a class="header-anchor" href="#resolve" aria-hidden="true">#</a> resolve</h2><p>解析模块的规则</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 配置别名</span>
  <span class="token literal-property property">alia</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$css</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$js</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$api</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/api&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token comment">// 配置省略文件的后缀名</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 告诉 webpack 解析模块应该去什么目录，不用一层一层找</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../../node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver" aria-hidden="true">#</a> devServer</h2><p>用于开发环境</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 运行代码的目录</span>
  <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resove</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 监听文件变化，变化则重载</span>
  <span class="token literal-property property">watchContentBase</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 忽略监听文件</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token string">&#39;node_modules&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 启动gzip压缩</span>
  <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 端口号</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 域名</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 自动打开浏览器</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 开启HMR功能</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 取消启动服务器日志</span>
  <span class="token literal-property property">clientLogLevel</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span>
  <span class="token comment">// 除了基本启动信息外，其他都不显示</span>
  <span class="token literal-property property">quiet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 出错不要全屏提示</span>
  <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 服务器代理，解决开发环境跨域问题</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;htpp://localhost:3000&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 发送请求时,请求路重写:将/api/xxx--&gt; /xxx (去掉/api)</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> optimization</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunks</span><span class="token operator">:</span> all&#39;<span class="token punctuation">,</span>
    <span class="token comment">// 以下为默认值，一般不修改</span>
    <span class="token comment">// minsize: 30 * 1024,  // 分割的chunk最小为30kb</span>
    <span class="token comment">// maxsiza: 0,  // 最大没有限制</span>
    <span class="token comment">// minChunks: 1,  // 要提取的chunk最少被引用1次</span>
    <span class="token comment">// maxAsyncRequests: 5,  // 按需加载时并行加载的文件的最大数量</span>
    <span class="token comment">// maxInitialRequests: 3,  // 入口js文件最大并行请求数量</span>
    <span class="token comment">// automaticNameDelimiter: &#39;~&#39;,  // 名称连接符</span>
    <span class="token comment">// name: true,  // 可以使用命名规则</span>
    <span class="token comment">// cacheGroups: {  //分割chunk的组</span>
    <span class="token comment">//   // node_modules文件会被打包到vendors组的chunk中。--&gt; vendors~xxx.js</span>
    <span class="token comment">//   // 满足上面的公共规则,如:大小超过30kb,至少被引用一次。</span>
    <span class="token comment">//   vendors: {</span>
    <span class="token comment">//     test: /[\\\\/]node_modules[\\V/]/,</span>
    <span class="token comment">//     // 优先级</span>
    <span class="token comment">//     priority: -10</span>
    <span class="token comment">//   },</span>
    <span class="token comment">//   default: {</span>
    <span class="token comment">//     minChunks: 2,</span>
    <span class="token comment">//     priority: -20,</span>
    <span class="token comment">//     // 对于同一模块，复用模块而不会再次打包</span>
    <span class="token comment">//     reuseExistingChunk: true</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 将当前模块的记录其他模块的hash单独打包为一个文件runtime</span>
  <span class="token comment">// 作用：修改a文件导致b文件的contenthash变化</span>
  <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token parameter">entrypoint</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">runtime-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entrypoint<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置生产环境的压缩方案：js、css</span>
    <span class="token comment">// npm i terser-webpack-plugin -D</span>
    <span class="token keyword">new</span> <span class="token class-name">TerserWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 开启缓存</span>
      <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 开启多进程打包</span>
      <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 启动source-map</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,132),o=[t];function l(i,c){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","Webpack-learning.html.vue"]]);export{u as default};
