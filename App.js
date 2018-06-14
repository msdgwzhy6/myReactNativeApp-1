import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './views/Login'
import HomeScreen from './views/Home'
import ArticleListScreen from './views/ArticleList'
import HeaderButtonsScreen from './views/HeaderButtons'
import { Theme } from 'teaset'

Theme.set(Theme.themes.poetry)

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    ArticleList: ArticleListScreen,
    HeaderButtons: HeaderButtonsScreen,
  },
  {
    initialRouteName: 'HeaderButtons',
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
