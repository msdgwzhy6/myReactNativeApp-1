// Select 组件定义一个选择框。
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Select } from 'youngjuning-teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class SelectScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Select'),
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
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Select
          style={{ width: 200 }}
          value={this.state.value}
          placeholder="pickerType Auto"
          items={this.items}
          pickerTitle="请选择一项"
          onSelected={(item, index) => this.setState({ value: item })}
        />
        <Select
          style={{ width: 200 }}
          value={this.state.value}
          placeholder="pickerType popover"
          items={this.items}
          pickerType="popover"
          onSelected={(item, index) => this.setState({ value: item })}
        />
        <Select
          style={{ width: 200 }}
          value={this.state.value}
          placeholder="pickerType pull"
          items={this.items}
          pickerType="pull"
          pickerTitle="请选择一项"
          onSelected={(item, index) => this.setState({ value: item })}
        />
      </View>
    )
  }
}
