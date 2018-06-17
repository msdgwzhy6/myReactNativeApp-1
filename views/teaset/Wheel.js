// Wheel 组件定义一个滚轮, 可用于滚轮式选择器，同时支持 Android 和 iOS。
import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import { Wheel } from 'youngjuning-teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class WheelScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Wheel'),
  })
  constructor(props) {
    super(props)
    this.items = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Wheel
          style={{ height: 200, width: 80 }}
          itemStyle={{ textAlign: 'center' }}
          items={this.items}
          onChange={(index) => { Alert.alert(`${this.items[index]}`) }}
        />
      </View>
    )
  }
}
