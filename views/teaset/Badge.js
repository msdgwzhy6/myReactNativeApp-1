import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Badge } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto',
  },
})

export default class BadgeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Badge'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Badge count={66} style={[styles.margin]} />
        <Badge count={666} style={[styles.margin]} />
        <Badge count={666} maxCount={600} style={[styles.margin]} />
        <Badge type="square" count={66} style={[styles.margin]} />
        <Badge type="dot" />
        <Badge type="square" style={{ backgroundColor: '#5bc0de', paddingLeft: 0, paddingRight: 0 }}>
          <Text style={{ color: '#fff' }}>券</Text>
        </Badge>
        <Badge style={{ backgroundColor: '#777', paddingLeft: 0, paddingRight: 0 }}>
          <Text style={{ color: '#fff' }}>$</Text>
        </Badge>
      </View>
    )
  }
}
