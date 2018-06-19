import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { ListRow } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'
import DateTimePicker from 'react-native-modal-datetime-picker'
import dayjs from 'dayjs'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class ReactNativeModalDatetimePicker extends Component {
  static navigationOptions = {
    headerTitle: 'react-native-modal-datetime-picker',
  }
  constructor(props) {
    super(props)
    this.state = {
      isDatePickerVisible: false,
      isDateTimePickerVisible: false,
      isTimePickerVisible: false,
    }
  }

  formatDate(date) {
    return dayjs(date).format('YYYY-MM-DD')
  }
  showDataPicker = () => {
    this.setState({ isDatePickerVisible: true })
  }
  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false })
  }
  handleDatePicked = (date) => {
    this.setState({
      date: this.formatDate(date),
    })
    this.hideDatePicker()
  }

  formatDateTime(datetime) {
    return dayjs(datetime).format('YYYY-MM-DD HH:mm')
  }
  showDataTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true })
  }
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }
  handleDateTimePicked = (datetime) => {
    this.setState({
      datetime: this.formatDateTime(datetime),
    })
    this.hideDateTimePicker()
  }

  formatTime(time) {
    return dayjs(time).format('HH:mm')
  }
  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true })
  }
  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false })
  }
  handleTimePicked = (time) => {
    this.setState({
      time: this.formatTime(time),
    })
    this.hideTimePicker()
  }
  render() {
    return (
      <View style={styles.container}>
        <ListRow
          title="生日"
          datePickerModeAndroid="spinner"
          detail={this.state.date ? this.state.date : '请选择'}
          icon={(<Icon name="birthday-cake" size={20} color="#000" />)}
          topSeparator="full"
          accessory="indicator"
          onPress={this.showDataPicker}
        />
        <ListRow
          title="生辰"
          detail={this.state.datetime ? this.state.datetime : '请选择'}
          icon={(<Icon name="birthday-cake" size={20} color="#000" />)}
          accessory="indicator"
          onPress={this.showDataTimePicker}
        />
        <ListRow
          title="时间"
          detail={this.state.time ? this.state.time : '请选择'}
          icon={(<Icon name="clock-o" size={20} color="#000" />)}
          bottomSeparator="full"
          accessory="indicator"
          onPress={this.showTimePicker}
        />
        <DateTimePicker
          mode="date"
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
          minimumDate={new Date(1990, 1, 1)}
          maximumDate={new Date(2030, 1, 1)}
        />
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDateTimePicked}
          onCancel={this.hideDateTimePicker}
        />
        <DateTimePicker
          mode="time"
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this.handleTimePicked}
          onCancel={this.hideTimePicker}
        />
      </View>
    )
  }
}
