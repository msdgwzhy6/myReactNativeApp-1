import React, { Component } from 'react'
import {
  ScrollView,
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
      <ScrollView style={[styles.container]}>
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
          title="HeaderButtons"
          onPress={() => this.props.navigation.navigate('HeaderButtons')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="ActionPopover"
          onPress={() => this.props.navigation.navigate('ActionPopover')}
        />
      </ScrollView>
    )
  }
}
