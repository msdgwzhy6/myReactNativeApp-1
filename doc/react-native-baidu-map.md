> 百度地图 React Native 模块，支持 react native 0.40+

# 安装

```bash
$ yarn add react-native-baidu-map
```

# 导入

## Android

### `settings.gradle`

```gradle
include ':react-native-baidu-map'
project(':react-native-baidu-map').projectDir = new File(settingsDir, '../node_modules/react-native-baidu-map/android')
```

## `build.gradle`

```gradle
compile project(':react-native-baidu-map')
```

## MainApplication.java

```java
new BaiduMapPackage(getApplicationContext())
```

## AndroidMainifest.xml

```xml
<meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="xx"/>
```
