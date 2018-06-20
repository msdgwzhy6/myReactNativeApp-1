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

export default class GiftedChat extends Component {
  static navigationOptions = {
    headerTitle: 'GiftedChat',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the GiftedChat component</Text>
      </View>
    )
  }
}
