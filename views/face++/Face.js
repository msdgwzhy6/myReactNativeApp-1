import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native'
import Const from '../../Const'

const Key = Const.Key
Alert.alert(Key.faceKey)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class Face extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Face++'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Face component</Text>
      </View>
    )
  }
}
