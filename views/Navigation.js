import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List } from 'antd-mobile-rn'

const Item = List.Item
const Brief = List.Item.Brief
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f9',
  },
})

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <List>
          <Item
            arrow="horizontal"
            align="bottom"
            onClick={() => this.props.navigation.navigate('HeaderButtons')}
          >
            react-navigation-header-buttons
            <Brief>Easily render header buttons for react-navigation.</Brief>
          </Item>
          <Item
            arrow="horizontal"
            align="bottom"
            onClick={() => this.props.navigation.navigate('Modal')}
          >
            打开全屏模式
            <Brief>通过创建一个modal堆栈，来打开全屏模式</Brief>
          </Item>
        </List>
      </ScrollView>
    )
  }
}
