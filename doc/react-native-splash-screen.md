A splash screen API for react-native which can programatically hide and show the splash screen. Works on iOS and Android.

## 一、安装

```bash
$ yarn add react-native-splash-screen
```

## 二、自动链接

> 如果自动配置失败，请参考该库的文档

```bash
$ react-native link react-native-splash-screen
# or
rnpm link react-native-splash-screen
```

## 三、隐藏启动屏

配置react-native部分，在你的首页导入 `react-native-splash-screen`，在`componentDidMount`中执行hide隐藏启动屏（当然这不是必须的，按照你的需要在适当的时候隐藏它就行）：

```js
import SplashScreen from 'react-native-splash-screen'
...
componentDidMount() {
  SplashScreen.hide() // 隐藏启动屏
}
...
```

## 四、配置启动图

### Android

1. 打开 `android/app/src/main/java/com/.../MainActivity.java`  按照下图1，2，3步骤添加启动屏包以及方法：

![](https://pic2.zhimg.com/80/v2-016217108625bcc11a7fb1fc4dcd40ad_hd.jpg)

2. 在 `android/app/src/mian/res` 目录下创建 layout 文件夹，并在创建的 layout 文件夹中创建 `launch_screen.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:orientation="vertical"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:background="@drawable/launch_screen">
</LinearLayout>
```

3. 在 `android/app/src/mian/res` 目录下创建 `drawable-xhdpi` 文件夹，并添加名为 `launch_screen.png` 的图片（其实你要想适配的更全面可以像 `mipmap` 一样添加不同分辨率的图片）

![](https://pic2.zhimg.com/80/v2-fe79f566bf8988667ad047f2fd59aa78_hd.jpg)

4. 新建 `app/src/main/res/values/colors.xml` 并写入下面的内容

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <color name="primary_dark">#000000</color>
</resources>
```

5. 如果你想要启动屏变得透明，按照下面配置

打开 `android/app/src/main/res/values/styles.xml` 并添加 `<item name="android:windowIsTranslucent">true</item>`：

```xml
<resources>
  <!-- Base application theme. -->
  <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
    <!-- Customize your theme here. -->
    <!--设置透明背景-->
    <item name="android:windowIsTranslucent">true</item>
  </style>
</resources>
```

6. 【可选】如果你想自定义启动屏显示时的状态栏颜色，按照下面的配置

创建 `android/app/src/main/res/values/colors.xml` 并添加：

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <color name="status_bar_color"><!-- Colour of your status bar here --></color>
</resources>
```

为这个颜色在 `android/app/src/main/res/values/styles.xml` 中创建样式定义

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <style name="SplashScreenTheme" parent="SplashScreen_SplashTheme">
    <item name="colorPrimaryDark">@color/status_bar_color</item>
  </style>
</resources>
```

Change your `show` method to include your custom style:

```js
SplashScreen.show(this, R.style.SplashScreenTheme)
```

## 构建失败解决办法

1. [Execution failed for task ':app:processDebugResources'](http://t.cn/RrIaWii)

## 参考

- [react-native-splash-screen集成实践（ios & android）](https://zhuanlan.zhihu.com/p/29495955)
