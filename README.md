# myReactNativeApp

## 一、集成 LeanCloud

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

// AV.setProduction(false) // 调用预备环境
```

### 测试代码

> 代码来自官方文档，测试完请删除

```js
let TestObject = AV.Object.extend('TestObject')
let testObject = new TestObject()
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!')
})
```

## 集成 teaset

### 安装

```bash
$ yarn add teaset
```

### 使用

```js
import {
  Input,
  Button,
  Toast,
  NavigationBar,
  Theme,
} from 'teaset'
```

## 集成 react-navigation

### 安装

```bash
yarn add react-navigation
```

## 插件

- **native-echarts**：基于 React Native 和 Echarts 的图表插件
- **react-native-keyboard-aware-scroll-view**：解决react-native软键盘弹出挡住输入框的问题
- **react-navigation-header-buttons**：轻松渲染头部按钮的 react-navigation 扩展

## 资源

### 学习资料

- [React Native 中文文档](http://t.cn/RHHw6sN)
- [React Native 英文网](http://t.cn/RAyxebe)
- [React Navigation 中文网](http://t.cn/RBfba1a)
- [react-native-express](https://github.com/dabbott/react-native-express)

### 第三方组件

- [js.coach](https://js.coach/)：Search for components,generator and other packges
- rilyu/teaset[![GitHub stars](https://img.shields.io/github/stars/rilyu/teaset.svg?style=social&label=Stars)](https://github.com/rilyu/teaset)：一个RactNative UI 库，提供 20+ 纯JS(ES6)组件，专注于内容展示和行为控制
- react-navigation/react-navigation[![GitHub stars](https://img.shields.io/github/stars/react-navigation/react-navigation.svg?style=social&label=Stars)](https://github.com/react-navigation/react-navigation)：Routing and navigation for your React Native apps
- [LeanCloud React Native](https://goo.gl/t5AgtV)
