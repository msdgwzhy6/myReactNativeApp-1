import React, { Component } from 'react'
import { View, Alert, StyleSheet } from 'react-native'

import { GiftedChat, Bubble } from 'react-native-gifted-chat'

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
    const { messages } = this.state
    return (
      <View style={[styles.container]}>
        <GiftedChat
          messages={messages}
          onSend={message => this.onSend(message)}
          onPressAvatar={() => Alert.alert('点击了头像')}
          user={{
            _id: 1,
            avatar: 'https://placeimg.com/140/140/any',
          }}
          renderBubble={this.renderBubble}
          showUserAvatar
          showAvatarForEveryMessage
        />
      </View>
    )
  }
}
