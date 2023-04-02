import{_ as e,p as t,q as i,Y as a}from"./framework-e1bed10d.js";const n={},r=a(`<h2 id="一、路由" tabindex="-1"><a class="header-anchor" href="#一、路由" aria-hidden="true">#</a> 一、路由</h2><h3 id="_1、什么是路由" tabindex="-1"><a class="header-anchor" href="#_1、什么是路由" aria-hidden="true">#</a> 1、什么是路由？</h3><ul><li>一个路由就是一个映射关系(key:value)</li><li>key为路径, value可能是function或component</li></ul><h3 id="_2、路由是如何实现修改地址但不刷新页面的" tabindex="-1"><a class="header-anchor" href="#_2、路由是如何实现修改地址但不刷新页面的" aria-hidden="true">#</a> 2、路由是如何实现修改地址但不刷新页面的？</h3><ul><li>方法一：<br> 利用H5推出的history提供的API</li><li>方法二：<br> 利用hash值，即锚点，缺陷是地址上会显示#号</li></ul><h3 id="_3、使用" tabindex="-1"><a class="header-anchor" href="#_3、使用" aria-hidden="true">#</a> 3、使用</h3><ul><li>3.1 安装react-router-dom<br><code>npm i react-router-dom</code> react的一个插件库。<br> 专门用来实现一个SPA应用。<br> 基于react的项目基本都会用到此库。 <ul><li>内置对象</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;BrowserRouter&gt;
&lt;HashRouter&gt;
&lt;Route&gt;
&lt;Redirect&gt;
&lt;Link&gt;
&lt;NavLink&gt;
&lt;Switch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.2 引入路由组件<br><code>import {Link, Route} from &#39;react-router-dom&#39;</code><ul><li>路由跳转链接链接<br><code>&lt;Link to=&#39;/test&#39;&gt;Test&lt;/Link&gt;</code></li><li>注册路由<br><code>&lt;Route path=&#39;/test&#39; component={Test} /&gt;</code></li><li>包裹BrowserRouter<br> Link和Route组件需要被包裹在同一个BrowserRouter，一劳永逸的办法：在App最外侧包裹<br><code>&lt;BrowserRouter&gt;&lt;App /&gt;&lt;/BrowserRouter&gt;</code><br> 或者<br><code>&lt;HashRouter&gt;&lt;App /&gt;&lt;/HashRouter&gt;</code><br> 使用HashRouter，在地址栏会出现#号</li></ul></li></ul><h3 id="_4、路由组件和一般组件" tabindex="-1"><a class="header-anchor" href="#_4、路由组件和一般组件" aria-hidden="true">#</a> 4、路由组件和一般组件</h3><h4 id="_4-1-写法不一样" tabindex="-1"><a class="header-anchor" href="#_4-1-写法不一样" aria-hidden="true">#</a> 4.1 写法不一样</h4><p>一般组件：<code>&lt;Demo&gt;</code><br> 路由组件：<code>&lt;Route path=&quot;/demo&quot; component ={Demo}/&gt;</code></p><h4 id="_4-2-存放的位置一般不同" tabindex="-1"><a class="header-anchor" href="#_4-2-存放的位置一般不同" aria-hidden="true">#</a> 4.2 存放的位置一般不同</h4><p>一般组件：components<br> 路由组件：pages</p><h4 id="_4-3-接收的内容【props】" tabindex="-1"><a class="header-anchor" href="#_4-3-接收的内容【props】" aria-hidden="true">#</a> 4.3 接收的内容【props】</h4><p>一般组件：写组件标签的时候传递什么，就能收到什么<br> 路由组件：接收到三个固定的属性 <code>history location match</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)

location:
    pathname: &quot;/about&quot;
    search: &quot;&quot;
    state: undefined

match:
    params: {}
    path: &quot;/about&quot;
    url: &quot;/about&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、navlink" tabindex="-1"><a class="header-anchor" href="#_5、navlink" aria-hidden="true">#</a> 5、NavLink</h3><p>普通路由链接 <code>&lt;Link to=&#39;/test&#39;&gt;Test&lt;/Link&gt;</code> NavLink：</p><ul><li>被点击的链接被默认添加了一个类active，类名可以通过<code>activeClassName=&quot;newActive&quot;</code>将active替换为newActive</li><li>可以通过this.props.children获取标签体内容，相当于vue的slot <code>&lt;NavLink to=&#39;/test&#39;&gt;Test&lt;/NavLink&gt;</code></li></ul><h3 id="_6、switch" tabindex="-1"><a class="header-anchor" href="#_6、switch" aria-hidden="true">#</a> 6、Switch</h3><p>Route的外层<br> 作用<br> 当有多个Route时，在匹配到相对应的Route时，不继续向下匹配</p>`,22),d=[r];function l(o,s){return t(),i("div",null,d)}const u=e(n,[["render",l],["__file","React-learning-note2.html.vue"]]);export{u as default};
