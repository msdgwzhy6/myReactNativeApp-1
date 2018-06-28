import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { ModalIndicator } from 'teaset'
import {
  InputItem, List, Button, Toast,
} from 'antd-mobile-rn'
import AV from 'leancloud-storage/live-query'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 20,
    marginRight: 'auto',
    marginBottom: 20,
    marginLeft: 'auto',
    width: 160,
    height: 160,
  },
})

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', '登录'),
  })

  // 初始化及挂载阶段
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    Toast.info(navigation.getParam('msg'), 2)
  }

  login() {
    const { username, password, navigation } = this.state
    Toast.loading('登陆中')
    AV.User.logIn(username, password).then(() => {
      Toast.success('登录成功')
      ModalIndicator.hide()
      navigation.navigate('Home', {
        username,
      })
    }).catch((err) => {
      if (err.code == 210) {
        Toast.fail('用户名密码不匹配')
      } else if (err.code == 211) {
        Toast.fail('用户不存在')
      } else if (err.code == 219) {
        Toast.fail('登录失败次数超过限制，请稍候再试')
      }
      Toast.hide()
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <ScrollView style={[styles.container]}>
        <Image
          style={[styles.logo]}
          source={{ uri: 'https://i.loli.net/2018/06/13/5b20cecfba791.png' }}
        />
        <List>
          <InputItem
            value={username}
            placeholder="请输入用户名"
            onChange={(value) => { this.setState({ username: value }) }}
          >
            用户名
          </InputItem>
          <InputItem
            type="password"
            value={password}
            placeholder="请输入密码"
            onChange={(value) => { this.setState({ password: value }) }}
            onBlur={() => this.login()}
          >
            用户名
          </InputItem>
        </List>
        <Button
          style={{ marginTop: 10 }}
          type="primary"
          size="large"
          onClick={() => { this.login() }}
        >
          登录
        </Button>
      </ScrollView>
    )
  }
}
