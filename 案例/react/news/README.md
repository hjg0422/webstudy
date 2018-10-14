#本例基于慕课网的react教学视频的新闻系统 仅pc端完善 。
------------------------------------------------------
# 这里为less 和 antd 的适配做了修改。
 npm run eject 暴露所有内建的配置
1. 使用babel-plugin-import实现Antd按需加载，修改package.json，或者在项目根目录新建文件.babelrc写配置，注意是二选一。

npm install –save-dev babel-plugin-import

1）package.json

"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]
    ]
  },
2）.babelrc

{
   "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]
    ]
}
注意： 不要认为package.json里已有presets配置这里就不用写，这里的.babelrc会覆盖package.json里带有的babel配置，如果删除presets配置，会报错。
//注意 哦欸之完成后一九会报错， "style":true =》"style":"css" 可以解决。

引入Less
1）安装less-loader 和 less

npm install –save-dev less-loader less

2）修改config文件夹下的webpack.config.dev.js和webpack.config.prod.js文件(都需要修改)
查找 ：exclude
原本的 exclude: [/\.js$/, /\.html$/, /\.json$/],
修改为 exclude: [/\.html$/, /\.(js|jsx)$/, /\.(css|less)$/, /\.json$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],

查找：test: /.css$/
原本的 test: /\.css$/,
修改为 test: /\.(css|less)$/,

在这个test的下面找到use，添加loader

  use: [
    {...},
    {...},
    {
      loader: require.resolve('less-loader') // compiles Less to CSS
    }
  ],

  博文链接：https://blog.csdn.net/zhaoyu_m69/article/details/78800887
  修改错误链接：https://www.cnblogs.com/heihei-haha/p/9041093.html
