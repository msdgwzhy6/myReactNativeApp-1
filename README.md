## 快速体验

点击 [app-release.apk](https://github.com/youngjuning/myReactNativeApp/raw/master/assets/release/app-release.apk) 下载并安装到手机上即可。

## 构建命令

> 为了加快开发流程，我设置了npm 脚本来代替繁琐的命令行。如果使用 yarn，把 **npm** 换成 **yarn** 即可

### Android

> 5、6、7 需要用到 java jdk自带的工具，请参考 https://github.com/youngjuning/issue-blog/issues/92 正确配置你的java环境

1. `yarn debug`：等于 `react-native run-android` 命令
2. `yarn assembleRelease`：用于打包 Android apk
3. `yarn installRelease`：用于打包 Android apk 并立即安装到手机上
4. `yarn clean`：项目切换时可能需要执行以清理 gradle 构建缓存
5. `yarn keygen`：生成 Android key 的命令较长，执行这个快速生成
6. `yarn key-debug`：获取调试版本下的签名信息
7. `yarn key-release`：获取发布版本下的签名信息

### Ios

- `yarn debug-ios`：等于 `react-native run-ios` 命令

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
