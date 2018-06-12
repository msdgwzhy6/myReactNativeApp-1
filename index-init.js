import { AppRegistry } from 'react-native'
// import App from './App'
import Login from './views/Login'
import { Theme } from 'teaset'
import AV from 'leancloud-storage/live-query'

// 设置teast主题
Theme.set(Theme.themes.sishu)

// 初始化leancloud
const APP_ID = 'your APP_ID'
const APP_KEY = 'your APP_KEY'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
})

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('myReactNativeApp', () => Login)
