import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { WingBlank, Flex } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(10, 166, 162)',
  },
})

export default class WingBlankScreen extends Component {
  static navigationOptions = {
    headerTitle: 'WingBlank',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <WingBlank style={[styles.container]}>
        <Flex justify="center" align="center" style={{ flex: 1 }}>
          <Text selectable style={{ color: '#fff', fontSize: 18 }}>WingBlank 两翼留白</Text>
        </Flex>
      </WingBlank>
    )
  }
}
