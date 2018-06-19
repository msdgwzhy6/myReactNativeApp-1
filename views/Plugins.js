import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import { ListRow } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    margin: 10,
  },
})

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', '首页'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <ListRow
          title="Title"
          detail="detail"
          topSeparator="none"
          bottomSeparator="full"
          onPress={(indicator) => { }}
        />
        <ListRow
          title="Title"
          detail="detail"
          onPress={(indicator) => { }}
        />
      </ScrollView>
    )
  }
}
