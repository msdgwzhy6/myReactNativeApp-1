import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Button, WingBlank } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class Modal extends Component {
  static navigationOptions = {
    headerTitle: 'React Navigation Modal',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <WingBlank style={[styles.container]} size="sm">
        <Button
          type="primary"
          onClick={() => this.props.navigation.navigate('ModalModal')}
        >打开全屏模式
        </Button>
      </WingBlank>
    )
  }
}

class ModalModal extends React.Component {
  render() {
    return (
      <WingBlank style={[styles.container]} size="sm">
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          type="warning"
          onClick={() => this.props.navigation.goBack()}
        >
          Dismiss
        </Button>
      </WingBlank>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Modal,
    ModalModal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)
export default () => (
  <RootStack />
)