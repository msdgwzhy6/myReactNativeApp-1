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

export default class ReactNativeModalDatetimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the ReactNativeModalDatetimePicker component</Text>
      </View>
    )
  }
}
