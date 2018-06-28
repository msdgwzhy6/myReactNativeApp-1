import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { List, Radio, WhiteSpace } from 'antd-mobile-rn'

const RadioItem = Radio.RadioItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class RadioScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Radio',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Radio
            checked={this.state.part1Value === '英国'}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part1Value: '英国' })
              }
            }}
            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}
          >英国
          </Radio>
          <WhiteSpace />
          <Radio
            checked={this.state.part1Value === '德国'}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part1Value: '德国' })
              }
            }}
            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}
          >德国
          </Radio>
          <WhiteSpace />
        </View>
        <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>
            Form radio, radio in general list.<Text style={{ color: 'red' }}>{this.state.part2Value}</Text>
          </Text>
          <RadioItem
            checked={this.state.part2Value === '英国'}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part2Value: '英国' })
              }
            }}
          >英国
          </RadioItem>
          <RadioItem
            checked={this.state.part2Value === '美国'}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part2Value: '美国' })
              }
            }}
          >美国
          </RadioItem>
          <RadioItem disabled>Set disabled</RadioItem>
          <RadioItem disabled checked>Set disabled</RadioItem>
        </List>
      </View>
    )
  }
}
