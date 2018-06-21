import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from './assets/Theme'
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import AV from 'leancloud-storage/live-query'
import { Leancloud } from './assets/Dictionary'
// Home
import Home from './views/Home'
import ArticleList from './views/ArticleList'
import Login from './views/Login'
import Face from './views/Face++/Face'
// AntDMobileRN
import AntDMobileRN from './views/AntDMobileRN'
import AntDDatePicker from './views/AntDMobileRN/DatePicker'
// Plugins
import ReactNativePicker from './views/Plugins/ReactNativePicker'
import Plugins from './views/Plugins'
import ReactNativeModalDatetimePicker from './views/Plugins/ReactNativeModalDatetimePicker'
import ReactNativeCalendars from './views/Plugins/ReactNativeCalendars'
import ReactNativeAmap3d from './views/Plugins/ReactNativeAmap3d'
import GiftedChat from './views/Plugins/GiftedChat'
// ReactNavigation
import Navigation from './views/Navigation'
import HeaderButtons from './views/ReactNavigation/HeaderButtons'
import Modal from './views/ReactNavigation/Modal'
// Charts
import echarts from './views/Charts/Echarts'
import secharts from './views/Charts/SEcharts'

// 初始化leancloud
AV.init({
  appId: Leancloud.APP_ID,
  appKey: Leancloud.APP_KEY,
})

// 首页页面栈
const HomeStack = createStackNavigator(
  {
    Home,
    Login,
    ArticleList,
    Face,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(255,255,255)',
      },
      headerTintColor: Theme.primaryColor,
    },
  },
)
// antd-mobile-rn 页面栈
const AntDMobileRNStack = createStackNavigator(
  {
    AntDMobileRN,
    AntDDatePicker,
  },
  {
    initialRouteName: 'AntDMobileRN',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(255,255,255)',
      },
      headerTintColor: Theme.primaryColor,
    },
  },
)
// 插件页面栈
const PluginsStack = createStackNavigator(
  {
    Plugins, ReactNativePicker, ReactNativeModalDatetimePicker, ReactNativeCalendars, ReactNativeAmap3d, GiftedChat,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(255,255,255)',
      },
      headerTintColor: Theme.primaryColor,
    },
  },
)
// 图表页面栈
const ChartsStack = createMaterialTopTabNavigator(
  {
    echarts,
    secharts,
  },
  {
    initialRouteName: 'secharts',
    tabBarOptions: {
      style: {
        backgroundColor: Theme.primaryColor,
      },
    },
    navigationOptions: {
      header: null,
    },
  },
)

// 打开全屏模式的页面栈
const NavigationStack = createStackNavigator(
  {
    Navigation,
    HeaderButtons,
    Modal,
  },
  {
    initialRouteName: 'Navigation',
    navigationOptions: {
      headerTitle: 'React Navigation',
      headerStyle: {
        backgroundColor: 'rgb(255,255,255)',
      },
      headerTintColor: Theme.primaryColor,
    },
  },
)

// 指定页面隐藏header
const Stacks = [HomeStack, AntDMobileRNStack, PluginsStack, NavigationStack]
Stacks.forEach((item) => {
  item.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
    return {
      tabBarVisible,
    }
  }
})

// 构建材料设计的底部导航
export default createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    AntDMobile: AntDMobileRNStack,
    Plugins: PluginsStack,
    Charts: ChartsStack,
    Navigation: NavigationStack,
  },
  {
    initialRouteName: 'Plugins',
    activeTintColor: Theme.primaryColor,
    inactiveTintColor: 'gray',
    barStyle: { backgroundColor: '#fff' },
    labeled: true,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'AntDMobile') {
          iconName = 'at'
        } else if (routeName === 'Teaset') {
          iconName = 'thumbs-up'
        } else if (routeName === 'Plugins') {
          iconName = 'th-list'
        } else if (routeName === 'Charts') {
          iconName = 'area-chart'
        } else if (routeName === 'Navigation') {
          iconName = 'rocket'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)
