import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { List } from 'antd-mobile-rn'

const Item = List.Item
const Brief = Item.Brief
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', '第三方插件'),
  })

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={[styles.container]}>
        <List renderHeader="React Navigation">
          <Item
            arrow="horizontal"
            align="bottom"
            onClick={() => navigation.navigate('HeaderButtons')}
          >
            react-navigation-header-buttons
            <Brief>
              Easily render header buttons for react-navigation.
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            align="bottom"
            onClick={() => navigation.navigate('Modal')}
          >
            打开全屏模式
            <Brief>
              通过创建一个modal堆栈，来打开全屏模式
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            align="bottom"
            onClick={() => navigation.navigate('MaterialTopTabNavigator')}
          >
            createMaterialTopTabNavigator
            <Brief>
              屏幕顶部的材料设计主题标签栏, 可通过点击路线或水平滑动来切换不同的路由
            </Brief>
          </Item>
        </List>
        <List renderHeader="QrCode 二维码扫描">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('acQrcode')}
          >
            ac-qrcode
            <Brief>
              A highly customizable QR code scanning component for React Native
            </Brief>
          </Item>
        </List>
        <List renderHeader="Picker">
          <Item
            arrow="horizontal"
            onClick={() => { navigation.navigate('ReactNativePicker') }}
          >
            ReactNativePicker
            <Brief>
              A Native Picker with high performance.
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ReactNativeModalDatetimePicker')}
          >
            react-native-modal-datetime-picker
            <Brief>
              A React-Native datetime-picker for Android and iOS
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ReactNativeCalendars')}
          >
            react-native-calendars
            <Brief>
              React Native Calendar Components 📆
            </Brief>
          </Item>
        </List>
        <List renderHeader="IM">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('GiftedChat')}
          >
            react-native-gifted-chat
            <Brief>
              💬 The most complete chat UI for React Native
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('AuroraImui')}
          >
            aurora-imui-react-native
            <Brief>
              通用 IM 聊天 UI 组件，已经同时支持 Android/iOS/RN
            </Brief>
          </Item>
        </List>
        <List renderHeader="Map">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ReactNativeAmap3d')}
          >
            react-native-amap3d
            <Brief>
              react-native 高德地图组件，使用最新 3D SDK，支持 Android + iOS
            </Brief>
          </Item>
        </List>
        <List renderHeader="Swiper">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('ReactNativeSwiper')}
          >
            react-native-swiper
            <Brief>
              The best Swiper component for React Native.
            </Brief>
          </Item>
        </List>
        <List renderHeader="Data Visualization">
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('echarts')}
          >
            youngjuning-native-echarts
            <Brief>
              修复了 native-echarts 部分BUG
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => navigation.navigate('secharts')}
          >
            react-native-secharts
            <Brief>
              目前最好用的图标插件
            </Brief>
          </Item>
        </List>
      </ScrollView>
    )
  }
}
