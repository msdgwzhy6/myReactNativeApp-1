import React from 'react'
import { Theme } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
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
// Charts
import Charts from './views/Charts'
import echarts from './views/Charts/Echarts'
import secharts from './views/Charts/SEcharts'

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
const ChartsStack = createStackNavigator(
  {
    Charts,
    echarts,
    secharts,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
)
const Stacks = [HomeStack, AntDMobileRNStack, TeasetStack]
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
    Charts: ChartsStack,
  },
  {
    initialRouteName: 'Home',
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
        } else if (routeName === 'Charts') {
          iconName = 'area-chart'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)
