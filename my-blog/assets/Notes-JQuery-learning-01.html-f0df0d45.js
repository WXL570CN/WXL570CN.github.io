const l=JSON.parse('{"key":"v-1c0f741a","path":"/blogs/beginner-notes/Notes-JQuery-learning-01.html","title":"「初学笔记」JQuery","lang":"en-US","frontmatter":{"date":"2021/07/31","tags":["jQuery"],"categories":["beginner-notes"]},"headers":[{"level":2,"title":"如何用jQuery批量替换一段HTML中文本的数字","slug":"如何用jquery批量替换一段html中文本的数字","link":"#如何用jquery批量替换一段html中文本的数字","children":[{"level":3,"title":"要求","slug":"要求","link":"#要求","children":[]},{"level":3,"title":"实现效果示例","slug":"实现效果示例","link":"#实现效果示例","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"版本问题","slug":"版本问题","link":"#版本问题","children":[]},{"level":2,"title":"jquery中的顶级对象：jquery，可简写成$","slug":"jquery中的顶级对象-jquery-可简写成","link":"#jquery中的顶级对象-jquery-可简写成","children":[]},{"level":2,"title":"页面加载事件","slug":"页面加载事件","link":"#页面加载事件","children":[{"level":3,"title":"ready事件（入口函数）：在页面标签加载完毕后触发，不等待图片文件加载","slug":"ready事件-入口函数-在页面标签加载完毕后触发-不等待图片文件加载","link":"#ready事件-入口函数-在页面标签加载完毕后触发-不等待图片文件加载","children":[]},{"level":3,"title":"load事件：页面加载事件（在页面所有元素加载完毕后触发）","slug":"load事件-页面加载事件-在页面所有元素加载完毕后触发","link":"#load事件-页面加载事件-在页面所有元素加载完毕后触发","children":[]},{"level":3,"title":"jquery中的页面加载事件不会被覆盖，即可以同时写多个事件","slug":"jquery中的页面加载事件不会被覆盖-即可以同时写多个事件","link":"#jquery中的页面加载事件不会被覆盖-即可以同时写多个事件","children":[]}]},{"level":2,"title":"jQuery的入口函数要比JavaScript的入口函数执行更快","slug":"jquery的入口函数要比javascript的入口函数执行更快","link":"#jquery的入口函数要比javascript的入口函数执行更快","children":[]},{"level":2,"title":"DOM对象和jQuery对象","slug":"dom对象和jquery对象","link":"#dom对象和jquery对象","children":[{"level":3,"title":"DOM对象：用JS方式获取到的对象","slug":"dom对象-用js方式获取到的对象","link":"#dom对象-用js方式获取到的对象","children":[]},{"level":3,"title":"jQuery对象：用jQuery方式获取到的对象","slug":"jquery对象-用jquery方式获取到的对象","link":"#jquery对象-用jquery方式获取到的对象","children":[]}]},{"level":2,"title":"jQuery对象不能调用DOM对象的方法","slug":"jquery对象不能调用dom对象的方法","link":"#jquery对象不能调用dom对象的方法","children":[]},{"level":2,"title":"获取jQuery对象中的DOM对象方法","slug":"获取jquery对象中的dom对象方法","link":"#获取jquery对象中的dom对象方法","children":[]},{"level":2,"title":"jQuery对象和DOM对象的转换","slug":"jquery对象和dom对象的转换","link":"#jquery对象和dom对象的转换","children":[{"level":3,"title":"jQuery对象转换成DOM对象","slug":"jquery对象转换成dom对象","link":"#jquery对象转换成dom对象","children":[]},{"level":3,"title":"DOM对象转换成jQuery对象：将DOM对象放入$中就变成了jQuery对象","slug":"dom对象转换成jquery对象-将dom对象放入-中就变成了jquery对象","link":"#dom对象转换成jquery对象-将dom对象放入-中就变成了jquery对象","children":[]}]},{"level":2,"title":"选择器","slug":"选择器","link":"#选择器","children":[]},{"level":2,"title":"为选择的对象添加样式","slug":"为选择的对象添加样式","link":"#为选择的对象添加样式","children":[]},{"level":2,"title":"鼠标触发事件","slug":"鼠标触发事件","link":"#鼠标触发事件","children":[]},{"level":2,"title":"过滤选择器（带冒号）","slug":"过滤选择器-带冒号","link":"#过滤选择器-带冒号","children":[]},{"level":2,"title":"修改单个样式","slug":"修改单个样式","link":"#修改单个样式","children":[]},{"level":2,"title":"修改多个样式（在里面传一个对象）","slug":"修改多个样式-在里面传一个对象","link":"#修改多个样式-在里面传一个对象","children":[]},{"level":2,"title":"获取样式(当有多个li标签时，不会返回全部的li标签，而是只返回获取到的第一个值)","slug":"获取样式-当有多个li标签时-不会返回全部的li标签-而是只返回获取到的第一个值","link":"#获取样式-当有多个li标签时-不会返回全部的li标签-而是只返回获取到的第一个值","children":[]},{"level":2,"title":"添加类","slug":"添加类","link":"#添加类","children":[]},{"level":2,"title":"移除类","slug":"移除类","link":"#移除类","children":[]},{"level":2,"title":"判断类","slug":"判断类","link":"#判断类","children":[]},{"level":2,"title":"切换类(判断是否有该类，有就删除，没有就添加)","slug":"切换类-判断是否有该类-有就删除-没有就添加","link":"#切换类-判断是否有该类-有就删除-没有就添加","children":[]},{"level":2,"title":"属性操作attr","slug":"属性操作attr","link":"#属性操作attr","children":[]},{"level":2,"title":"阻止a标签的默认跳转","slug":"阻止a标签的默认跳转","link":"#阻止a标签的默认跳转","children":[]},{"level":2,"title":"为什么jquery不报错","slug":"为什么jquery不报错","link":"#为什么jquery不报错","children":[]},{"level":2,"title":"动画效果","slug":"动画效果","link":"#动画效果","children":[{"level":3,"title":"显示隐藏","slug":"显示隐藏","link":"#显示隐藏","children":[]},{"level":3,"title":"滑入滑出（上下）","slug":"滑入滑出-上下","link":"#滑入滑出-上下","children":[]},{"level":3,"title":"淡入淡出","slug":"淡入淡出","link":"#淡入淡出","children":[]},{"level":3,"title":"自定义动画animate","slug":"自定义动画animate","link":"#自定义动画animate","children":[]}]},{"level":2,"title":"动画不停止bug","slug":"动画不停止bug","link":"#动画不停止bug","children":[]},{"level":2,"title":"当字符串中需要传参时，","slug":"当字符串中需要传参时","link":"#当字符串中需要传参时","children":[]},{"level":2,"title":"音乐标签auto","slug":"音乐标签auto","link":"#音乐标签auto","children":[]},{"level":2,"title":"视频标签video","slug":"视频标签video","link":"#视频标签video","children":[]},{"level":2,"title":"添加节点 append","slug":"添加节点-append","link":"#添加节点-append","children":[]},{"level":2,"title":"清除一个节点中的内容","slug":"清除一个节点中的内容","link":"#清除一个节点中的内容","children":[]},{"level":2,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]},{"level":2,"title":"复制节点","slug":"复制节点","link":"#复制节点","children":[]},{"level":2,"title":"val 和 text","slug":"val-和-text","link":"#val-和-text","children":[]},{"level":2,"title":"width  height：获取元素的宽高","slug":"width-height-获取元素的宽高","link":"#width-height-获取元素的宽高","children":[]},{"level":2,"title":"获取可视区域的宽高","slug":"获取可视区域的宽高","link":"#获取可视区域的宽高","children":[]},{"level":2,"title":"scroll事件","slug":"scroll事件","link":"#scroll事件","children":[]},{"level":2,"title":"offset()：返回相对于页面的位置，返回的是对象","slug":"offset-返回相对于页面的位置-返回的是对象","link":"#offset-返回相对于页面的位置-返回的是对象","children":[]},{"level":2,"title":"注册事件会出现的问题：当有元素在页面加载完成之后创建的时候，就难以给该元素注册事件","slug":"注册事件会出现的问题-当有元素在页面加载完成之后创建的时候-就难以给该元素注册事件","link":"#注册事件会出现的问题-当有元素在页面加载完成之后创建的时候-就难以给该元素注册事件","children":[]},{"level":2,"title":"on(events,selector,data,handle)：事件绑定","slug":"on-events-selector-data-handle-事件绑定","link":"#on-events-selector-data-handle-事件绑定","children":[]},{"level":2,"title":"off：解绑事件","slug":"off-解绑事件","link":"#off-解绑事件","children":[]},{"level":2,"title":"trigger：触发事件","slug":"trigger-触发事件","link":"#trigger-触发事件","children":[]},{"level":2,"title":"on方法中的data参数使用","slug":"on方法中的data参数使用","link":"#on方法中的data参数使用","children":[]},{"level":2,"title":"阻止浏览器默认行为","slug":"阻止浏览器默认行为","link":"#阻止浏览器默认行为","children":[]},{"level":2,"title":"阻止冒泡","slug":"阻止冒泡","link":"#阻止冒泡","children":[]},{"level":2,"title":"即阻止浏览器默认行为，也阻止事件冒泡","slug":"即阻止浏览器默认行为-也阻止事件冒泡","link":"#即阻止浏览器默认行为-也阻止事件冒泡","children":[]},{"level":2,"title":"链式编程并不一定能一直链式下去：五星评论案例","slug":"链式编程并不一定能一直链式下去-五星评论案例","link":"#链式编程并不一定能一直链式下去-五星评论案例","children":[]},{"level":2,"title":"each()方法：替代for遍历","slug":"each-方法-替代for遍历","link":"#each-方法-替代for遍历","children":[]},{"level":2,"title":"$冲突问题解决","slug":"冲突问题解决","link":"#冲突问题解决","children":[]},{"level":2,"title":"图片懒加载","slug":"图片懒加载","link":"#图片懒加载","children":[]},{"level":2,"title":"jQuery插件","slug":"jquery插件","link":"#jquery插件","children":[]}],"git":{"createdTime":1680447701000,"updatedTime":1680447701000,"contributors":[{"name":"WXL570CN","email":"wxl570cn@163.com","commits":1}]},"filePathRelative":"blogs/beginner-notes/Notes-JQuery-learning-01.md"}');export{l as data};
