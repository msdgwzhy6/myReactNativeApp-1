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
  },
  {
    initialRouteName: 'ListRow',
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
