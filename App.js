import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Login from './views/Login'
import Home from './views/Home'
import ArticleList from './views/ArticleList'
import HeaderButtons from './views/HeaderButtons'
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
import EchartsBar from './views/echarts/Bar'
import Face from './views/face++/Face'

import { Theme } from 'teaset'

Theme.set(Theme.themes.poetry)

const RootStack = createStackNavigator(
  {
    Home,
    Login,
    ArticleList,
    HeaderButtons,
    ActionPopover,
    ActionSheet,
    AlbumView,
    Badge,
    Carousel,
    Drawer,
    Checkbox,
    ListRow,
    Menu,
    Popover,
    PopoverPicker,
    PullPicker,
    Projector,
    SearchInput,
    Select,
    Stepper,
    TabView,
    Wheel,
    EchartsBar,
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

export default () => (
  <RootStack />
)
