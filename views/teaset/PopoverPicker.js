// PopoverPicker 为气泡选择器静态类, 一般用于触发显示一个数据列表供用户选择, 表现形式为从触发源组件弹出的气泡。PopoverPicker 基于 Overlay{} 实现。
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { PopoverPicker, Button } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class PopoverPickerScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'PopoverPicker'),
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
      selectedItem: 'showPopoverPicker',
    }
  }
  showPopoverPicker(view) {
    view.measure((x, y, width, height, pageX, pageY) => {
      PopoverPicker.show(
        {
          x: pageX, y: pageY, width, height,
        },
        this.items,
        this.state.selectedIndex,
        (item, index) => this.setState({
          selectedIndex: index,
          selectedItem: `当前选择：${item}`,
        }),
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          type="primary"
          size="lg"
          ref={(c) => { this.picker = c }}
          title={this.state.selectedItem}
          onPress={() => { this.showPopoverPicker(this.picker) }}
        />
      </View>
    )
  }
}
