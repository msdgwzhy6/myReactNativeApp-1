# myReactNativeApp

## 资源

- [React Native 中文文档](http://t.cn/RHHw6sN)
- rilyu/teaset[![GitHub stars](https://img.shields.io/github/stars/rilyu/teaset.svg?style=social&label=Stars)](https://github.com/rilyu/teaset)：一个RactNative UI 库，提供 20+ 纯JS(ES6)组件，专注于内容展示和行为控制
- react-navigation/react-navigation[![GitHub stars](https://img.shields.io/github/stars/react-navigation/react-navigation.svg?style=social&label=Stars)](https://github.com/react-navigation/react-navigation)：Routing and navigation for your React Native apps
- [LeanCloud React Native](https://goo.gl/t5AgtV)

## 集成 LeanCloud

### 安装SDK

React Native 直接通过 npm 安装与引用 SDK：

```bash
# 存储服务（包括推送）
$ npm install leancloud-storage --save
```

然后在代码中通过 import 获得 SDK 的引用：

```js
import AV from 'leancloud-storage/live-query';
```

### 初始化 AV

```js
import AV from 'leancloud-storage/live-query';
const APP_ID = 'your APP_ID';
const APP_KEY = 'your APP_KEY';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
```
