import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TabView } from 'teaset'
import Carousel from './Carousel'
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
      <TabView style={styles.container} type="carousel">
        <TabView.Sheet
          title="Carousel"
          icon={require('../../assets/icons/home.png')}
          activeIcon={require('../../assets/icons/home_active.png')}
        >
          <Carousel />
        </TabView.Sheet>
        <TabView.Sheet
          title="ListRow"
          icon={require('../../assets/icons/me.png')}
          activeIcon={require('../../assets/icons/me_active.png')}
          badge={1}
        >
          <ListRow />
        </TabView.Sheet>
      </TabView>
    )
  }
}
