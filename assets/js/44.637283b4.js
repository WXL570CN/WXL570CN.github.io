(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{464:function(s,t,e){"use strict";e.r(t);var a=e(2),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1、commit规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、commit规范"}},[s._v("#")]),s._v(" "),t("strong",[s._v("1、commit规范")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("feat")]),s._v("添加新特性")]),s._v(" "),t("li",[t("strong",[s._v("refactor")]),s._v("代码重构，没有添加新功能或者修复")]),s._v(" "),t("li",[t("strong",[s._v("fix")]),s._v("修复bug")]),s._v(" "),t("li",[t("strong",[s._v("style")]),s._v("仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑")]),s._v(" "),t("li",[t("strong",[s._v("test")]),s._v("增加测试用例")]),s._v(" "),t("li",[t("strong",[s._v("chore")]),s._v("改变构建流程、或者增加依赖库、工具等")]),s._v(" "),t("li",[t("strong",[s._v("revert")]),s._v("回滚到上一个版本")]),s._v(" "),t("li",[t("strong",[s._v("docs")]),s._v("仅仅修改了文档")])]),s._v(" "),t("h3",{attrs:{id:"_2、修改已被push的commit日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、修改已被push的commit日志"}},[s._v("#")]),s._v(" "),t("strong",[s._v("2、修改已被push的commit日志")])]),s._v(" "),t("p",[s._v("2.1、查看日志（找到要修改的提交记录，如第11条）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git log --oneline\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2.2、选择要修改的提交记录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git rebase -i HEAD~112.3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2.3、修改提交记录")]),s._v(" "),t("ul",[t("li",[s._v("进入界面后，")]),s._v(" "),t("li",[s._v("按i进入编辑模式，")]),s._v(" "),t("li",[s._v("将需要修改注释的那一行前面的“pick”改为“edit”，")]),s._v(" "),t("li",[s._v("然后摁ESC退出编辑模式，")]),s._v(" "),t("li",[s._v("再输入:wq!来保存退出。")])]),s._v(" "),t("p",[s._v("2.4、更正commit注释内容")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git commit --amend\n按i进入编辑模式，\n第一行就是要修改的提交记录，修改为正确的注释，\n然后摁ESC退出编辑模式，再输入:wq!来保存退出。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2.5、提交修改确认")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("确认\ngit rebase --continue\n提交\ngit push --force\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);