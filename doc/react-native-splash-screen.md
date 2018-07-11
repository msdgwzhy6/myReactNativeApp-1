## 一、安装react-native-splash-screen

```bash
$ yarn add react-native-splash-screen
```

## 二、自动链接

> 如果自动配置失败，请参考该库的文档 http://t.cn/RrYg8Qv

```bash
$ react-native link react-native-splash-screen
```

## 三、隐藏启动屏

在你的首页导入 `react-native-splash-screen`，在`componentDidMount`中执行hide隐藏启动屏（当然这不是必须的，按照你的需要在适当的时候隐藏它就行）：

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

1. 打开 **android/app/src/main/java/com/.../MainActivity.java**  按照下图1，2，3步骤添加启动屏包以及方法：

```js
package com.myreactnativeapp;

import android.os.Bundle; // 1. Bundle
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreenReactPackage; // 2. 导入启动包

public class MainActivity extends ReactActivity {

  /**
  * Returns the name of the main component registered from JavaScript.
  * This is used to schedule rendering of the component.
  */
  @Override
  protected String getMainComponentName() {
    return "myReactNativeApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) { // 3. 显示启动方式
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
}
```

2. 在 **android/app/src/mian/res** 目录下创建 **layout** 文件夹，并在创建的 **layout** 文件夹中创建 `launch_screen.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:orientation="vertical"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:background="@drawable/launch_screen">
</LinearLayout>
```

3. 定制你的 **lanch_screen.png** 并且把它放置在一个适当的 **drawable** 文件夹中

4. 添加 `primary_dark` in **app/src/main/res/values/colors.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <color name="primary_dark">#000000</color>
</resources>
```

5. 打开 **android/app/src/main/res/values/styles.xml** 并且添加 `<item name="android:windowIsTranslucent">true</item>`：

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

### ios

参考：https://github.com/crazycodeboy/react-native-splash-screen#readme


# 链接

- https://zhuanlan.zhihu.com/p/29495955
