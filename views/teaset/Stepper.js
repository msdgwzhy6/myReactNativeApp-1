// Stepper 组件定义一个步进器。
import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import { Stepper, ListRow } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class StepperScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Stepper'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Stepper
          defaultValue={0}
          min={0}
          max={10}
          onChange={value => Alert.alert(`${value}`)}
        />
        <ListRow
          title="橘子"
          detail={<Stepper />}
          topSeparator="full"
          bottomSeparator="full"
        />
        <ListRow
          title="苹果"
          titlePlace="left"
          detail={<Stepper
            defaultValue={0}
            min={0}
            max={10}
            onChange={value => Alert.alert(`${value}`)}
          />}
          topSeparator="full"
          bottomSeparator="full"
        />
        <ListRow
          title="香蕉"
          titlePlace="left"
          detail={<Stepper
            defaultValue={0.8}
            step={0.005}
            valueFormat={v => `${(v * 100).toFixed(1)}%`}
            valueStyle={{ minWidth: 60 }}
          />}
          topSeparator="full"
          bottomSeparator="full"
        />
      </View>
    )
  }
}
