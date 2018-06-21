import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class ReactNativeSwiper extends Component {
  static navigationOptions = {
    headerTitle: 'react-native-swiper',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the ReactNativeSwiper component</Text>
      </View>
    )
  }
}
