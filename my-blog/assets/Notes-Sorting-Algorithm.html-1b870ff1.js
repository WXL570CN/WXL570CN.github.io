import{_ as e,p as a,q as r,Y as o}from"./framework-e1bed10d.js";const t={},h=o('<h1 id="「初学笔记」排序算法" tabindex="-1"><a class="header-anchor" href="#「初学笔记」排序算法" aria-hidden="true">#</a> 「初学笔记」排序算法</h1><h2 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h2><p>每次遍历列表，都得到一个最大的数，这就是冒泡。</p><blockquote><p>冒泡排序算法的主要时间消耗是比较次数。<br> 当i = 1时，比较次数为N - 1；<br> 当i = 2时，比较次数为N - 1；<br> 以此类推。<br> 总共比较次数为(N - 1) + (N - 2) + ... + 2 + 1  = N(N - 1)/2<br> 故冒泡排序算法的时间复杂度为 O(N^{2})。</p></blockquote><h2 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h2><p>插入排序的基本操作就是将一个数据插入到已经排好序的有序数据中，从而得到一个新的、个数加一的有序数据。</p><blockquote><p>​ 在最理想的情况下（列表已排好序状态），while循环仅仅需要一次比较，故总运行时间为线性；<br> 在最差的情况下（列表为逆序状态），此时内循环指令循环次数为：1+2+...+N-1=N(N-1)/2，<br> 故插入排序算法的时间复杂度为 O(N^{2})。</p></blockquote><h2 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h2><p>将一个列表对半分成左右两个子列表，再分别对左右子列表继续对半分，不断对半分，直到分成左右子列表各一个元素时结束，这时每个子列表都是有序的（一个元素当然有序），再对左右两个有序列表合并成一个有序的列表。这是一个递归过程。</p><blockquote><p>​对于长度为N的列表，归并排序算法将列表分开成子列表一共要步。<br> 每步都是合并有序列表的过程，时间复杂度可以记为 O(log_{2}N)。故归并排序算法的时间复杂度为。其效率是比较高的。</p></blockquote><h2 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h2><p>不断对一组数据进行左右数据分割，使左边的数据全部小于右边的数据。</p><blockquote><p>​快速排序最坏情况下，每次划分选区的基准都是当前无序列表中关键字最小（最大）的记录，时间复杂度为 O(N^{2})。<br> 平均情况下，其时间复杂度为 O(Nlog_{2}N)。</p></blockquote><p>​</p>',14),i=[h];function c(d,n){return a(),r("div",null,i)}const s=e(t,[["render",c],["__file","Notes-Sorting-Algorithm.html.vue"]]);export{s as default};
