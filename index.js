import { YellowBox, AppRegistry } from 'react-native'
import App from './App'

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger',
  '',
])

AppRegistry.registerComponent('myReactNativeApp', () => App)
