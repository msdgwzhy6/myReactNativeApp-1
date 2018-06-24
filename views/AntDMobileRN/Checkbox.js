import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Checkbox, WhiteSpace, List, Text } from 'antd-mobile-rn'

const AgreeItem = Checkbox.AgreeItem
const CheckboxItem = Checkbox.CheckboxItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
})

export default class MyComponent extends Component {
  static navigationOptions = {
    headerTitle: 'CheckBox',
  }
  constructor(props) {
    super(props)
    this.country = [
      {
        key: 0, value: '美国', checked: true,
      },
      {
        key: 1, value: '日本', checked: true,
      },
      {
        key: 2, value: '韩国', checked: true,
      },
    ]
    this.state = {
      agree: false,
    }
  }
  handleChange(e, key) {
    this.country[key].checked = e.target.checked
  }
  handleAgree(e) {
    const checked = e.target.checked
    this.setState({
      agree: checked,
    })
    console.log(checked)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 12 }}>Checkbox</Text>
        <Checkbox>加拿大</Checkbox>
        <WhiteSpace size="xl" />
        <Text style={{ marginTop: 12 }}>AgreeItem</Text>
        <AgreeItem
          checked={this.state.agree}
          onChange={(e) => { this.handleAgree(e) }}
        >同意条款
        </AgreeItem>
        <WhiteSpace size="xl" />
        <List>
          <Text style={{ marginTop: 12 }}>Multiple options</Text>
          {this.country.map(i => (
            <CheckboxItem
              checked={`${this.country.item}[${i.key}]`}
              onChange={(e) => { this.handleChange(e, i.key) }}
            >{i.value}
            </CheckboxItem>
          ))}
        </List>
      </View>
    )
  }
}
