import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Flex, Button } from 'antd-mobile-rn'

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    height,
  },
})

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Flex justify="center" align="center" style={[styles.sidebar]}>
        <Button
          type="warning"
          onClick={() => { this.props.closeDrawer() }}
        >Close Drawer
        </Button>
      </Flex>
    )
  }
}
