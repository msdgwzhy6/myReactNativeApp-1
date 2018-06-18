import React, { Component } from 'react'
import {
  ScrollView,
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

export default class AntDMobileRN extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'AntDMobileRN'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <Button
          style={[styles.btn]}
          size="lg"
          title="DatePicker"
          onPress={() => this.props.navigation.navigate('AntDDatePicker')}
        />
      </ScrollView>
    )
  }
}
