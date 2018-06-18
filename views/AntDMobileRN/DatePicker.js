import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { DatePicker, List } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class DatePickerScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', 'Datetime'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <List>
          <DatePicker
            mode="date"
            value={this.state.date}
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={date => this.setState({ date })}
          >
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
          <DatePicker
            mode="time"
            value={this.state.time}
            onChange={time => this.setState({ time })}
          >
            <List.Item arrow="horizontal">Select Time</List.Item>
          </DatePicker>
          <DatePicker
            mode="datetime"
            value={this.state.datetime}
            minDate={new Date(1970, 1, 1)}
            onChange={datetime => this.setState({ datetime })}
          >
            <List.Item arrow="horizontal">Select Datetime</List.Item>
          </DatePicker>
        </List>
      </View>
    )
  }
}
