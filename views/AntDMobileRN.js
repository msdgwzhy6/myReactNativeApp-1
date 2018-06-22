import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { List } from 'antd-mobile-rn'

const Item = List.Item
const Brief = List.Item.Brief

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class AntDMobileRN extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', 'AntDMobileRN'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <List renderHeader="Layout 布局">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('Flex')}
          >
            Flex
            <Brief>Flex布局</Brief>
          </Item>
        </List>
        <List renderHeader="Data Entry 数据输入">
          <Item
            arrow="horizontal"
            onClick={() => this.props.navigation.navigate('DatePicker')}
          >
            DatePicker
            <Brief>日期时间选择</Brief>
          </Item>
        </List>
      </ScrollView>
    )
  }
}
