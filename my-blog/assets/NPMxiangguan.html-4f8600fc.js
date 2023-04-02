import{_ as n,p as a,q as e,Y as s}from"./framework-e1bed10d.js";const i={},d=s(`<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="rimraf-快速删除文件-比如用来删除node-modules" tabindex="-1"><a class="header-anchor" href="#rimraf-快速删除文件-比如用来删除node-modules" aria-hidden="true">#</a> rimraf：快速删除文件，比如用来删除node_modules</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> i rimraf <span class="token parameter variable">-g</span>
<span class="token comment"># 使用</span>
rimraf node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装nodejs所需环境" tabindex="-1"><a class="header-anchor" href="#安装nodejs所需环境" aria-hidden="true">#</a> 安装nodejs所需环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">--g</span> <span class="token parameter variable">--production</span> windows-build-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="npm包调试" tabindex="-1"><a class="header-anchor" href="#npm包调试" aria-hidden="true">#</a> Npm包调试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 包项目下</span>
<span class="token function">npm</span> <span class="token function">link</span>
<span class="token comment"># 查看下面目录下是否生成包的软链接</span>
AppData/Local/Yarn/Data/link/
<span class="token comment"># 使用</span>
<span class="token function">npm</span> <span class="token function">link</span> 包名
<span class="token comment"># 包修改后，编译即可</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[d];function r(c,o){return a(),e("div",null,l)}const m=n(i,[["render",r],["__file","NPMxiangguan.html.vue"]]);export{m as default};
