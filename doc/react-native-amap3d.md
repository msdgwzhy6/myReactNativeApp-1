react-native 高德地图组件，使用最新 3D SDK，支持 Android + iOS

_注意：RN v0.53+ 存在一些 bug（主要影响 iOS 自定义 View），建议使用 RN v0.52。_

# 安装

```bash
$ yarn add react-native-amap3d
```

# 配置

## Android

```bash
$ react-native link react-native-amap3d
```

# 添加高德 Key

1. [获取高德 Key](http://t.cn/RBD4GFd)
2. 编辑 Android 项目的 `AndroidManifest.xml`（一般在 `android\app\src\main\AndroidManifest.xml`），添加如下代码：

```xml
<application>
  <meta-data
    android:name="com.amap.api.v2.apikey"
    android:value="你的高德 Key" />
</application>
```

# 用法

## 导入地图模块

```js
import { MapView } from 'react-native-amap3d'
```
