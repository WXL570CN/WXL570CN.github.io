(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{346:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"initial-query-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-query-data"}},[t._v("#")]),t._v(" Initial Query Data")]),t._v(" "),s("p",[t._v("有许多方法可以在您需要之前为缓存提供查询的初始数据：")]),t._v(" "),s("ul",[s("li",[t._v("声明地：\n"),s("ul",[s("li",[t._v("向查询提供 initialData 以在空时预填充其缓存")])])]),t._v(" "),s("li",[t._v("势在必行：\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://tanstack.com/query/latest/docs/react/guides/prefetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 queryClient.prefetchQuery 预取数据"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tanstack.com/query/latest/docs/react/guides/prefetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 queryClient.setQueryData 手动将数据放入缓存"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[t._v("[")]),t._v(" "),s("h2",{attrs:{id:"使用-initialdata-预填充查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-initialdata-预填充查询"}},[t._v("#")]),t._v(" 使用 initialData 预填充查询")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#using-initialdata-to-prepopulate-a-query)")]),t._v(" "),s("p",[t._v("有时，您的应用程序中可能已经拥有查询的初始数据，并且可以直接将其提供给您的查询。如果是这种情况，您可以使用 config.initialData 选项设置查询的初始数据并跳过初始加载状态！")]),t._v(" "),s("blockquote",[s("p",[t._v("重要提示：initialData 持久保存到缓存中，因此不建议为此选项提供占位符、部分或不完整数据，而是使用 placeholderData")])]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  queryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("queryFn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  initialData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" initialTodos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("[")]),t._v(" "),s("h3",{attrs:{id:"staletime-和-initialdataupdatedat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staletime-和-initialdataupdatedat"}},[t._v("#")]),t._v(" staleTime 和 initialDataUpdatedAt")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#staletime-and-initialdataupdatedat)")]),t._v(" "),s("p",[t._v("默认情况下，initialData 被视为完全新鲜的，就像刚刚获取的一样。这也意味着它将影响 staleTime 选项如何解释它。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果您使用 initialData 配置查询观察器，并且没有 staleTime（默认的 staleTime：0），则查询将在挂载时立即重新获取：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will show initialTodos immediately, but also immediately refetch todos after mountconst result = useQuery({  queryKey: ['todos'],  queryFn: () => fetch('/todos'),  initialData: initialTodos,})")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("如果您使用 initialData 和 1000 毫秒的 staleTime 配置您的查询观察器，那么在相同的时间内数据将被视为新鲜的，就好像它刚刚从您的查询函数中获取一样。")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show initialTodos immediately, but won't refetch until another interaction event is encountered after 1000 msconst result = useQuery({  queryKey: ['todos'],  queryFn: () => fetch('/todos'),  initialData: initialTodos,  staleTime: 1000,})")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("那么，如果您的 initialData 不是完全新鲜的怎么办？这给我们留下了实际上最准确的最后一个配置，并使用了一个名为 initialDataUpdatedAt 的选项。此选项允许您传递一个数字 JS 时间戳，以毫秒为单位，即 initialData 本身最后一次更新的时间，例如Date.now() 提供了什么。请注意，如果您有 unix 时间戳，则需要将其乘以 1000 将其转换为 JS 时间戳。")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show initialTodos immediately, but won't refetch until another interaction event is encountered after 1000 msconst result = useQuery({  queryKey: ['todos'],  queryFn: () => fetch('/todos'),  initialData: initialTodos,  staleTime: 60 * 1000, // 1 minute  // This could be 10 seconds ago or 10 minutes ago  initialDataUpdatedAt: initialTodosUpdatedTimestamp, // eg. 1608412420052})")]),t._v("\n")])])]),s("p",[t._v("此选项允许将 staleTime 用于其原始目的，确定数据需要的新鲜度，同时如果 initialData 比 staleTime 旧，则还允许在挂载时重新获取数据。在上面的示例中，我们的数据需要在 1 分钟内刷新，我们可以提示查询上次更新 initialData 的时间，以便查询可以自行决定是否需要再次重新获取数据。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果您更愿意将数据视为预取数据，我们建议您使用 prefetchQuery 或 fetchQuery API 预先填充缓存，从而让您独立于 initialData 配置 staleTime")])])])]),t._v(" "),s("p",[t._v("[")]),t._v(" "),s("h3",{attrs:{id:"初始数据函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始数据函数"}},[t._v("#")]),t._v(" 初始数据函数")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#initial-data-function)")]),t._v(" "),s("p",[t._v("如果访问查询的初始数据的过程很密集，或者您不想在每次渲染时都执行某些操作，则可以传递一个函数作为 initialData 值。这个函数只会在查询初始化时执行一次，为您节省宝贵的内存和/或 CPU：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  queryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("queryFn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getExpensiveTodos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("[")]),t._v(" "),s("h3",{attrs:{id:"来自缓存的初始数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#来自缓存的初始数据"}},[t._v("#")]),t._v(" 来自缓存的初始数据")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#initial-data-from-cache)")]),t._v(" "),s("p",[t._v("在某些情况下，您可以从另一个查询的缓存结果中为查询提供初始数据。一个很好的例子是从待办事项列表查询中搜索缓存数据以查找单个待办事项，然后将其用作个人待办事项查询的初始数据：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  queryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" todoId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("queryFn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use a todo from the 'todos' query as the initial data for this todo query    return queryClient.getQueryData(['todos'])?.find((d) => d.id === todoId)  },})")]),t._v("\n")])])]),s("p",[t._v("[")]),t._v(" "),s("h3",{attrs:{id:"带有-initialdataupdatedat-的缓存中的初始数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带有-initialdataupdatedat-的缓存中的初始数据"}},[t._v("#")]),t._v(" 带有 initialDataUpdatedAt 的缓存中的初始数据")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#initial-data-from-the-cache-with-initialdataupdatedat)")]),t._v(" "),s("p",[t._v("从缓存中获取初始数据意味着您用来查找初始数据的源查询可能很旧，但是 initialData。建议您将源查询的 dataUpdatedAt 传递给 initialDataUpdatedAt，而不是使用人为的 staleTime 来防止您的查询立即重新获取。这为查询实例提供了确定是否以及何时需要重新获取查询所需的所有信息，而不管提供的初始数据如何。")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  queryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" todoId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("queryFn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/todos/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("todoId"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("    queryClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" todoId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialDataUpdatedAt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("    queryClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueryState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("dataUpdatedAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("[")]),t._v(" "),s("h3",{attrs:{id:"来自缓存的条件初始数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#来自缓存的条件初始数据"}},[t._v("#")]),t._v(" 来自缓存的条件初始数据")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#conditional-initial-data-from-cache)")]),t._v(" "),s("p",[t._v("如果您用来查找初始数据的源查询是旧的，您可能根本不想使用缓存数据而只是从服务器获取。为了使这个决定更容易，您可以使用 queryClient.getQueryState 方法来获取有关源查询的更多信息，包括 state.dataUpdatedAt 时间戳，您可以使用它来确定查询是否“新鲜”足以满足您的需求：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  queryKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" todoId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("queryFn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/todos/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("todoId"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initialData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the query state    const state = queryClient.getQueryState(['todos'])")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the query exists and has data that is no older than 10 seconds...    if (state && Date.now() - state.dataUpdatedAt <= 10 * 1000) {      // return the individual todo      return state.data.find((d) => d.id === todoId)    }")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Otherwise, return undefined and let it fetch from a hard loading state!  },})")]),t._v("\n")])])]),s("p",[t._v("[")]),t._v(" "),s("h2",{attrs:{id:"延伸阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延伸阅读"}},[t._v("#")]),t._v(" 延伸阅读")]),t._v(" "),s("p",[t._v("](https://tanstack.com/query/latest/docs/react/guides/initial-query-data#further-reading)")]),t._v(" "),s("p",[t._v("要比较初始数据和占位符数据，请查看社区资源。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tanstack/query/tree/main/docs/react/guides/initial-query-data.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 GitHub 上编辑"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);