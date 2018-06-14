import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  Alert,
  StyleSheet,
} from 'react-native'

import HeaderButtons from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginTop: 5,
    marginRight: 'auto',
    marginBottom: 5,
    marginLeft: 'auto',
  },
})

export default class HeaderButton extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'HeaderButtons'),
    headerRight: (
      <HeaderButtons
        IconComponent={Icon}
        iconSize={23}
        color="#fff"
      >
        <HeaderButtons.Item title="select" iconName="edit" onPress={() => Alert.alert('我是顶部编辑按钮')} />
        <HeaderButtons.Item title="select" iconName="search" onPress={() => Alert.alert('我是顶部搜索按钮')} />
      </HeaderButtons>
    ),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Icon name="rocket" size={20} color="pink" style={[styles.icon]}>
          <Text>rocket</Text>
        </Icon>
        <Icon name="bell" size={20} color="pink" style={[styles.icon]}>
          <Text>bell</Text>
        </Icon>
        <Icon name="battery-three-quarters" size={20} color="pink" style={[styles.icon]}>
          <Text>battery-three-quarters</Text>
        </Icon>
        <Icon name="user-circle-o" size={20} color="pink" style={[styles.icon]}>
          <Text>user-circle-o</Text>
        </Icon>
        <Icon name="wifi" size={20} color="pink" style={[styles.icon]}>
          <Text>wifi</Text>
        </Icon>
        <Icon name="user-circle" size={20} color="pink" style={[styles.icon]}>
          <Text>user-circle</Text>
        </Icon>
        <Icon name="weixin" size={20} color="pink" style={[styles.icon]}>
          <Text>weixin</Text>
        </Icon>
        <Icon name="vk" size={20} color="pink" style={[styles.icon]}>
          <Text>vk</Text>
        </Icon>
        <Icon name="weibo" size={20} color="pink" style={[styles.icon]}>
          <Text>weibo</Text>
        </Icon>
        <Icon name="windows" size={20} color="pink" style={[styles.icon]}>
          <Text>windows</Text>
        </Icon>
        <Icon name="safari" size={20} color="pink" style={[styles.icon]}>
          <Text>safari</Text>
        </Icon>
        <Icon name="github" size={20} color="pink" style={[styles.icon]}>
          <Text>github</Text>
        </Icon>
        <Icon name="github-alt" size={20} color="pink" style={[styles.icon]}>
          <Text>github-alt</Text>
        </Icon>
        <Icon name="github-square" size={20} color="pink" style={[styles.icon]}>
          <Text>github-square</Text>
        </Icon>
        <Icon name="git" size={20} color="pink" style={[styles.icon]}>
          <Text>git</Text>
        </Icon>
        <Icon name="git-square" size={20} color="pink" style={[styles.icon]}>
          <Text>git-square</Text>
        </Icon>
        <Icon name="gitlab" size={20} color="pink" style={[styles.icon]}>
          <Text>gitlab</Text>
        </Icon>
        <Icon name="chrome" size={20} color="pink" style={[styles.icon]}>
          <Text>chrome</Text>
        </Icon>
        <Icon name="firefox" size={20} color="pink" style={[styles.icon]}>
          <Text>firefox</Text>
        </Icon>
      </ScrollView>
    )
  }
}
