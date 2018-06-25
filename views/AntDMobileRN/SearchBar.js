// 规则
// 1. 应该在 placeholder 里提供提示文字，提醒用户输入相关内容，比如：双11特卖。
// 2. 在搜索栏下方，可提供有用的标签文案，帮助用户通过点击直接完成输入，比如：列出一些最近搜索的关键词。
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native'
import { SearchBar } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '美食',
    }
  }
  onChange = (value: any) => {
    this.setState({ value })
  }

  clear = () => {
    this.setState({ value: '' })
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    )
  }
}
