import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Label,
  Button,
  Drawer,
  Theme,
} from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class DrawerScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Drawer'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  openDrawer() {
    const view = (
      <View style={{ backgroundColor: Theme.defaultColor, height: 260, width: '100%' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Icon
            name="close"
            size={30}
            color={Theme.primaryColor}
            style={{ position: 'absolute', right: 8, top: 8 }}
            onPress={() => { this.closeDrawer() }}
          />
          <Label type="danger" size="xl" text="Drawer" />
        </View>
      </View>
    )
    this.state.drawer = Drawer.open(view, 'bottom')
  }
  closeDrawer() {
    this.state.drawer.close()
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          type="primary"
          size="lg"
          title="打开抽屉"
          onPress={() => { this.openDrawer() }}
        />
      </View>
    )
  }
}
