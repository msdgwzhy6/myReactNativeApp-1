import { AppRegistry } from 'react-native';
import App from './App';

import AV from 'leancloud-storage/live-query';
const APP_ID = 'qY4TYxDE1JFCnqfxgFsQ6Duv-gzGzoHsz';
const APP_KEY = '04NSJrvc2cl82hXUaioeFANx';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('myReactNativeApp', () => App);
