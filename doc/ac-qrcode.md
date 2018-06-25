最近在制作React-Native项目的时候，条码识别给我们整个项目带了不少麻烦，几款主流的条码识别组件都不是特别好用，用户体验比较差，比如二维码识别速度慢、扫描页面十分卡顿用等一系列问题，后来在网上无意间找到一个非常好用的二维码扫描组件——ac-qrcode，这个组件是基于 https://github.com/react-native-community/react-native-camera 这个库写的，同时也支持IOS，二维码识别速度十分快、同时界面流畅。

## 安装

```bash
//第一步
$ yarn add ac-qrcode

//第二步（react-native-camera 需要 link 后才能使用）
$ react-native link react-native-camera
```

> PS：如果 link 没有成功，会报错。如果没有自动 link，可以手动 link，手动link请参考 react-native-camera 文档

## 升级 gradle 到 3.1.0

> 我是用模版创建的项目，gradle版本比较低，但是 react-native-camera 使用的是 3.0 以上的，会报 [Gradle DSL method not found: 'google()'](https://github.com/react-native-community/react-native-camera/issues/1577) 的错误，官方给了修复该bug的方法：http://t.cn/RrIrHb5

## 引入proptype

不引入会报 [undefined is not an object ( evaluating 'react2.propTypes.oneOfTypes')](https://github.com/react-native-community/react-native-camera/issues/1005)，没错，依然是 react-native-camera 的问题。解决问题的方法：

![proptype](https://user-images.githubusercontent.com/13204332/41844125-d2f6195a-78a1-11e8-8969-8791d68adf2c.png)
