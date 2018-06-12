import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './views/Login'
import HomeScreen from './views/Home'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  },
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
