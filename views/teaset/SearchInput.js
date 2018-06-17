// SearchInput 组件定义一个搜索输入框, 与 Input 的区别是有多一个放大镜图标, 在内容为空时且不在编辑状态时居中显示, 否则左对齐。
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { SearchInput } from 'youngjuning-teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    marginBottom: 10,
  },
  customSearch: {
    width: 200,
    height: 40,
    backgroundColor: '#fcf8e3',
    borderColor: '#8a6d3b',
  },
})


export default class SearchInputScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'SearchInput'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <SearchInput
          style={[{ width: 200 }, styles.search]}
          placeholder="简单用法"
        />
        <SearchInput
          style={[{ width: 200 }, styles.search]}
          placeholder="只读"
          editable={false}
        />
        <SearchInput
          style={[{ width: 200 }, styles.search]}
          placeholder="禁用"
          disabled
        />
        <SearchInput
          style={[styles.customSearch]}
          inputStyle={{ color: '#8a6d3b', fontSize: 18 }}
          iconSize={15}
          value={this.state.valueCustom}
          placeholder="自定义"
          placeholderTextColor="#aaa"
          onChangeText={text => this.setState({ valueCustom: text })}
        />
      </View>
    )
  }
}
