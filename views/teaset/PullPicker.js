// PullPicker 为上拉选择器静态类, 一般用于触发显示一个数据列表供用户选择, 表现形式为从屏幕下方拖出抽屉。
import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet,
} from 'react-native'
import { PullPicker } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class PullPickerScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'PullPicker'),
  })
  constructor(props) {
    super(props)
    this.items = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
    ]
    this.state = {
      selectedIndex: null,
      pullPicker: 'Show PullPicker',
    }
  }
  showPullPicker() {
    PullPicker.show(
      'Select item',
      this.items,
      this.state.selectedIndex,
      (item, index) => this.setState({
        selectedIndex: index,
        pullPicker: `当前选中：${item}`,
      }),
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          type="primary"
          size="lg"
          title={this.state.pullPicker}
          onPress={() => { this.showPullPicker() }}
        />
      </View>
    )
  }
}
