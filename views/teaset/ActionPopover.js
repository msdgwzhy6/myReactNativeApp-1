import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ActionPopover, Button } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class ActionPopoverScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'ActionPopover'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  showActionPopover(view) {
    view.measure((x, y, width, height, pageX, pageY) => {
      const items = [
        { title: 'Copy', onPress: () => Alert.alert('Copy') },
        { title: 'Remove', onPress: () => Alert.alert('Remove') },
        { title: 'Share', onPress: () => Alert.alert('Share') },
      ]
      ActionPopover.show({
        x: pageX, y: pageY, width, height,
      }, items, {
        direction: 'down',
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={{ backgroundColor: '#1da1f2' }}
          ref={(c) => { this.twitter = c }}
          type="primary"
          size="lg"
          onPress={() => this.showActionPopover(this.twitter)}
        >
          <Icon name="twitter" size={30} color="#fff">
            <Text>Twitter</Text>
          </Icon>
        </Button>
      </View>
    )
  }
}
