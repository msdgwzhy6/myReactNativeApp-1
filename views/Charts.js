import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Button } from 'teaset'

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
          title="youngjuning-native-echarts"
          onPress={() => this.props.navigation.navigate('echarts')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="react-native-secharts"
          onPress={() => this.props.navigation.navigate('secharts')}
        />
      </ScrollView>
    )
  }
}
