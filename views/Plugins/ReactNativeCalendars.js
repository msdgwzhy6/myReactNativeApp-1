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

export default class ReactNativeCalendars extends Component {
  static navigationOptions = {
    headerTitle: 'ReactNativeCalendars',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the ReactNativeCalendars component</Text>
      </View>
    )
  }
}
