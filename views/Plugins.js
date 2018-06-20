import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { ListRow } from 'teaset'

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
        <ListRow
          title="ReactNativePicker"
          titlePlace="top"
          detail="A Native Picker with high performance."
          accessory="indicator"
          onPress={() => { this.props.navigation.navigate('ReactNativePicker') }}
        />
        <ListRow
          title="react-native-modal-datetime-picker"
          titlePlace="top"
          detail="A React-Native datetime-picker for Android and iOS"
          accessory="indicator"
          onPress={() => { this.props.navigation.navigate('ReactNativeModalDatetimePicker') }}
        />
        <ListRow
          title="react-native-calendars"
          detail="React Native Calendar Components 📆"
          titlePlace="top"
          accessory="indicator"
          onPress={() => { this.props.navigation.navigate('ReactNativeCalendars') }}
        />
        <ListRow
          title="react-native-baidu-map"
          detail="百度地图相关模块和视图，支持react native 0.40+"
          titlePlace="top"
          bottomSeparator="full"
          accessory="indicator"
          onPress={() => { this.props.navigation.navigate('ReactNativeBaiduMap') }}
        />
      </ScrollView>
    )
  }
}
