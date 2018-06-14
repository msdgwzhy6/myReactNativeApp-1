import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Badge } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class BadgeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Badge'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the BadgeScreen component</Text>
      </View>
    )
  }
}
