import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  ModalIndicator,
  Toast,
  Input,
  Button,
} from 'teaset'
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
  margin_10: {
    margin: 10,
  },
  margin_top_0: {
    marginTop: 0,
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
  login() {
    ModalIndicator.show('登陆中')
    AV.User.logIn(this.state.username, this.state.password).then(() => {
      Toast.success('登录成功')
      ModalIndicator.hide()
      this.props.navigation.navigate('Home', {
        username: this.state.username,
      })
    }).catch((err) => {
      if (err.code == 210) {
        Toast.fail('用户名密码不匹配')
      } else if (err.code == 211) {
        Toast.fail('用户不存在')
      } else if (err.code == 219) {
        Toast.fail('登录失败次数超过限制，请稍候再试')
      }
      ModalIndicator.hide()
    })
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <Image
          style={[styles.logo]}
          source={{ uri: 'https://i.loli.net/2018/06/13/5b20cecfba791.png' }}
        />
        <Input
          style={[styles.margin_10, styles.margin_top_0]}
          size="lg"
          placeholder="请输入用户名"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Input
          style={[styles.margin_10]}
          secureTextEntry
          size="lg"
          placeholder="请输入密码"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          style={[styles.margin_10]}
          type="primary"
          size="lg"
          title="登录"
          onPress={() => this.login()}
        />
      </ScrollView>
    )
  }
}