import React, { Component } from 'react'
import {
  View,
  Text,
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
  center: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
})

export default class EchartsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Echarts'),
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
        <Text style={[styles.center]}>作者本人不维护了，该插件又特别臃肿，持续关注</Text>
        <Echarts
          style={[styles.center]}
          ref={(c) => { this.bar = c }}
          option={this.option}
          height={250}
          onPress={() => { this.bar.setOption(this.option1) }}
        />
      </View>
    )
  }
}
