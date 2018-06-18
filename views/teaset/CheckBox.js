import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import { Checkbox } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class CheckBoxScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Checkbox'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleCheckedChange(checked) {
    const title = this.state.checkbox.props.title.props.children
    if (checked) {
      Alert.alert(`天选之人 '${title}'`)
    } else {
      Alert.alert(`普通之人 '${title}'`)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Checkbox
          defaultChecked
          size="lg"
          ref={(c) => { this.state.checkbox = c }}
          title="杨俊宁"
          onChange={(checked) => { this.handleCheckedChange(checked) }}
        />
      </View>
    )
  }
}
