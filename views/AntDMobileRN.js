import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
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

export default class AntDMobileRN extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', 'AntDMobileRN'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <List renderHeader="Layout 布局">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('Flex')}
          >
            Flex
            <Brief>Flex布局</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('WhingBlank')}
          >
            WhingBlank
            <Brief>两翼留白</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('WhiteSpace')}
          >
            WhiteSpace
            <Brief>上下留白</Brief>
          </Item>
        </List>
        <List renderHeader="Navigation 导航">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('Drawer')}
          >
            Drawer
            <Brief>用于在屏幕边缘显示应用导航等内容的面板，是 Android 推荐的导航方式，常见于该平台应用</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('Popover')}
          >
            Popover
            <Brief>在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('Pagination')}
          >
            Pagination
            <Brief>分隔长列表，每次只加载一个页面。当加载/渲染所有数据将花费很多时间或者流量时使用</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('SegmentedControl')}
          >
            SegmentedControl
            <Brief>由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。</Brief>
          </Item>
        </List>
        <List renderHeader="Data Entry 数据输入">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('DatePicker')}
          >
            DatePicker
            <Brief>日期时间选择</Brief>
          </Item>
        </List>
      </ScrollView>
    )
  }
}
