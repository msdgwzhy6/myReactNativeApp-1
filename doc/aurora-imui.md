升级 Gradle

请参考 https://github.com/youngjuning/issue-blog/issues/91 先把Gradle升级到 3.1.0

安装 aurora-imui-react-native

    $ yarn add aurora-imui-react-native

自动link

    $ react-native link aurora-imui-react-native

手动link【可选】

如果自动link 安卓失败，你就只能选择手动link

1.修改一下 android/settings.gradle 中的引用路径：

    include ':app', ':aurora-imui-react-native'
    project(':aurora-imui-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/aurora-imui-react-native/ReactNative/android')

2. 在 android/app/build.gradle 中引用

    dependencies {
      compile project(':aurora-imui-react-native')
    }

3. 在 android/app/src/main/java/com/.../MainApplication.java 引入 Package

    import cn.jiguang.imui.messagelist.ReactIMUIPackage;
    ...

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new ReactIMUIPackage()
      );
    }

Android 配置

1. Android release(打包 Relaese apk)

需要添加混淆代码到 android/app/proguard-rules.pro 文件中：

    -keep class cn.jiguang.imui.** { *; }

2. 修复 Manifest Merge 冲突

    E:\react-native\myReactNativeApp\android\app\src\main\AndroidManifest.xml:19:7-34 Error:
      Attribute application@allowBackup value=(false) from AndroidManifest.xml:19:7-34
      is also present at [cn.jiguang.imui:messagelist:0.7.3] AndroidManifest.xml:12:9-35 value=(true).
      Suggestion: add 'tools:replace="android:allowBackup"' to <application> element at AndroidManifest.xml:15:5-35:19 to override.

    See http://g.co/androidstudio/manifest-merger for more information about the manifest merger.

打包的时候，会报以上的错误，大概意思是 android\app\src\main\AndroidManifest.xml 这个文件的 android:allowBackup 配置冲突了，解决办法是通过 tools:replace 来解决，参考了有关项目依赖包发生 Manifest Merge 冲突的详细解决方案：

    <manifest
      xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:tools="http://schemas.android.com/tools" // here
      package="com.myreactnativeapp">
    ...
    <application
      tools:replace="android:allowBackup"
    >
    ...

3. 修复 配置方法数超过 64K

    D8: Cannot fit requested classes in a single dex file. Try supplying a main-dex list.
    The number of method references in a .dex file cannot exceed 64K.
      Learn how to resolve this issue at https://developer.android.com/tools/building/multidex.html

如果您的 minSdkVersion 设置为 21 或更高值，您只需在模块级 build.gradle 文件中将 multiDexEnabled 设置为 true，如此处所示：

    android {
      defaultConfig {
        ...
        minSdkVersion 21
        targetSdkVersion 26
        multiDexEnabled true // here
      }
      ...
    }

iOS 配置

- 找到 PROJECT -> TARGETS -> General -> Embedded Binaries 然后添加 RCTAuroraIMUI.framework。
- 找到 PROJECT -> TARGETS -> Build Phases -> Target Dependencies 添加 RCTWebSocket。

可选配置

安装 react-native-fs

这里是简单的配置，详细的配置参考：https://github.com/itinance/react-native-fs

    $ yarn add react-native-fs
    $ react-native link react-native-fs

API

1. AuroraIMUIController：插入，更新，增加消息到 MessageList, 你需要使用 AuroraIMUIController (Native Module) 来发送事件到 Native。
2. MessageList
3. ChatInput
