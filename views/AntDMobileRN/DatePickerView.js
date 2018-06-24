import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { DatePickerView } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default class DatePickerViewScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }
  handleChange = (value) => {
    console.log(value)
    this.setState({ value })
  }
  handleValueChange = (value) => {
    console.log(value)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 16 }}>Start DateTime</Text>
        <DatePickerView
          minDate={new Date(2000, 1, 1)}
          maxDate={new Date(2030, 1, 1)}
          value={this.state.value}
          onChange={this.handleChange}
          onValueChange={this.handleValueChange}
        />
        <Text style={{ margin: 16 }}>End DateTime</Text>
        <DatePickerView
          value={this.state.value}
          onChange={this.handleChange}
          onValueChange={this.handleValueChange}
        />
      </View>
    )
  }
}
