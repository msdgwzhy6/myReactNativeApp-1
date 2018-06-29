import React, { Component } from 'react'
import {
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { WhiteSpace } from 'antd-mobile-rn'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class WhiteSpaceScreen extends Component {
  static navigationOptions = {
    headerTitle: 'WhiteSpace',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          resizeMode="cover"
          source={{ uri: 'https://placeimg.com/640/480/any' }}
          style={{ width, height: 200 }}
        />
        <WhiteSpace size="xl" />
        <Image
          resizeMode="cover"
          source={{ uri: 'https://placeimg.com/640/481/any' }}
          style={{ width, height: 200 }}
        />
      </ScrollView>
    )
  }
}
