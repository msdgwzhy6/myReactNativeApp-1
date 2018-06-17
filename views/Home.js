import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Button } from 'youngjuning-teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Teaset'),
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
          size="lg"
          title="登录"
          onPress={() => this.props.navigation.navigate('Login', { msg: '来自首页的消息' })}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="HeaderButtons"
          onPress={() => this.props.navigation.navigate('HeaderButtons')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="ArticleList"
          onPress={() => this.props.navigation.navigate('ArticleList')}
        />
      </ScrollView>
    )
  }
}
