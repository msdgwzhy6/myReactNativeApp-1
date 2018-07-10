import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { List } from 'antd-mobile-rn'

const Item = List.Item
const Brief = List.Item.Brief

export default class AntDMobileRN extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', 'AntDMobileRN'),
  })

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={[styles.container]}>
        <List renderHeader="Layout 布局">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Flex')}
          >
            Flex
            <Brief>
            Flex布局
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('WhingBlank')}
          >
            WhingBlank
            <Brief>
            两翼留白
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('WhiteSpace')}
          >
            WhiteSpace
            <Brief>
            上下留白
            </Brief>
          </Item>
        </List>
        <List renderHeader="Navigation 导航">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Drawer')}
          >
            Drawer
            <Brief>
            用于在屏幕边缘显示应用导航等内容的面板，是 Android 推荐的导航方式，常见于该平台应用
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Popover')}
          >
            Popover
            <Brief>
            在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Pagination')}
          >
            Pagination
            <Brief>
            分隔长列表，每次只加载一个页面。当加载/渲染所有数据将花费很多时间或者流量时使用
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('SegmentedControl')}
          >
            SegmentedControl
            <Brief>
            由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。
            </Brief>
          </Item>
        </List>
        <List renderHeader="Data Entry 数据输入">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Button')}
          >
            Button
            <Brief>
            点击后会触发一个操作
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Checkbox')}
          >
            Checkbox
            <Brief>
            复选框
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('DatePicker')}
          >
            DatePicker
            <Brief>
            日期时间选择
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('DatePickerView')}
          >
            DatePickerView
            <Brief>
            atePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('InputItem')}
          >
            InputItem
            <Brief>
            用于接受单行文本
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ImagePicker')}
          >
            ImagePicker
            <Brief>
            注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Picker')}
          >
            Picker
            <Brief>
            在一组预设数据中进行选择，e.g. 省市区选择
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('PickerView')}
          >
            PickerView
            <Brief>
            PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Radio')}
          >
            Radio
            <Brief>
            单选框
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('SearchBar')}
          >
            SearchBar 搜索框
            <Brief>
            一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Slider')}
          >
            Slider 滑动输入条
            <Brief>
            允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Stepper')}
          >
            Stepper 步进器
            <Brief>
              用作增加或者减少当前数值。
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('Switch')}
          >
            Switch 滑动开关
            <Brief>
              在两个互斥对象进行选择，eg：选择开或关。
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('TextareaItem')}
          >
            TextareaItem 多行输入
            <Brief>
              用于接受多行文本。
            </Brief>
          </Item>
        </List>
        <List renderHeader="FeedBack 反馈">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ActivityIndicator')}
          >
            ActivityIndicator 活动指示器
            <Brief>活动指示器。 表明某个任务正在进行中。</Brief>
          </Item>
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})
