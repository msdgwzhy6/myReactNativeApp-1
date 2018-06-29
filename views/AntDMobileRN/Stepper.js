// 当想要对数值进行小幅度调整时，可以使用 Stepper，eg：将年化收益从 4.00% 调整到 4.05%。
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { List, Stepper } from 'antd-mobile-rn'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

function onChange(value) {
  console.log('changed', value)
}

export default class StepperScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Stepper',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const readOnly = (
      <Stepper
        size="small"
        key="1"
        max={10}
        min={1}
        readOnly={false}
        defaultValue={1}
        onChange={onChange}
      />
    )
    return (
      <View style={styles.container}>
        <List renderHeader="Stepper 必须在 List 中，建议不使用这个也可以">
          <List.Item
            extra={(
              <Stepper
                key="0"
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
)}
          >readOnly: true
          </List.Item>
          <List.Item extra={readOnly}>readOnly: false</List.Item>
          <List.Item
            extra={(
              <Stepper
                key="2"
                disabled
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
)}
          >Disabled
          </List.Item>
        </List>
      </View>
    )
  }
}
