# Issues
create-react-app与antd-mobile使用问题

### 1. 引入antd、antd-mobile样式错误 

// Module not found: Error: Cannot resolve module 'antd-mobile/lib/button/style/css in ...
```javaScript
// 设置 webpack 的 resolve
resolve: {
  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')], // 可以省略这句话
      extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    }
// 使用 babel-plugin-import 插件支持组件按需加载，设置如下：
// .babelrc
{"plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]}
```

### 2.antd-mobile Icon不显示
[Icon配置地址](https://mobile.ant.design/components/icon#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-(WEB-%E7%89%88))
- 一. 首先安装依赖：
```bash
npm install svg-sprite-loader@0.3.1 -D //antd-mobile暂时没有升级该模块，须指定版本
```

- 二. 本地icon库引入 webpack配置 
```JavaScript
const path = require('path');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite',
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
    ]
  }
};
```
