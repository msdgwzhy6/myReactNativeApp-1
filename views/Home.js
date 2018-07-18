import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { List } from 'antd-mobile-rn'

const Item = List.Item
const Brief = List.Item.Brief
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
    const { navigation } = this.props
    return (
      <ScrollView style={[styles.container]}>
        <List style={{ borderBottomWidth: 0 }}>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Login', { msg: '来自首页的消息' })}
          >
            登录
            <Brief>基于LeanCloud的登录页面</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ArticleList')}
          >
            ArticleList
            <Brief>基于LeanCloud的文章列表</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Face')}
          >
            Face++
            <Brief>基于Face++的人脸识别</Brief>
          </Item>
          <View style={{
            backgroundColor: '#fff',
            height: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
          />
        </List>
      </ScrollView>
    )
  }
}
