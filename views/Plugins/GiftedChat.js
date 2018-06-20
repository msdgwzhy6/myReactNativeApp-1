import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import ImageViewer from 'react-native-image-zoom-viewer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class GiftedChatScreen extends Component {
  static navigationOptions = {
    headerTitle: 'GiftedChat',
  }
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      visible: false,
    }
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          image: 'https://i.loli.net/2018/06/20/5b2a36695cf99.png',
        },
      ],
    })
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'skyblue',
          },
          right: {
            backgroundColor: 'pink',
          },
        }}
      />
    )
  }
  render() {
    return (
      <View style={[styles.container]}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onPressAvatar={() => this.showModal()}
          user={{
            _id: 1,
            avatar: 'https://placeimg.com/140/140/any',
          }}
          renderBubble={this.renderBubble}
          showUserAvatar
          showAvatarForEveryMessage
        />
        <ImageViewer
          visible={this.state.visible}
          imageUrls={[{ url: 'https://placeimg.com/140/140/any' }]}
          failImageSource={{
            url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
        />
      </View>
    )
  }
}
