import{_ as i,p as l,q as t,s as n,R as a,t as s,Y as d,n as c}from"./framework-e1bed10d.js";const r={},o=n("h1",{id:"git-learning",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-learning","aria-hidden":"true"},"#"),a(" Git learning")],-1),p=n("h2",{id:"_1、教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、教程","aria-hidden":"true"},"#"),a(" 1、教程")],-1),u={href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"},h={href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"},v=d(`<h2 id="_2、配置用户信息" tabindex="-1"><a class="header-anchor" href="#_2、配置用户信息" aria-hidden="true">#</a> 2、配置用户信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 声明用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;用户名&quot;</span>

<span class="token comment"># 声明用户邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;邮箱&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、查看提交日志" tabindex="-1"><a class="header-anchor" href="#_3、查看提交日志" aria-hidden="true">#</a> 3、查看提交日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
<span class="token comment"># 简洁版的日志</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、查看切换版本的记录" tabindex="-1"><a class="header-anchor" href="#_4、查看切换版本的记录" aria-hidden="true">#</a> 4、查看切换版本的记录</h2><blockquote><p>该操作也能显示每个版本的版本号</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5、创建分支" tabindex="-1"><a class="header-anchor" href="#_5、创建分支" aria-hidden="true">#</a> 5、创建分支</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看分支</span>
<span class="token function">git</span> branch 分支名
<span class="token comment"># 切换到分支</span>
<span class="token function">git</span> checkout 分支名
<span class="token comment"># 删除分支（需要切换到待删除分支外的其他分支）</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 待删除的分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、子仓库" tabindex="-1"><a class="header-anchor" href="#_6、子仓库" aria-hidden="true">#</a> 6、子仓库</h2><blockquote><p>submodule</p></blockquote><h3 id="_6-1、添加子仓库" tabindex="-1"><a class="header-anchor" href="#_6-1、添加子仓库" aria-hidden="true">#</a> 6.1、添加子仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> ssh://git@gitlab<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-2、操作" tabindex="-1"><a class="header-anchor" href="#_6-2、操作" aria-hidden="true">#</a> 6.2、操作</h3><p>clone一个含有子仓库的项目或切换到一个有子仓库的分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token punctuation">..</span>.
<span class="token function">git</span> checkout <span class="token punctuation">..</span>.
<span class="token comment"># 切换分支时如果当前分支含有子仓库则不需要执行该命令</span>
<span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、push" tabindex="-1"><a class="header-anchor" href="#_7、push" aria-hidden="true">#</a> 7、push</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本项目强制push</span>
<span class="token function">git</span> push origin HEAD <span class="token parameter variable">--force</span>

<span class="token comment"># 将项目强制push到某个仓库</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> 仓库地址 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、回退版本" tabindex="-1"><a class="header-anchor" href="#_8、回退版本" aria-hidden="true">#</a> 8、回退版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 回退到上个版本</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
<span class="token comment"># 回退到前3次提交之前，以此类推，回退到n次提交之前</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~3
<span class="token comment"># 退到/进到 指定commit的sha码</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commit_id

<span class="token comment"># 强推到远程：</span>
<span class="token function">git</span> push origin HEAD <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(b,g){const e=c("ExternalLinkIcon");return l(),t("div",null,[o,p,n("ul",null,[n("li",null,[n("a",u,[a("阮一峰的Git教程"),s(e)])]),n("li",null,[n("a",h,[a("通过关卡学习Git"),s(e)])])]),v])}const f=i(r,[["render",m],["__file","Git-learning.html.vue"]]);export{f as default};
