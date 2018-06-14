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
  },
  {
    initialRouteName: 'Badge',
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
