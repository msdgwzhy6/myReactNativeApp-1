import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TabView } from 'teaset'
import Home from '../Home'
import ListRow from './ListRow'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class TabViewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'TabView'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <TabView style={styles.container} type="projector">
        <TabView.Sheet
          title="Home"
          icon={require('../../icons/home.png')}
          activeIcon={require('../../icons/home_active.png')}
        >
          <Home />
        </TabView.Sheet>
        <TabView.Sheet
          title="ListRow"
          icon={require('../../icons/me.png')}
          activeIcon={require('../../icons/me_active.png')}
          badge={1}
        >
          <ListRow />
        </TabView.Sheet>
      </TabView>
    )
  }
}
