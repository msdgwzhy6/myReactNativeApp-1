import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Button } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    title: navigation.getParam('title', '首页'),
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.btn]}
          type="default"
          size="lg"
          title="默认按钮"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="主按钮"
          onP
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="次按钮"
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="危险按钮"
        />
        <Button
          style={[styles.btn]}
          type="link"
          size="lg"
          title="链接按钮"
        />
      </View>
    )
  }
}
