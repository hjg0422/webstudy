标准模式和怪异模式下 box-sizing 的区别
		标准模式下：Element width = width + padding + border
		怪异模式下：Element width = width
外边距合并：表现在两者外边距择最大值渲染。注意点:
	外边距合并只出现在块级元素上； 
　  浮动元素不会和相邻的元素产生外边距合并； 
　  绝对定位元素不会和相邻的元素产生外边距合并； 
　  内联块级元素间不会产生外边距合并； 
　  根元素间不会不会产生外边距合并（如html与body间）； 
　  设置了属性overflow且值不为visible的块级元素不会与它的子元素发生外边距合并；
iframe:https://blog.csdn.net/zdwzzu2006/article/details/6047632
	window.top/window.self/window.parent