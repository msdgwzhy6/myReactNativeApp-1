// 默认状态下，左边为最小值，右边为最大值。
// 一般水平放置。
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Slider } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class SliderScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Slider',
  }

  constructor(props) {
    super(props)
    this.state = {
      changingValue: 0.25,
      changedValue: 0.15,
      minMaxValue: 0,
    }
  }

  onAfterChange = (value) => {
    this.setState({
      changedValue: value,
    })
  }

  handleChange = (value) => {
    this.setState({
      changingValue: value,
    })
  }

  minMaxChange = (value) => {
    this.setState({
      minMaxValue: value,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Default settings</Text>
          <Slider />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Initial value: 0.5</Text>
          <Slider defaultValue={0.5} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>min: 0, max: 1, current Value: {this.state.minMaxValue}</Text>
          <Slider
            min={0}
            max={1}
            onAfterChange={(value: any) => this.minMaxChange(value)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>disabled</Text>
          <Slider disabled defaultValue={0.25} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>onChange value: {this.state.changingValue}</Text>
          <Slider
            defaultValue={0.25}
            onChange={(value: any) => this.handleChange(value)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>onAfterChange value: {this.state.changedValue}</Text>
          <Slider
            defaultValue={0.15}
            onAfterChange={(value: any) => this.onAfterChange(value)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>custom color: </Text>
          <Slider
            defaultValue={0.15}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
        </View>
      </View>
    )
  }
}
