import{_ as n,p as e,q as s,Y as a}from"./framework-e1bed10d.js";const i={},d=a(`<h1 id="「初学笔记」http状态码" tabindex="-1"><a class="header-anchor" href="#「初学笔记」http状态码" aria-hidden="true">#</a> 「初学笔记」http状态码</h1><h2 id="_1xx" tabindex="-1"><a class="header-anchor" href="#_1xx" aria-hidden="true">#</a> 1xx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">100</span>    Continue    继续。客户端应继续其请求
<span class="token number">101</span>    Switching Protocols    切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2xx" tabindex="-1"><a class="header-anchor" href="#_2xx" aria-hidden="true">#</a> 2xx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">200</span>    OK    请求成功。一般用于GET与POST请求
<span class="token number">201</span>    Created    已创建。成功请求并创建了新的资源
<span class="token number">202</span>    Accepted    已接受。已经接受请求，但未处理完成
<span class="token number">203</span>    Non-Authoritative Information    非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
<span class="token number">204</span>    No Content    无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
<span class="token number">205</span>    Reset Content    重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
<span class="token number">206</span>    Partial Content    部分内容。服务器成功处理了部分GET请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3xx" tabindex="-1"><a class="header-anchor" href="#_3xx" aria-hidden="true">#</a> 3xx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">300</span>    Multiple Choices    多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
<span class="token number">301</span>    Moved Permanently    永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
<span class="token number">302</span>    Found    临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
<span class="token number">303</span>    See Other    查看其它地址。与301类似。使用GET和POST请求查看
<span class="token number">304</span>    Not Modified    未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
<span class="token number">305</span>    Use Proxy    使用代理。所请求的资源必须通过代理访问
<span class="token number">306</span>    Unused    已经被废弃的HTTP状态码
<span class="token number">307</span>    Temporary Redirect    临时重定向。与302类似。使用GET请求重定向
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4xx" tabindex="-1"><a class="header-anchor" href="#_4xx" aria-hidden="true">#</a> 4xx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">400</span>    Bad Request    客户端请求的语法错误，服务器无法理解
<span class="token number">401</span>    Unauthorized    请求要求用户的身份认证
<span class="token number">402</span>    Payment Required    保留，将来使用
<span class="token number">403</span>    Forbidden    服务器理解请求客户端的请求，但是拒绝执行此请求
<span class="token number">404</span>    Not Found    服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置<span class="token string">&quot;您所请求的资源无法找到&quot;</span>的个性页面
<span class="token number">405</span>    Method Not Allowed    客户端请求中的方法被禁止
<span class="token number">406</span>    Not Acceptable    服务器无法根据客户端请求的内容特性完成请求
<span class="token number">407</span>    Proxy Authentication Required    请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
<span class="token number">408</span>    Request Time-out    服务器等待客户端发送的请求时间过长，超时
<span class="token number">409</span>    Conflict    服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突
<span class="token number">410</span>    Gone    客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
<span class="token number">411</span>    Length Required    服务器无法处理客户端发送的不带Content-Length的请求信息
<span class="token number">412</span>    Precondition Failed    客户端请求信息的先决条件错误
<span class="token number">413</span>    Request Entity Too Large    由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
<span class="token number">414</span>    Request-URI Too Large    请求的URI过长（URI通常为网址），服务器无法处理
<span class="token number">415</span>    Unsupported Media Type    服务器无法处理请求附带的媒体格式
<span class="token number">416</span>    Requested range not satisfiable    客户端请求的范围无效
<span class="token number">417</span>    Expectation Failed    服务器无法满足Expect的请求头信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5xx" tabindex="-1"><a class="header-anchor" href="#_5xx" aria-hidden="true">#</a> 5xx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">500</span>    Internal Server Error    服务器内部错误，无法完成请求
<span class="token number">501</span>    Not Implemented    服务器不支持请求的功能，无法完成请求
<span class="token number">502</span>    Bad Gateway    作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
<span class="token number">503</span>    Service Unavailable    由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
<span class="token number">504</span>    Gateway Time-out    充当网关或代理的服务器，未及时从远端服务器获取请求
<span class="token number">505</span>    HTTP Version not supported    服务器不支持请求的HTTP协议的版本，无法完成处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[d];function r(t,c){return e(),s("div",null,l)}const o=n(i,[["render",r],["__file","http-code.html.vue"]]);export{o as default};
