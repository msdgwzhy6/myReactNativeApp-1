import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native'
import { Echarts } from 'react-native-secharts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  marginAuto: {
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
})

export default class SEcharts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'SEcharts'),
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
  getImage() {
    this.echarts.getImage((res) => {
      this.setState({
        image: res.payload,
      })
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.marginAuto]}>
          <Echarts
            option={this.option}
            height={300}
            width={300}
            ref={(c) => { this.echarts = c }}
            onPress={() => { this.getImage() }}
          />
          <Image
            source={{ uri: this.state.image ? this.state.image : null }}
            resizeMode="contain"
            style={{ height: 300, width: 300 }}
          />
        </View>
      </ScrollView>
    )
  }
}
