import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import Echarts from 'youngjuning-native-echarts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class EchartsBar extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'EchartsBar'),
  })
  constructor(props) {
    super(props)
    this.option = {
      title: {
        text: '春季销量',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    }
    this.option1 = {
      title: {
        text: '冬季销量',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    }
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Echarts
          ref={(c) => { this.bar = c }}
          option={this.option}
          height={250}
          onPress={(param) => { this.bar.setOption(this.option1) }}
        />
      </View>
    )
  }
}
