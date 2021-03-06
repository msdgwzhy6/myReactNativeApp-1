# 前言

我在看 **React Navigation** 的[标题栏按钮](http://t.cn/RBXrFPd)时，文档告诉我们要用 **react-navigation-header-buttons** 管理标题栏按钮，推荐的这个用起来确实很良心，包括它可选依赖的 **react-native-vector-icons** 也是 react-native 首先图标插件。

但是 我用 yarn 装了 **react-native-vector-icons** ，也按照网上说的配置了各种文件，但是不知道为什么图标老是显示问号。[官方issue](http://t.cn/RBXg6Ly) 告诉我们：

![](https://i.loli.net/2018/06/14/5b21df89a2351.png)

好吧，这不是 **react-navigation-header-buttons** 的锅，而是我们可能需要对 **react-native-vector-icons** 进行配置。

# 安装

1. 执行 `yarn add react-native-vector-icons`
2. 每一个平台有每一个平台的配置方式(iOS/Android/Windows) ，我这里只说明一下 Android 的，详细的请去官方查看

# **react-native-vector-icons** 正确打开姿势

## ios

### 1、手动管理

如果你想要使用任何一个附带的字体图标，你需要添加下面的字体图标到你的 Xcode 项目中：

- Browse to `node_modules/react-native-vector-icons` and drag the folder `Fonts` (or just the ones you want) to your project in Xcode. **Make sure your app is checked under "Add to targets" and that "Create groups" is checked if you add the whole folder**.
- Edit `Info.plist` and add a property called **Fonts provided by application** (or `UIAppFonts` if Xcode won't autocomplete/not using Xcode) and type in the files you just added. It will look something like this:

![](http://t.cn/RB131uT)

> 注意：在添加新的字体之后，你需要重新编译你的项目。并且确保它们在 **Build Phases** 出现在 **Copy Bundle Resources**

### 2、使用 `react-native link`

```bash
$ react-native link react-native-vector-icons
```

> 注意： 一些用户使用这个方法的时候会有麻烦，如果你也遇到了同样的问题，那么尝试使用其他方法

## Android

### 1、使用Gradle管理（强烈推荐）

编辑 `android/app/build.gradle` ( NOT android/build.gradle ) 并添加下面的代码:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

定制你想要复制的字体文件，请使用下面的配置代替：

```gradle
project.ext.vectoricons = [
  iconFontNames: [ 'MaterialIcons.ttf', 'Fontawesome.ttf' ] // 你想要复制的字体文件的名字
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

- 所有字体一览

![](https://i.loli.net/2018/06/28/5b34aaafed89c.png)

### 2、手动管理

复制 Fonts folder 文件夹下的内容 到 `android/app/src/main/assets/fonts` (注意是小写的文件夹名)
