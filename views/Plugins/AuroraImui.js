import React, { Component } from 'react'
import {
  View,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native'
import IMUI from 'aurora-imui-react-native'
import ChatModel from './ChatModel'

const window = Dimensions.get('window')
let initHeight
if (Platform.OS === 'ios') {
  initHeight = 86
} else {
  initHeight = 100
}
const resetLayout = {
  inputLayoutHeight: initHeight,
  messageListLayout: { flex: 1, width: window.width, marginTop: 10 },
  inputViewLayout: { flex: 0, width: window.width, height: initHeight },
}
const fullScreenLayout = {
  messageListLayout: { flex: 0, width: 0, height: 0 },
  inputViewLayout: { flex: 1, width: window.width, height: window.height },
}
const InputView = IMUI.ChatInput
const MessageListView = IMUI.MessageList
const AuroraIMUIController = IMUI.AuroraIMUIController

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('user'),
    header: navigation.getParam('header'),
    headerStyle: navigation.getParam('headerStyle', { backgroundColor: 'rgb(85, 163, 223)', height: 64 }),
  })

  constructor(props) {
    super(props)
    this.state = {
      layout: resetLayout,
      isShowHeader: true,
    }
  }

  componentDidMount() {
    this.ChatInput.showMenu(false)
    if (Platform.OS === 'android') {
      this.ChatInput.setMenuContainerHeight(316)
    }
  }

  // Android needs this event to invoke onSizeChange
  onTouchEditText = () => {
    this.ChatInput.showMenu(false)
  }

  // 输入组件尺寸变更时触发，用于输入模式切换。
  onSizeChange = (size) => {
    console.log(`onSizeChange height: ${size.height} width: ${size.width}`)
    if (!this.state.isShowHeader) {
      this.props.navigation.setParams({
        headerStyle: {
          display: 'flex',
          backgroundColor: 'rgb(85, 163, 223)',
        },
      })
    }
    if (this.state.inputLayoutHeight != size.height) {
      this.setState({
        layout: {
          inputLayoutHeight: size.height,
          inputViewLayout: { width: window.width, height: size.height },
          messageListLayout: { flex: 1, width: window.width, marginTop: 10 },
        },
      })
    }
  }

  onFullScreen = () => {
    console.log('onFullScreen')
    this.props.navigation.setParams({
      headerStyle: {
        display: 'none',
      },
    })
    this.setState({
      isShowHeader: false,
      layout: fullScreenLayout,
    })
  }

  onCloseCamera = () => {
    console.log('onCloseCamera')
  }

  // 切换到麦克风模式
  onSwitchToMicrophoneMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  // 开始录音
  onStartRecordVoice = () => {
    console.log('on start record voice')
  }

  // 松开录音按钮或者在预览页面点击发送
  onFinishRecordVoice = (mediaPath, duration) => {
    console.log('on finish record voice')
    const message = ChatModel.constructNormalMessage({
      msgType: 'voice',
      mediaPath,
      duration,
    })
    AuroraIMUIController.appendMessages([message])
  }

  // 取消录音
  onCancelRecordVoice = () => {
    console.log('on cancel record voice')
  }

  // 切换到图廊模式
  onSwitchToGalleryMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  // 点击发送图廊选中的文件
  onSendGalleryFiles = (mediaFiles) => {
    /**
     *
     * WARN: 这里返回的是原图，直接插入大会话列表会很大且耗内存.
     * 应该做裁剪操作后再插入到 messageListView 中，
     * 一般的 IM SDK 会提供裁剪操作，或者开发者手动进行裁剪。
     *
     */
    console.log('onSendGalleryFiles')
    mediaFiles.forEach((item) => {
      let message = null
      if (item.mediaType === 'image') {
        message = ChatModel.constructNormalMessage({
          msgType: 'image',
          mediaPath: item.mediaPath,
        })
      } else {
        message = ChatModel.constructNormalMessage({
          msgType: 'video',
          mediaPath: item.mediaPath,
          duration: item.duration,
        })
      }
      AuroraIMUIController.appendMessages([message])
      AuroraIMUIController.scrollToBottom(true)
    })

    this.resetMenu()
  }

  // 切换到照相机模式
  onSwitchToCameraMode = () => {
    this.resetMenu()
    // AuroraIMUIController.scrollToBottom(true)
  }

  // 点击拍照按钮触发
  onTakePicture = (media) => {
    console.log('onTakePicture', media)
    const message = ChatModel.constructNormalMessage({
      msgType: 'image',
      mediaPath: media.mediaPath,
    })
    AuroraIMUIController.appendMessages([message])
    AuroraIMUIController.scrollToBottom(true)
    this.resetMenu()
  }

  // 点击录制视频按钮触发。
  onStartRecordVideo = () => {
    console.log('on start record video')
  }

  // 完成录制视频触发
  onFinishRecordVideo = (video) => {
    console.log('onFinishRecordVideo', video)
    const message = ChatModel.constructNormalMessage({
      msgType: 'video',
      mediaPath: video.mediaPath,
      duration: video.duration,
    })
    AuroraIMUIController.appendMessages([message])
    AuroraIMUIController.scrollToBottom(true)
    this.resetMenu()
  }

  onCancelRecordVideo = () => {
    console.log('on cancel record voice')
  }

  // 切换到 Emoji模式
  onSwitchToEmojiMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  onSwitchToGalleryMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  // send text、emoji
  onSendText = (text) => {
    const message = ChatModel.constructNormalMessage({
      msgType: 'text',
      text,
    })
    AuroraIMUIController.appendMessages([message])
    AuroraIMUIController.scrollToBottom(true)
    this.resetMenu()
  }

  resetMenu() {
    if (Platform.OS === 'android') {
      this.ChatInput.showMenu(false)
      this.setState({
        layout: resetLayout,
      })
      this.forceUpdate()
    } else {
      AuroraIMUIController.hidenFeatureView(true)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MessageListView
          style={this.state.layout.messageListLayout}
          isShowDisplayName
        />
        <InputView
          style={this.state.layout.inputViewLayout}
          ref={(c) => { this.ChatInput = c }}
          onTouchEditText={this.onTouchEditText}
          onSizeChange={this.onSizeChange}
          onFullScreen={this.onFullScreen}
          onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
          onStartRecordVoice={this.onStartRecordVoice}
          onFinishRecordVoice={this.onFinishRecordVoice}
          onSwitchToGalleryMode={this.onSwitchToGalleryMode}
          onSendGalleryFiles={this.onSendGalleryFiles}
          onSwitchToCameraMode={this.onSwitchToCameraMode}
          onTakePicture={this.onTakePicture}
          onStartRecordVideo={this.onStartRecordVideo}
          closeCamera={this.onCloseCamera}
          onSwitchToEmojiMode={this.onSwitchToEmojiMode}
          onSendText={this.onSendText}
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
