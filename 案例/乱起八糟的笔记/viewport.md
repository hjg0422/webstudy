看了一遍文档 ， 概念掌握一般。
分辨率 ：横纵2个方向的像素点的数量，常见取值 480X800 ，320X480
#dpi  一英寸有多少像素点 /像素密度/


##使用标签：<meta
				name="viewport"
				width = "device-width" <!-- 可以是数值+px  -->
				height = "device-height" <!-- 可以是数值+px 一般用的不多 -->
				initial-scale = 1.0 <!-- 初始化放大比例 范围[1.0-10.0] -->
				minimum-scale = 1.0 <!-- 最小缩放比例 范围同上 -->
				maximum-scale = 1.0 <!-- 最大的缩放比例 范围同上 -->
				user-scalable = yes/no <!-- 是否允许用户缩放 -->
			>
			注意：
			-viewport 只对手机浏览器有效，对PC无效
			-当缩放比例为1时，dip宽度 = css像素宽度 = 理想是口宽度 = 布局视口宽度
			-单独设置initial-scal 和 width 都会有兼容性问题，要同时设置这两个属性
			-user-scalable = no 对安卓的chrome浏览器中无效，可强制缩放
