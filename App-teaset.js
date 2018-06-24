import React from 'react'
import { Theme } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import AV from 'leancloud-storage/live-query'
import { Leancloud } from './assets/Dictionary'
// Teaset
import Teaset from './views/Teaset'
import tLogin from './views/Teaset/Login'
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

// 初始化leancloud
AV.init({
  appId: Leancloud.APP_ID,
  appKey: Leancloud.APP_KEY,
})
// 设置teaset主题
Theme.set(Theme.themes.poetry)

// Teaset页面栈
const TeasetStack = createStackNavigator(
  {
    Teaset, tLogin, ActionPopover, ActionSheet, AlbumView, Badge, Carousel, Drawer, Checkbox, ListRow, Menu, Popover, PullPicker, PopoverPicker, SearchInput, Select, Stepper,
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

// 指定页面不显示header
const Stacks = [TeasetStack]
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

// 构建 BottomTabNavigator 并导出
export default createBottomTabNavigator(
  {
    Teaset: TeasetStack,
  },
  {
    initialRouteName: 'Teaset',
    tabBarOptions: {
      activeTintColor: Theme.primaryColor ? Theme.primaryColor : 'tomato',
      inactiveTintColor: 'gray',
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Teaset') {
          iconName = 'thumbs-up'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
  },
)
