import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { ActivityIndicator } from 'antd-mobile-rn'

export default class ActivityIndicatorScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I am the ActivityIndicatorScreen component</Text>
        <ActivityIndicator toast text="正在加载" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
