import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import { Flex } from 'antd-mobile-rn'

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height: 200,
  },
})

export default class FlexScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Flex布局',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView>
        <Flex justify="between" align="center" style={styles.container}>
          <View style={{ backgroundColor: 'rgb(63, 201, 138)', height, width: 80 }} />
          <View style={{ backgroundColor: 'rgb(27, 71, 181)', height, width: 80 }} />
          <View style={{ backgroundColor: 'rgb(214, 208, 140)', height, width: 80 }} />
        </Flex>
        <Flex justify="between" align="center" style={styles.container}>
          <View style={{ backgroundColor: 'rgb(63, 201, 138)', height, width: 80 }} />
          <View style={{ backgroundColor: 'rgb(27, 71, 181)', height, width: 80 }} />
          <View style={{ backgroundColor: 'rgb(214, 208, 140)', height, width: 80 }} />
        </Flex>
      </ScrollView>
    )
  }
}
