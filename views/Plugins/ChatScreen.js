import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  Platform,
} from 'react-native'

import IMUI from 'aurora-imui-react-native'

const RNFS = require('react-native-fs')

const InputView = IMUI.ChatInput
const MessageListView = IMUI.MessageList
const AuroraIMUIController = IMUI.AuroraIMUIController
const window = Dimensions.get('window')

let themsgid = 1
const photoPathArr = []
const msgIdArr = []

function constructNormalMessage() {
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

class CustomVew extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (<img src={`${RNFS.MainBundlePath}/default_header.png`} />)
  }
}

export default class TestRNIMUI extends Component {
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


    this.updateLayout = this.updateLayout.bind(this)
    this.onMsgClick = this.onMsgClick.bind(this)
    this.messageListDidLoadEvent = this.messageListDidLoadEvent.bind(this)
  }

  componentDidMount() {
    /**
     * Android only
     * Must set menu height once, the height should be equals with the soft keyboard height so that the widget won't flash.
     * 在别的界面计算一次软键盘的高度，然后初始化一次菜单栏高度，如果用户唤起了软键盘，则之后会自动计算高度。
     */
    if (Platform.OS === 'android') {
      this.refs.ChatInput.setMenuContainerHeight(316)
    }
    this.resetMenu()
    AuroraIMUIController.addMessageListDidLoadListener(this.messageListDidLoadEvent)
  }

  componentWillUnmount() {
    AuroraIMUIController.removeMessageListDidLoadListener(this.messageListDidLoadEvent)
  }

  getHistoryMessage() {
    const messages = []
    for (let i = 0; i < 10; i++) {
      // var message = constructNormalMessage()
      // message.msgType = "text"
      // message.text = "" + i
      // if (i%2 == 0)  {
      //   message.isOutgoing = false
      // }
      const message = constructNormalMessage()
      message.msgType = 'custom'

      if (Platform.OS === 'ios') {
        message.content = `
        <h5>This is a custom message. </h5>
        <img src="file://${RNFS.MainBundlePath}/default_header.png"/>
        `
      } else {
        message.content = '<body bgcolor="#ff3399"><h5>This is a custom message. </h5>\
        <img src="/storage/emulated/0/XhsEmoticonsKeyboard/Emoticons/wxemoticons/icon_040_cover.png"></img></body>'
      }

      const eventMessage = constructNormalMessage()
      eventMessage.msgType = 'event'
      eventMessage.text = 'fsadfad'

      message.contentSize = { height: 100, width: 200 }
      message.extras = { extras: 'fdfsf' }
      AuroraIMUIController.appendMessages([message, eventMessage])
      AuroraIMUIController.scrollToBottom(true)
    }
  }

  messageListDidLoadEvent() {
    this.getHistoryMessage()
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

  resetMenu() {
    if (Platform.OS === 'android') {
      this.refs.ChatInput.showMenu(false)
      this.setState({
        messageListLayout: { flex: 1, width: window.width, margin: 0 },
        navigationBar: { height: 64, justifyContent: 'center' },
      })
      this.forceUpdate()
    } else {
      AuroraIMUIController.hidenFeatureView(true)
    }
  }

  /**
   * Android need this event to invoke onSizeChanged
   */
  onTouchEditText = () => {
    this.refs.ChatInput.showMenu(false)
  }

  onFullScreen = () => {
    console.log('on full screen')
    this.setState({
      messageListLayout: { flex: 0, width: 0, height: 0 },
      inputViewLayout: { flex: 1, width: window.width, height: window.height },
      navigationBar: { height: 0 },
    })
  }

  onRecoverScreen = () => {
    // this.setState({
    //   inputLayoutHeight: 100,
    //   messageListLayout: { flex: 1, width: window.width, margin: 0 },
    //   inputViewLayout: { flex: 0, width: window.width, height: 100 },
    //   navigationBar: { height: 64, justifyContent: 'center' }
    // })
  }

  onAvatarClick = (message) => {
    Alert.alert()
    AuroraIMUIController.removeMessage(message.msgId)
  }

  onMsgClick(message) {
    console.log(message)
    Alert.alert('message', JSON.stringify(message))
  }

  onMsgLongClick = (message) => {
    Alert.alert('message bubble on long press', 'message bubble on long press')
  }

  onStatusViewClick = (message) => {
    message.status = 'send_succeed'
    AuroraIMUIController.updateMessage(message)
  }

  onBeginDragMessageList = () => {
    this.resetMenu()
    AuroraIMUIController.hidenFeatureView(true)
  }

  onTouchMsgList = () => {
    AuroraIMUIController.hidenFeatureView(true)
  }

  onPullToRefresh = () => {
    console.log('on pull to refresh')
    const messages = []
    for (let i = 0; i < 14; i++) {
      const message = constructNormalMessage()
      // if (index%2 == 0) {
      message.msgType = 'text'
      message.text = `${i}`
      // }

      if (i % 3 == 0) {
        message.msgType = 'video'
        message.text = `${i}`
        message.mediaPath = '/storage/emulated/0/ScreenRecorder/screenrecorder.20180323101705.mp4'
        message.duration = 12
      }
      messages.push(message)
    }
    AuroraIMUIController.insertMessagesToTop(messages)
    if (Platform.OS === 'android') {
      this.refs.MessageList.refreshComplete()
    }
  }

  onSendText = (text) => {
    const message = constructNormalMessage()
    const evenmessage = constructNormalMessage()

    message.msgType = 'text'
    message.text = text

    AuroraIMUIController.appendMessages([message])
  }

  onTakePicture = (media) => {
    console.log(`media ${JSON.stringify(media)}`)
    const message = constructNormalMessage()
    message.msgType = 'image'
    message.mediaPath = media.mediaPath
    AuroraIMUIController.appendMessages([message])
    this.resetMenu()
    AuroraIMUIController.scrollToBottom(true)
    // photoPathArr.push(message.mediaPath)
    // msgIdArr.push(message.msgId)
  }

  onStartRecordVoice = (e) => {
    console.log('on start record voice')
  }

  onFinishRecordVoice = (mediaPath, duration) => {
    const message = constructNormalMessage()
    message.msgType = 'voice'
    message.mediaPath = mediaPath
    message.timeString = 'safsdfa'
    message.duration = duration
    AuroraIMUIController.appendMessages([message])
    console.log('on finish record voice')
  }

  onCancelRecordVoice = () => {
    console.log('on cancel record voice')
  }

  onStartRecordVideo = () => {
    console.log('on start record video')
  }

  onFinishRecordVideo = (video) => {
    // var message = constructNormalMessage()

    // message.msgType = "video"
    // message.mediaPath = video.mediaPath
    // message.duration = video.duration
    // AuroraIMUIController.appendMessages([message])
  }

  onSendGalleryFiles = (mediaFiles) => {
    /**
     * WARN: This callback will return original image,
     * if insert it directly will high memory usage and blocking UI。
     * You should crop the picture before insert to messageList。
     *
     * WARN: 这里返回的是原图，直接插入大会话列表会很大且耗内存.
     * 应该做裁剪操作后再插入到 messageListView 中，
     * 一般的 IM SDK 会提供裁剪操作，或者开发者手动进行裁剪。
     *
     * 代码用例不做裁剪操作。
     */
    Alert.alert('fas', JSON.stringify(mediaFiles))
    for (index in mediaFiles) {
      const message = constructNormalMessage()
      if (mediaFiles[index].mediaType == 'image') {
        message.msgType = 'image'
        photoPathArr.push(mediaFiles[index].mediaPath)
        msgIdArr.push(message.msgId)
      } else {
        message.msgType = 'video'
        message.duration = mediaFiles[index].duration
      }

      message.mediaPath = mediaFiles[index].mediaPath
      message.timeString = '8:00'
      message.status = 'send_going'
      AuroraIMUIController.appendMessages([message])
      AuroraIMUIController.scrollToBottom(true)
    }

    this.resetMenu()
  }

  onSwitchToMicrophoneMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  onSwitchToEmojiMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  onSwitchToGalleryMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  onSwitchToCameraMode = () => {
    AuroraIMUIController.scrollToBottom(true)
  }

  onShowKeyboard = (keyboard_height) => {
  }

  updateLayout(layout) {
    this.setState({ inputViewLayout: layout })
  }

  onInitPress() {
    console.log('on click init push ')
    this.updateAction()
  }

  onClickSelectAlbum = () => {
    console.log('on click select album')
  }

  onCloseCamera = () => {
    console.log('On close camera event')
    this.setState({
      inputLayoutHeight: 100,
      messageListLayout: { flex: 1, width: window.width, margin: 0 },
      inputViewLayout: { flex: 0, width: window.width, height: 100 },
      navigationBar: { height: 64, justifyContent: 'center' },
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
          ref="MessageList"
          isAllowPullToRefresh
          onAvatarClick={this.onAvatarClick}
          onMsgClick={this.onMsgClick}
          onStatusViewClick={this.onStatusViewClick}
          onTouchMsgList={this.onTouchMsgList}
          onTapMessageCell={this.onTapMessageCell}
          onBeginDragMessageList={this.onBeginDragMessageList}
          onPullToRefresh={this.onPullToRefresh}
          avatarSize={{ width: 50, height: 50 }}
          avatarCornerRadius={25}
          messageListBackgroundColor="#f3f3f3"
          sendBubbleTextSize={18}
          sendBubbleTextColor="#000000"
          sendBubblePadding={{ left: 10, top: 10, right: 15, bottom: 10 }}
          datePadding={{ left: 5, top: 5, right: 5, bottom: 5 }}
          dateBackgroundColor="#F3F3F3"
          photoMessageRadius={5}
          videoDurationTextColor="#ffffff"
        />
        <InputView
          style={this.state.inputViewLayout}
          ref="ChatInput"
          onSendText={this.onSendText}
          onTakePicture={this.onTakePicture}
          onStartRecordVoice={this.onStartRecordVoice}
          onFinishRecordVoice={this.onFinishRecordVoice}
          onCancelRecordVoice={this.onCancelRecordVoice}
          onStartRecordVideo={this.onStartRecordVideo}
          onFinishRecordVideo={this.onFinishRecordVideo}
          onSendGalleryFiles={this.onSendGalleryFiles}
          onSwitchToEmojiMode={this.onSwitchToEmojiMode}
          onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
          onSwitchToGalleryMode={this.onSwitchToGalleryMode}
          onSwitchToCameraMode={this.onSwitchToCameraMode}
          onShowKeyboard={this.onShowKeyboard}
          onTouchEditText={this.onTouchEditText}
          onFullScreen={this.onFullScreen}
          onRecoverScreen={this.onRecoverScreen}
          onSizeChange={this.onInputViewSizeChange}
          closeCamera={this.onCloseCamera}
          switchCameraMode={this.switchCameraMode}
          showSelectAlbumBtn
          onClickSelectAlbum={this.onClickSelectAlbum}
          inputPadding={{ left: 30, top: 10, right: 10, bottom: 10 }}
          galleryScale={0.6}// default = 0.5
          compressionQuality={0.6}
          hideCameraButton={false}
          customLayoutItems={{
            left: [],
            right: [],
            bottom: ['voice', 'gallery', 'emoji', 'camera', 'send'],
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  sendCustomBtn: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputView: {
    backgroundColor: 'green',
    width: window.width,
    height: 100,
  },
  btnStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3e83d7',
    borderRadius: 8,
    backgroundColor: '#3e83d7',
  },
})
