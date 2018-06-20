> 百度地图 React Native 模块，支持 react native 0.40+

# 一、安装

```bash
$ yarn add react-native-baidu-map
```

# 二、导入

## Android

### 半自动

- `react-native link react-native-baidu-map`

*注意：请在项目根目录下执行这个命令*

- 配置 `MainApplication.java`

> 路径：`/android/app/src/main/java/com/myreactnativeapp/MainApplication.java`

找到 `new BaiduMapPackage()` 改成 `new BaiduMapPackage(getApplicationContext())`

- 配置 `AndroidMainifest.xml`

> 路径：`/android/app/src/main/AndroidMainifest.xml`

在 `aplication` 标签内添加 `<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="xx"/>`

*详细配置参考：http://t.cn/RBeePtc*

### 纯手动

- `settings.gradle`

> 路径：`/android/settings.gradle`

```js
include ':react-native-baidu-map'
project(':react-native-baidu-map').projectDir = new File(settingsDir, '../node_modules/react-native-baidu-map/android')
```

- `build.gradle`

> 路径：`/android/app/build.gradle`

```js
compile project(':react-native-baidu-map')
```

- MainApplication.java

> 路径：`/android/app/src/main/java/com/myreactnativeapp/MainApplication.java`

```js
import org.lovebing.reactnative.baidumap.BaiduMapPackage;
new BaiduMapPackage(getApplicationContext())
```

- AndroidMainifest.xml

> 路径：`/android/app/src/main/AndroidMainifest.xml`

```xml
<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="xx"/>
```
