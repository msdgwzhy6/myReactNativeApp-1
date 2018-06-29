import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Echarts from '../Charts/Echarts'
import SEcharts from '../Charts/SEcharts'
import GiftedChat from '../GiftedChat'

export default class MyComponent extends Component {
  static navigationOptions = {
    headerTitle: 'MaterialTopTabNavigator',
    // header: null,
  }

  render() {
    return (
      <RocketStack />
    )
  }
}

const RocketStack = createMaterialTopTabNavigator({
  Echarts,
  SEcharts,
  GiftedChat,
}, {
  initialRouteName: 'Echarts',
  tabBarOptions: {
    scrollEnabled: true,
  },
})
