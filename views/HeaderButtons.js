import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import HeaderButtons from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btns: {
    flexDirection: 'row',
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
        <HeaderButtons.Item title="select" iconName="edit" />
        <HeaderButtons.Item title="select" iconName="search" />
      </HeaderButtons>
    ),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#900" />
        <Text>I am the HeaderButton component</Text>
      </View>
    )
  }
}
