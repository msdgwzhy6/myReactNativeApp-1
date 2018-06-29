import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native'
import { SegmentedControl, WhiteSpace } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})

export default class SegmentedControlScreen extends Component {
  static navigationOptions = {
    headerTitle: 'SegmentedControl 分段器',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  onChange = (e) => {
    const selectedIndex = e.nativeEvent.selectedSegmentIndex + 1
    const selectedValue = e.nativeEvent.value
    Alert.alert(`${selectedIndex}${selectedValue}`)
  }

  onValueChange = (value) => {
    Alert.alert(value)
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text>onChange</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2']}
          onChange={this.onChange}
        />
        <Text>Disabled</Text>
        <SegmentedControl values={['Segment1', 'Segment2']} disabled />
        <WhiteSpace size="lg" />
        <Text>TintColor and Style</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor="#ff0000"
          style={{ height: 40, width: 280 }}
        />
        <WhiteSpace size="lg" />
        <Text>SelectedIndex</Text>
        <SegmentedControl
          selectedIndex={1}
          values={['Segment1', 'Segment2', 'Segment3']}
        />
        <WhiteSpace size="lg" />
        <Text>onValueChange</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          onValueChange={this.onValueChange}
        />
      </View>
    )
  }
}
