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
    return (
      <ScrollView style={[styles.container]}>
        <List renderHeader="Picker">
          <Item
            arrow="horizontal"
            onClick={() => { this.props.navigation.navigate('ReactNativePicker') }}
          >
            ReactNativePicker
            <Brief>A Native Picker with high performance.</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('ReactNativeModalDatetimePicker')}
          >
            react-native-modal-datetime-picker
            <Brief>A React-Native datetime-picker for Android and iOS</Brief>
          </Item>
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('ReactNativeCalendars')}
          >
            react-native-calendars
            <Brief>React Native Calendar Components 📆</Brief>
          </Item>
        </List>
        <List renderHeader="IM">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('GiftedChat')}
          >
            react-native-gifted-chat
            <Brief>💬 The most complete chat UI for React Native</Brief>
          </Item>
        </List>
        <List renderHeader="Map">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('ReactNativeAmap3d')}
          >
            react-native-amap3d
            <Brief>react-native 高德地图组件，使用最新 3D SDK，支持 Android + iOS</Brief>
          </Item>
        </List>
      </ScrollView>
    )
  }
}
