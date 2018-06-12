import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  Input,
  Button,
  Toast,
} from 'teaset'

import AV from 'leancloud-storage/live-query'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  margin_10: {
    margin: 10,
  },
})

export default class Login extends Component {
  // 初始化及挂载阶段
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  login() {
    AV.User.logIn(this.state.username, this.state.password).then(() => {
      Toast.success('登录成功')
    }).catch(() => {
      Toast.fail('登录失败')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          style={[styles.margin_10]}
          size="lg"
          placeholder="请输入用户名"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Input
          style={[styles.margin_10]}
          size="lg"
          placeholder="请输入密码"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          style={[styles.margin_10]}
          type="primary"
          size="lg"
          title="按钮"
          onPress={() => this.login()}
        />
      </View>
    )
  }
}
