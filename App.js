import React from 'react'
import { Theme } from 'youngjuning-teaset'
import Icon from 'react-native-vector-icons/FontAwesome'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
// Home
import Home from './views/Home'
import ArticleList from './views/ArticleList'
import Login from './views/Login'
import HeaderButtons from './views/HeaderButtons'
// AntDMobileRN
import AntDMobileRN from './views/AntDMobileRN'
import AntDDatePicker from './views/AntDMobileRN/DatePicker'
// Teaset
import Teaset from './views/Teaset'
import ActionPopover from './views/teaset/ActionPopover'
import ActionSheet from './views/teaset/ActionSheet'
import AlbumView from './views/teaset/AlbumView'
import Badge from './views/teaset/Badge'
import Carousel from './views/teaset/Carousel'
import Drawer from './views/teaset/Drawer'
import Checkbox from './views/teaset/CheckBox'
import ListRow from './views/teaset/ListRow'
import Menu from './views/teaset/Menu'
import Popover from './views/teaset/Popover'
import PullPicker from './views/teaset/PullPicker'
import PopoverPicker from './views/teaset/PopoverPicker'
import Projector from './views/teaset/Projector'
import SearchInput from './views/teaset/SearchInput'
import Select from './views/teaset/Select'
import Stepper from './views/teaset/Stepper'
import TabView from './views/teaset/TabView'
import Wheel from './views/teaset/Wheel'
// Echarts
import Echarts from './views/Echarts'
import EchartsBar from './views/Echarts/Bar'
import SECharts from './views/Echarts/SEcharts'

Theme.set(Theme.themes.poetry)

const HomeStack = createStackNavigator(
  {
    Home,
    Login,
    HeaderButtons,
    ArticleList,
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
const AntDMobileRNStack = createStackNavigator(
  {
    AntDMobileRN,
    AntDDatePicker,
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
const TeasetStack = createStackNavigator(
  {
    Teaset, ActionPopover, ActionSheet, AlbumView, Badge, Carousel, Drawer, Checkbox, ListRow, Menu, Popover, PullPicker, PopoverPicker, Projector, SearchInput, Select, Stepper, TabView, Wheel,
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
const EchartsStack = createStackNavigator(
  {
    SECharts,
    EchartsBar,
    Echarts,
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
export default createBottomTabNavigator(
  {
    Home: HomeStack,
    AntDMobile: AntDMobileRNStack,
    Teaset: TeasetStack,
    Echarts: EchartsStack,
  },
  {
    initialRouteName: 'Echarts',
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
        } else if (routeName === 'Echarts') {
          iconName = 'area-chart'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)
