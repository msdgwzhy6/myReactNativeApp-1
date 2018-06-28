## 安装

> https://github.com/jpush/aurora-imui
> 使用之前请升级你的项目的 Android Gradle 插件到 3.0.0 以上，请参考：https://github.com/youngjuning/issue-blog/issues/91，否则按照官方文档是很难配置成功的

```bash
$ yarn add aurora-imui-react-native
$ react-native link aurora-imui-react-native
```

如果 link 安卓失败，需要手动修改一下 `settings.gradle` 中的引用路径：

```js
include ':app', ':aurora-imui-react-native'
project(':aurora-imui-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/aurora-imui-react-native/ReactNative/android')
```

然后在 app 的 `build.gradle` 中引用：

```js
dependencies {
  implementation project(':aurora-imui-react-native')
}
```

## 安卓配置

引入 Package:

> MainApplication.java

```java
import cn.jiguang.imui.messagelist.ReactIMUIPackage;
...

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new ReactIMUIPackage()
  );
}
```

## 遇到的BUG（配置冲突）

1. **Task :app:processDebugManifest FAILED**

```
E:\react-native\myReactNativeApp\android\app\src\main\AndroidManifest.xml:19:7-34 Error:
  Attribute application@allowBackup value=(false) from AndroidManifest.xml:19:7-34
  is also present at [cn.jiguang.imui:messagelist:0.7.3] AndroidManifest.xml:12:9-35 value=(true).
  Suggestion: add 'tools:replace="android:allowBackup"' to <application> element at AndroidManifest.xml:15:5-35:19 to override.

See http://g.co/androidstudio/manifest-merger for more information about the manifest merger.
```

解决办法是在 **android\app\src\main\AndroidManifest.xml** 中配置：

```xml
<manifest
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools" // here
  package="com.myreactnativeapp">
...
<application
  tools:replace="android:allowBackup"
>
...
```

2. **D8: Cannot fit requested classes in a single dex file. Try supplying a main-dex list.**

```
The number of method references in a .dex file cannot exceed 64K.
  Learn how to resolve this issue at https://developer.android.com/tools/building/multidex.html
```

按照 [配置方法数超过 64K 的应用](https://developer.android.com/studio/build/multidex) 配置即可
