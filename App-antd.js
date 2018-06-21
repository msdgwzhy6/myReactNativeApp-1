import React from 'react'
import { Theme } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'
import AV from 'leancloud-storage/live-query'
import { Leancloud } from './assets/Dictionary'
// Home
import Home from './views/Home'
import ArticleList from './views/ArticleList'
import Login from './views/Login'
import HeaderButtons from './views/HeaderButtons'
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
// Charts
import echarts from './views/Charts/Echarts'
import secharts from './views/Charts/SEcharts'

Theme.set(Theme.themes.poetry)
// 初始化leancloud
AV.init({
  appId: Leancloud.APP_ID,
  appKey: Leancloud.APP_KEY,
})

const HomeStack = createStackNavigator(
  {
    Home,
    Login,
    HeaderButtons,
    ArticleList,
    Face,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.primaryColor,
      },
      headerTintColor: 'rgb(255,255,255)',
    },
  },
)
const AntDMobileRNStack = createStackNavigator(
  {
    AntDMobileRN,
    AntDDatePicker,
  },
  {
    initialRouteName: 'AntDMobileRN',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.primaryColor,
      },
      headerTintColor: 'rgb(255,255,255)',
    },
  },
)
const PluginsStack = createStackNavigator(
  {
    Plugins, ReactNativePicker, ReactNativeModalDatetimePicker, ReactNativeCalendars, ReactNativeAmap3d, GiftedChat,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.primaryColor,
      },
      headerTintColor: 'rgb(255,255,255)',
    },
  },
)
const ChartsStack = createMaterialTopTabNavigator(
  {
    echarts,
    secharts,
  },
  {
    initialRouteName: 'secharts',
    navigationOptions: {
      header: null,
    },
  },
)
const Stacks = [HomeStack, AntDMobileRNStack, PluginsStack]
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

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    AntDMobile: AntDMobileRNStack,
    Plugins: PluginsStack,
    Charts: ChartsStack,
  },
  {
    initialRouteName: 'AntDMobile',
    tabBarOptions: {
      activeTintColor: Theme.primaryColor ? Theme.primaryColor : 'tomato',
      inactiveTintColor: 'gray',
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'AntDMobile') {
          iconName = 'heart'
        } else if (routeName === 'Teaset') {
          iconName = 'thumbs-up'
        } else if (routeName === 'Plugins') {
          iconName = 'th-list'
        } else if (routeName === 'Charts') {
          iconName = 'area-chart'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)
