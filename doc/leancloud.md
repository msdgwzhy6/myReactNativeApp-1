# 安装SDK

React Native 直接通过 npm 安装与引用 SDK：

```bash
# 存储服务（包括推送）
$ npm install leancloud-storage --save
```

然后在代码中通过 import 获得 SDK 的引用：

```js
import AV from 'leancloud-storage/live-query';
```

# 初始化 AV

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

# 测试代码

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
