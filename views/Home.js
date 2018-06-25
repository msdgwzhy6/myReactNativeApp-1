import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Button } from 'teaset'
import SplashScreen from 'react-native-splash-screen'

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
    headerTitle: navigation.getParam('headerTitle', '首页'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
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
          type="secondary"
          size="lg"
          title="ArticleList"
          onPress={() => this.props.navigation.navigate('ArticleList')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="Face++"
          onPress={() => this.props.navigation.navigate('Face')}
        />
      </ScrollView>
    )
  }
}
