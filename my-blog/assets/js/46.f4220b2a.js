(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{467:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、react-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、react-query"}},[t._v("#")]),t._v(" 一、"),s("a",{attrs:{href:"https://tanstack.com/query/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-query"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:""}},[t._v("GitHub地址")])]),t._v(" "),s("h3",{attrs:{id:"_1、介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍"}},[t._v("#")]),t._v(" 1、介绍")]),t._v(" "),s("p",[t._v("react-query 是一个异步状态管理的hook，内置了loading,error等状态，无疑是管理服务器状态的最佳库之一。")]),t._v(" "),s("h3",{attrs:{id:"_2、为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、为什么"}},[t._v("#")]),t._v(" 2、为什么")]),t._v(" "),s("p",[t._v("提供了很多便利的API（例如无限加载，分页等等，不需要开发者自己再去维护很多状态")]),t._v(" "),s("h3",{attrs:{id:"_3、使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用"}},[t._v("#")]),t._v(" 3、使用")]),t._v(" "),s("h4",{attrs:{id:"_3-1、usequery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、usequery"}},[t._v("#")]),t._v(" 3.1、useQuery")]),t._v(" "),s("p",[t._v("useQuery接收两个参数，第一个是唯一表示key，第二个是一个fetch的异步函数。\nkey是一个唯一的字符串，用来标识query，key还可以是个数组，存放query的一些依赖变量，当依赖发生变化时会重新发起请求。")]),t._v(" "),s("blockquote",[s("p",[t._v("key最好传递一个数组，即使它可以是字符串，但最终它还是会被处理成数组。")])]),t._v(" "),s("div",{staticClass:"language-tsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getTodos "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.../todo-api'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Todos")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isLoading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    queryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    queryFn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" getTodos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react-query也提供了转换器，并且也只在有数据的时候才会被调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// isLoading是没有缓存时的加载，是指在内存中没有该缓存时的加载。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isLoading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data loading...'")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// isFetching是每次请求时的加载。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFetching"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data loading...'")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网络请求遇到了异常，可以通过error属性获取异常对象；")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something error'")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口返回数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("h2",{attrs:{id:"二、ahooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、ahooks"}},[t._v("#")]),t._v(" 二、"),s("a",{attrs:{href:"https://ahooks.js.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ahooks"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/alibaba/hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"三、usehooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、usehooks"}},[t._v("#")]),t._v(" 三、"),s("a",{attrs:{href:"https://usehooks.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("useHooks"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/uidotdev/usehooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"四、react-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、react-use"}},[t._v("#")]),t._v(" 四、"),s("a",{attrs:{href:"https://github.com/streamich/react-use",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-use"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:""}},[t._v("GitHub地址")])]),t._v(" "),s("h2",{attrs:{id:"五、swr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、swr"}},[t._v("#")]),t._v(" 五、"),s("a",{attrs:{href:"https://swr.vercel.app/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("SWR"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/vercel/swr",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"六、beautiful-react-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、beautiful-react-hooks"}},[t._v("#")]),t._v(" 六、"),s("a",{attrs:{href:"https://antonioru.github.io/beautiful-react-hooks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("beautiful-react-hooks"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/antonioru/beautiful-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/antonioru/beautiful-react-hooks/blob/master/docs/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"七、react-hanger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、react-hanger"}},[t._v("#")]),t._v(" 七、react-hanger")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kitze/react-hanger",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"八、react-use-gesture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、react-use-gesture"}},[t._v("#")]),t._v(" 八、"),s("a",{attrs:{href:"https://use-gesture.netlify.app/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-use-gesture"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/pmndrs/use-gesture",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"九、use-scroll-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、use-scroll-position"}},[t._v("#")]),t._v(" 九、use-scroll-position")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/n8tb1t/use-scroll-position",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"十、react-use-form-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十、react-use-form-state"}},[t._v("#")]),t._v(" 十、"),s("a",{attrs:{href:"https://react-use-form-state.vercel.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-use-form-state"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/wsmd/react-use-form-state",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub地址"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);