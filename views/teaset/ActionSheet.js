import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native'
import { ActionSheet, Button } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class ActionSheetScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'ActionSheet'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  showActionSheet() {
    const items = [
      { title: 'Say hello', onPress: () => Alert.alert('Hello') },
      { title: 'Do nothing' },
      { title: 'Disabled', disabled: true },
    ]
    const cancelItem = { title: 'Cancel' }
    ActionSheet.show(items, cancelItem)
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          type="primary"
          size="lg"
          onPress={() => { this.showActionSheet() }}
        >
          <Icon name="twitter" size={30} color="#fff">
            <Text>twitter</Text>
          </Icon>
        </Button>
      </View>
    )
  }
}
