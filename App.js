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
import Face from './views/face++/Face'
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
import SearchInput from './views/teaset/SearchInput'
import Select from './views/teaset/Select'
import Stepper from './views/teaset/Stepper'
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
