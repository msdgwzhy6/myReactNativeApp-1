import { YellowBox, AppRegistry } from 'react-native'
// import TeasetApp from './App-teaset'
import AntdApp from './App-antd'

// YellowBox
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger',
])

AppRegistry.registerComponent('myReactNativeApp', () => AntdApp)
