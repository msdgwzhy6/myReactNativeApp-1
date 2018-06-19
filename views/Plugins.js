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
    headerTitle: navigation.getParam('headerTitle', '第三方插件'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <ListRow
          title="react-native-picker"
          detail="A Native Picker with high performance."
          titlePlace="top"
          topSeparator="none"
          bottomSeparator="indent"
          onPress={(indicator) => { this.props.navigation.navigate('ReactNativePicker') }}
        />
      </ScrollView>
    )
  }
}
