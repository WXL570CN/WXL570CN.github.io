(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{462:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git相关"}},[s._v("#")]),s._v(" Git相关")]),s._v(" "),a("h2",{attrs:{id:"一、commit规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、commit规范"}},[s._v("#")]),s._v(" 一、commit规范")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("feat")]),s._v("：添加新特性")]),s._v(" "),a("li",[a("strong",[s._v("refactor")]),s._v("：代码重构，没有添加新功能或者修复")]),s._v(" "),a("li",[a("strong",[s._v("fix")]),s._v("：修复bug")]),s._v(" "),a("li",[a("strong",[s._v("style")]),s._v("：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑")]),s._v(" "),a("li",[a("strong",[s._v("test")]),s._v("：增加测试用例")]),s._v(" "),a("li",[a("strong",[s._v("chore")]),s._v("：改变构建流程、或者增加依赖库、工具等")]),s._v(" "),a("li",[a("strong",[s._v("revert")]),s._v("：回滚到上一个版本")]),s._v(" "),a("li",[a("strong",[s._v("docs")]),s._v("：仅仅修改了文档")])]),s._v(" "),a("h2",{attrs:{id:"二、修改已push至远程仓库的日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、修改已push至远程仓库的日志"}},[s._v("#")]),s._v(" 二、修改已push至远程仓库的日志")]),s._v(" "),a("h3",{attrs:{id:"_1、查看日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看日志"}},[s._v("#")]),s._v(" 1、查看日志")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--oneline")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2、选择要修改的提交记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、选择要修改的提交记录"}},[s._v("#")]),s._v(" 2、选择要修改的提交记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改版本号为0fefa3b的提交记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" HEAD~0fefa3b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3、修改提交记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改提交记录"}},[s._v("#")]),s._v(" 3、修改提交记录")]),s._v(" "),a("ul",[a("li",[s._v("输入"),a("code",[s._v("i")]),s._v("进入编辑模式")]),s._v(" "),a("li",[s._v("找到需要修改注释的一行，并将其头部的"),a("code",[s._v("pick")]),s._v("修改为"),a("code",[s._v("edit")])]),s._v(" "),a("li",[s._v("ESC退出编辑模式")]),s._v(" "),a("li",[s._v("输入"),a("code",[s._v(":wq!")]),s._v("保存退出")])]),s._v(" "),a("h3",{attrs:{id:"_4、更正commit注释内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、更正commit注释内容"}},[s._v("#")]),s._v(" 4、更正commit注释内容")]),s._v(" "),a("ul",[a("li",[s._v("输入"),a("code",[s._v("i")]),s._v("进入编辑模式")]),s._v(" "),a("li",[s._v("第一行即要修改的提交记录，将其修改为正确的注释")]),s._v(" "),a("li",[s._v("ESC退出编辑模式")]),s._v(" "),a("li",[s._v("输入"),a("code",[s._v(":wq!")]),s._v("保存退出")])]),s._v(" "),a("h3",{attrs:{id:"_5、提交修改确认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、提交修改确认"}},[s._v("#")]),s._v(" 5、提交修改确认")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--continue")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"三、warning-lf-will-be-replaced-by-crlf-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、warning-lf-will-be-replaced-by-crlf-in"}},[s._v("#")]),s._v(" 三、warning: LF will be replaced by CRLF in")]),s._v(" "),a("p",[s._v("存在符号转义问题"),a("br"),s._v("\nwindows中的换行符为 "),a("code",[s._v("CRLF，")]),s._v(" 而在linux下的换行符为"),a("code",[s._v("LF")]),s._v("，所以在执行"),a("code",[s._v("git add")]),s._v("时出现提示，解决办法：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" core.autocrlf "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"获取ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取ssh"}},[s._v("#")]),s._v(" 获取ssh")]),s._v(" "),a("p",[s._v("进入ssh文件夹查看是否有秘钥")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("创建")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"570@wxl.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("显示ssh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);