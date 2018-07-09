import React, { Component } from 'react'
import {
  View,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native'
import IMUI from 'aurora-imui-react-native'

const InputView = IMUI.ChatInput
const MessageListView = IMUI.MessageList
const AuroraIMUIController = IMUI.AuroraIMUIController
const window = Dimensions.get('window')

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('user'),
    header: navigation.getParam('header'),
  })

  constructor(props) {
    super(props)
    let initHeight
    if (Platform.OS === 'ios') {
      initHeight = 86
    } else {
      initHeight = 100
    }

    this.state = {
      inputLayoutHeight: initHeight,
      messageListLayout: { flex: 1, width: window.width, margin: 0 },
      inputViewLayout: { width: window.width, height: initHeight },
      isAllowPullToRefresh: true,
      navigationBar: {},
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.ChatInput.setMenuContainerHeight(316)
    }
  }

  onInputViewSizeChange = (size) => {
    console.log(`onInputViewSizeChange height: ${size.height} width: ${size.width}`)
    if (this.state.inputLayoutHeight != size.height) {
      this.setState({
        inputLayoutHeight: size.height,
        inputViewLayout: { width: window.width, height: size.height },
        messageListLayout: { flex: 1, width: window.width, margin: 0 },
      })
    }
  }

  onFullScreen = () => {
    const { navigation } = this.props
    navigation.setParams({ header: null })
    this.setState({
      messageListLayout: { flex: 0, width: 0, height: 0 },
      inputViewLayout: {
        flex: 1, width: window.width, height: window.height, paddingBottom: 20,
      },
    })
  }

  /**
   * Switch to record video mode or not
   */
  switchCameraMode = (isRecordVideoMode) => {
    console.log(`Switching camera mode: isRecordVideoMode: ${isRecordVideoMode}`)
    // If record video mode, then set to full screen.
    if (isRecordVideoMode) {
      this.setState({
        messageListLayout: { flex: 0, width: 0, height: 0 },
        inputViewLayout: { flex: 1, width: window.width, height: window.height },
        navigationBar: { height: 0 },
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageListView
          style={this.state.messageListLayout}
        />
        <InputView
          style={this.state.inputViewLayout}
          ref={(c) => { this.ChatInput = c }}
          onSizeChange={this.onInputViewSizeChange}
          onFullScreen={this.onFullScreen}
          switchCameraMode={this.switchCameraMode}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
