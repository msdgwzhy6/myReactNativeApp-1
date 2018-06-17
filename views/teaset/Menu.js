// Menu 为菜单静态类, 用于触发显示一个弹出菜单供用户选择, 表现形式为从触发源组件弹出的气泡。Menu 基于 Overlay{} 实现。
import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native'
import { Menu, Button } from 'youngjuning-teaset'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class MenuScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Menu'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  showMenu(view, direction, align) {
    view.measure((x, y, width, height, pageX, pageY) => {
      const items = [
        {
          title: 'Search',
          icon: (<Icon name="rocket" size={20} color="#fff" />),
          onPress: () => Alert.alert('Search'),
        },
        {
          title: 'Edit',
          icon: (<Icon name="rocket" size={20} color="#fff" />),
          onPress: () => Alert.alert('Edit'),
        },
        {
          title: 'Remove',
          icon: (<Icon name="rocket" size={20} color="#fff" />),
          onPress: () => Alert.alert('Remove'),
        },
      ]
      Menu.show({
        x: pageX, y: pageY, width, height,
      }, items, {
        direction,
        align,
        showArrow: true,
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          type="primary"
          size="lg"
          ref={(c) => { this.twitterUp = c }}
          title={(<Icon name="twitter" size={20} color="#fff"><Text>twitter up</Text></Icon>)}
          onPress={() => { this.showMenu(this.twitterUp, 'up', 'start') }}
        />
        <Button
          type="primary"
          size="lg"
          ref={(c) => { this.twitterDown = c }}
          title={(<Icon name="twitter" size={20} color="#fff"><Text>twitter down</Text></Icon>)}
          onPress={() => { this.showMenu(this.twitterDown, 'down', 'end') }}
        />
        <Button
          type="primary"
          size="lg"
          ref={(c) => { this.twitterRight = c }}
          title={(<Icon name="twitter" size={20} color="#fff"><Text>twitter right</Text></Icon>)}
          onPress={() => { this.showMenu(this.twitterRight, 'right', 'end') }}
        />
        <Button
          type="primary"
          size="lg"
          ref={(c) => { this.twitterLeft = c }}
          title={(<Icon name="twitter" size={20} color="#fff"><Text>twitter left</Text></Icon>)}
          onPress={() => { this.showMenu(this.twitterLeft, 'left', 'end') }}
        />
      </View>
    )
  }
}
