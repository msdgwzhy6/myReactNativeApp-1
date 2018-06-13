import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './views/Login'
import HomeScreen from './views/Home'
import ArticleListScreen from './views/ArticleList'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    ArticleList: ArticleListScreen,
  },
  {
    initialRouteName: 'Home',
  },
)

export default () => (
  <RootStack />
)
