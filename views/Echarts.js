import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Button } from 'youngjuning-teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class Echarts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Echarts'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <Button
          style={[styles.btn]}
          size="lg"
          title="Echarts Bar 柱状图"
          onPress={() => this.props.navigation.navigate('EchartsBar')}
        />
      </ScrollView>
    )
  }
}
