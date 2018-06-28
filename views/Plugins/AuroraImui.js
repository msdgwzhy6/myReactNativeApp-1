import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native'
import RNFS from 'react-native-fs'
import IMUI from 'aurora-imui-react-native'

const AuroraIController = IMUI.AuroraIMUIController // the IMUI controller, use it to operate  messageList and ChatInput.
const window = Dimensions.get('window')
const MessageList = IMUI.MessageList
const ChatInput = IMUI.ChatInput

let themsgid = 1
const photoPathArr = []
const msgIdArr = []

const constructNormalMessage = () => {
  const message = {}
  message.msgId = themsgid.toString()
  themsgid += 1
  message.status = 'send_succeed'
  message.isOutgoing = true
  const date = new Date()
  message.timeString = `${date.getHours()}:${date.getMinutes()}`
  const user = {
    userId: '',
    displayName: 'replace your nickname',
    avatarPath: 'images',
  }
  if (Platform.OS === 'ios') {
    user.avatarPath = `${RNFS.MainBundlePath}/default_header.png`
  }
  message.fromUser = user

  return message
}

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSendText = (text) => {
    const message = constructNormalMessage()
    const evenmessage = constructNormalMessage()

    message.msgType = 'text'
    message.text = text

    AuroraIController.appendMessages([message])
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageList
          style={[styles.messageList]}
        />
        <ChatInput
          style={[styles.chatInput]}
          ref={(c) => { this.chatInput = c }}
          onSendText={this.onSendText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageList: {
    flex: 1,
    width: window.width,
    margin: 0,
  },
  chatInput: {
    backgroundColor: 'green',
    width: window.width,
    height: 100,
  },
})
