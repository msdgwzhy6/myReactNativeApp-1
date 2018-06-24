// yarn add antd-mobile-demo-data
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Picker, List } from 'antd-mobile-rn'
import { pc, pca, pcas } from 'antd-mobile-area-data'

const Item = List.Item
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class MyComponent extends Component {
  static navigationOptions = {
    headerTitle: 'Picker',
  }
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: [],
    }
  }
  onClick = () => {
    setTimeout(() => {
      this.setState({ data: pc })
    }, 500)
  }
  onChange = (value) => {
    this.setState({ value })
  }
  render() {
    return (
      <View style={styles.container}>
        <List>
          <Picker
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}
          >
            <Item arrow="horizontal" last onClick={this.onClick}>
              省市选择(异步加载)
            </Item>
          </Picker>
          <Picker
            data={this.state.pca}
            cols={3}
            value={this.state.value}
            onChange={() => {}}
          >
            <Item arrow="horizontal" last onClick={() => this.setState({ pca })}>
              省市区选择(异步加载)
            </Item>
          </Picker>
        </List>
      </View>
    )
  }
}
