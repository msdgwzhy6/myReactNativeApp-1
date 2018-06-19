import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { LocaleConfig, Calendar } from 'react-native-calendars'

LocaleConfig.locales.cn = {
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  dayNames: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
  dayNamesShort: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
}

LocaleConfig.defaultLocale = 'cn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class ReactNativeCalendars extends Component {
  static navigationOptions = {
    headerTitle: 'ReactNativeCalendars',
  }
  constructor(props) {
    super(props)
    this.state = {
      marked: {
        '2018-06-16': { marked: true, dotColor: 'red' },
        '2018-06-17': { marked: true },
        '2018-06-18': { disabled: true, activeOpacity: 0 },
      },
    }
  }
  onDayPress = (day) => {
    this.setState({
      selected: day.dateString,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={(day) => { this.onDayPress(day) }}
          onDayLongPress={(day) => { console.log('selected day', day) }}
          onMonthChange={(month) => { console.log('month changed', month) }}
          markedDates={{
            [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
            ...this.state.marked,
          }}
        />
      </View>
    )
  }
}
