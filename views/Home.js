import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Button } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '微诗词'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="登录"
          onPress={() => this.props.navigation.navigate('Login', { msg: '来自首页的消息' })}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="次按钮"
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="危险按钮"
        />
        <Button
          style={[styles.btn]}
          type="link"
          size="lg"
          title="链接按钮"
        />
      </View>
    )
  }
}
