import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import { Input } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    margin: 10,
  },
})

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          style={[styles.input]}
          size="lg"
          placeholder="请输入用户名"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
      </View>
    )
  }
}
