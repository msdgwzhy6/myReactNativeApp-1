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
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          minDate={new Date(1970, 1, 1)}
          value={this.state.date}
          title="SelectDate"
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">Datetime</List.Item>
        </DatePicker>
      </View>
    )
  }
}
