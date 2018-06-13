import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Button } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  btn: {
    margin: 10,
  },
})

export default class HomeScreen extends Component {
  // 一般来说，你需要在constructor中初始化state，然后在需要修改时调用setState方法
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.btn]}
          type="default"
          size="lg"
          title="默认按钮"
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="主按钮"
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
