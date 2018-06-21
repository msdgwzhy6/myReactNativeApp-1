import React from 'react'
import { Theme } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'
import AV from 'leancloud-storage/live-query'
import { Leancloud } from './assets/Const'
// Home
import Home from './views/Home'
import ArticleList from './views/ArticleList'
import Login from './views/Login'
import HeaderButtons from './views/HeaderButtons'
import Face from './views/Face++/Face'
// AntDMobileRN
import AntDMobileRN from './views/AntDMobileRN'
import AntDDatePicker from './views/AntDMobileRN/DatePicker'
// Teaset
import Teaset from './views/Teaset'
import ActionPopover from './views/Teaset/ActionPopover'
import ActionSheet from './views/Teaset/ActionSheet'
import AlbumView from './views/Teaset/AlbumView'
import Badge from './views/Teaset/Badge'
import Carousel from './views/Teaset/Carousel'
import Drawer from './views/Teaset/Drawer'
import Checkbox from './views/Teaset/CheckBox'
import ListRow from './views/Teaset/ListRow'
import Menu from './views/Teaset/Menu'
import Popover from './views/Teaset/Popover'
import PullPicker from './views/Teaset/PullPicker'
import PopoverPicker from './views/Teaset/PopoverPicker'
import SearchInput from './views/Teaset/SearchInput'
import Select from './views/Teaset/Select'
import Stepper from './views/Teaset/Stepper'
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

// 初始化leancloud
AV.init({
  appId: Leancloud.APP_ID,
  appKey: Leancloud.APP_KEY,
})
// 设置teaset主题
Theme.set(Theme.themes.poetry)

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
const TeasetStack = createStackNavigator(
  {
    Teaset, ActionPopover, ActionSheet, AlbumView, Badge, Carousel, Drawer, Checkbox, ListRow, Menu, Popover, PullPicker, PopoverPicker, SearchInput, Select, Stepper,
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
const Stacks = [HomeStack, AntDMobileRNStack, TeasetStack, PluginsStack, ChartsStack]
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
    Teaset: TeasetStack,
    Plugins: PluginsStack,
    Charts: ChartsStack,
  },
  {
    initialRouteName: 'Plugins',
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
