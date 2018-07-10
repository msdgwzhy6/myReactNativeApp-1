import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import AV from 'leancloud-storage/live-query'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from './assets/Theme'
import { Leancloud } from './assets/Dictionary'
// Home
import Home from './views/Home'
import ArticleList from './views/ArticleList'
import Login from './views/Login'
import Face from './views/Face++/Face'
// AntDMobileRN
import AntDMobileRN from './views/AntDMobileRN'
import Flex from './views/AntDMobileRN/Flex'
import WhingBlank from './views/AntDMobileRN/WingBlank'
import WhiteSpace from './views/AntDMobileRN/WhiteSpace'
import Drawer from './views/AntDMobileRN/Drawer'
import Popover from './views/AntDMobileRN/Popover'
import Pagination from './views/AntDMobileRN/Pagination'
import SegmentedControl from './views/AntDMobileRN/SegmentedControl'
import Button from './views/AntDMobileRN/Button'
import Checkbox from './views/AntDMobileRN/Checkbox'
import DatePicker from './views/AntDMobileRN/DatePicker'
import DatePickerView from './views/AntDMobileRN/DatePickerView'
import InputItem from './views/AntDMobileRN/InputItem'
import ImagePicker from './views/AntDMobileRN/ImagePicker'
import Picker from './views/AntDMobileRN/Picker'
import PickerView from './views/AntDMobileRN/PickerView'
import Radio from './views/AntDMobileRN/Radio'
import SearchBar from './views/AntDMobileRN/SearchBar'
import Slider from './views/AntDMobileRN/Slider'
import Stepper from './views/AntDMobileRN/Stepper'
import Switch from './views/AntDMobileRN/Switch'
import TextareaItem from './views/AntDMobileRN/TextAreaItem'
// Plugins
import ReactNativePicker from './views/Plugins/ReactNativePicker'
import Plugins from './views/Plugins'
import ReactNativeModalDatetimePicker from './views/Plugins/ReactNativeModalDatetimePicker'
import ReactNativeCalendars from './views/Plugins/ReactNativeCalendars'
import ReactNativeAmap3d from './views/Plugins/ReactNativeAmap3d'
import GiftedChat from './views/Plugins/GiftedChat'
import AuroraImui from './views/Plugins/AuroraImui'
import ReactNativeSwiper from './views/Plugins/ReactNativeSwiper'
import echarts from './views/Plugins/Charts/Echarts'
import secharts from './views/Plugins/Charts/SEcharts'
import HeaderButtons from './views/Plugins/ReactNavigation/HeaderButtons'
import Modal from './views/Plugins/ReactNavigation/Modal'
import MaterialTopTabNavigator from './views/Plugins/ReactNavigation/MaterialTopTabNavigator'
import acQrcode from './views/Plugins/Qrcode/acQrcode'
// Teaset
import Teaset from './views/Teaset'
import tLogin from './views/Teaset/Login'
import ActionPopover from './views/Teaset/ActionPopover'
import ActionSheet from './views/Teaset/ActionSheet'
import AlbumView from './views/Teaset/AlbumView'
import Badge from './views/Teaset/Badge'
import Carousel from './views/Teaset/Carousel'
import tDrawer from './views/Teaset/Drawer'
import tCheckbox from './views/Teaset/CheckBox'
import ListRow from './views/Teaset/ListRow'
import Menu from './views/Teaset/Menu'
import tPopover from './views/Teaset/Popover'
import PullPicker from './views/Teaset/PullPicker'
import PopoverPicker from './views/Teaset/PopoverPicker'
import SearchInput from './views/Teaset/SearchInput'
import Select from './views/Teaset/Select'
import tStepper from './views/Teaset/Stepper'
// 初始化leancloud
AV.init({
  appId: Leancloud.APP_ID,
  appKey: Leancloud.APP_KEY,
})

// 首页页面栈
const HomeStack = createStackNavigator(
  {
    Home, Login, ArticleList, Face,
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
// antd-mobile-rn 页面栈
const AntDMobileRNStack = createStackNavigator(
  {
    AntDMobileRN, Flex, WhingBlank, WhiteSpace, Drawer, Popover, Pagination, SegmentedControl, Button, Checkbox, DatePicker, DatePickerView, InputItem, ImagePicker, Picker, PickerView, Radio, SearchBar, Slider, tStepper, Switch, TextareaItem,
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
// 插件页面栈
const PluginsStack = createStackNavigator(
  {
    Plugins, ReactNativePicker, ReactNativeModalDatetimePicker, ReactNativeCalendars, ReactNativeAmap3d, GiftedChat, AuroraImui, ReactNativeSwiper, HeaderButtons, Modal, MaterialTopTabNavigator, echarts, secharts, acQrcode,
  },
  {
    initialRouteName: 'Plugins',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.primaryColor,
      },
      headerTintColor: 'rgb(255,255,255)',
    },
  },
)
// Teaset页面栈
const TeasetStack = createStackNavigator(
  {
    Teaset, tLogin, ActionPopover, ActionSheet, AlbumView, Badge, Carousel, tDrawer, tCheckbox, ListRow, Menu, tPopover, PullPicker, PopoverPicker, SearchInput, Select, Stepper,
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
// 指定页面隐藏tabbar
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

// 构建材料设计的底部导航
export default createBottomTabNavigator(
  {
    Home: HomeStack,
    AntDMobile: AntDMobileRNStack,
    Teaset: TeasetStack,
    Plugins: PluginsStack,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: Theme.primaryColor,
      inactiveTintColor: 'gray',
    },
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
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)
