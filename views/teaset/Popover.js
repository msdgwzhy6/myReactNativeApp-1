// Popover 组件定义一个气泡, 是一个可在边框任意位置显示一个三角形箭头的圆角矩形容器, 常用于聊天信息显示或弹出提示等。
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Popover, Label } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popvoer: {
    padding: 5,
  },
})

export default class PopoverScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Popover'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Popover
          style={[styles.popvoer]}
          arrow="bottom"
          paddingCorner={16}
        >
          <Label text="Popover bottom" />
        </Popover>
        <Popover
          style={[styles.popvoer]}
          arrow="top"
          paddingCorner={16}
        >
          <Label text="Popover top" />
        </Popover>
        <Popover
          style={[styles.popvoer]}
          arrow="right"
          paddingCorner={16}
        >
          <Label text="Popover right" />
        </Popover>
        <Popover
          style={[styles.popvoer]}
          arrow="left"
          paddingCorner={16}
        >
          <Label text="Popover left" />
        </Popover>
      </View>
    )
  }
}
