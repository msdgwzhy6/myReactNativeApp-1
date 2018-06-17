## 安装

```bash
$ yarn add antd-mobile-rn
```

## 按需加载

下面两种方式都可以只加载用到的组件，选择其中一种方式即可。

- 使用 **babel-plugin-import**（推荐）。

```babel
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { libraryName: "antd-mobile-rn" }] // 与 Web 平台的区别是不需要设置 style
  ]
}
```

然后改变从 **antd-mobile-rn** 引入模块方式即可。

```js
import { Button } from 'antd-mobile-rn'
```

> 说明：有人反映通过 `react-native init` 创建的项目在使用时可能会报 `Unable to resolve module react-dom` 的错误 ，此时不妨安装 **babel-plugin-module-resolver** 试试~

- 手动引入

```js
import Button from 'antd-mobile-rn/lib/button'
```
