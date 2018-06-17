import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import Echarts from 'native-echarts'

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
      'xAxis-axisLabel-interval': 0,
    }
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Echarts
          option={this.option}
          height={250}
          onPress={(param) => { Alert.alert('点击了图表', param.toString()) }}
        />
      </View>
    )
  }
}
