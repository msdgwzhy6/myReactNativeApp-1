// yarn add antd-mobile-demo-data
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Picker, List } from 'antd-mobile-rn'
import { p, pc, pca, pcas } from 'antd-mobile-area-data'

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
      p: [],
      pc: [],
      pca: [],
      pcas: [],
      pValue: [],
      value: [],
      pcaValue: [],
      pcasValue: [],
    }
  }
  onClick = () => {
    setTimeout(() => {
      this.setState({ pc })
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
            data={this.state.p}
            cols={1}
            value={this.state.pValue}
            onChange={(value) => { this.setState({ pValue: value }) }}
          >
            <Item arrow="horizontal" last onClick={() => this.setState({ p })}>
              省
            </Item>
          </Picker>
          <Picker
            data={this.state.pc}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}
          >
            <Item arrow="horizontal" last onClick={this.onClick}>
              省市
            </Item>
          </Picker>
          <Picker
            data={this.state.pca}
            cols={3}
            value={this.state.pcaValue}
            onChange={(value) => { this.setState({ pcaValue: value }) }}
          >
            <Item arrow="horizontal" last onClick={() => this.setState({ pca })}>
              省市区
            </Item>
          </Picker>
          <Picker
            data={this.state.pcas}
            cols={4}
            value={this.state.pcasValue}
            onChange={(value) => { this.setState({ pcasValue: value }) }}
          >
            <Item arrow="horizontal" last onClick={() => this.setState({ pcas })}>
              省市区街道
            </Item>
          </Picker>
        </List>
      </View>
    )
  }
}
