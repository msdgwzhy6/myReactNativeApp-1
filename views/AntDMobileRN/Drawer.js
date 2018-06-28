import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Drawer, Flex, Button } from 'antd-mobile-rn'
import SideBar from './SideBar'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default class DrawerScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Drawer',
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this)
  }

  handleCloseDrawer() {
    this.leftDrawer.closeDrawer()
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Drawer
          sidebar={<SideBar closeDrawer={this.handleCloseDrawer} ref={(c) => { this.sideBar = c }} />}
          position="right"
          open={false}
          drawerRef={(el) => { this.leftDrawer = el }}
          drawerBackgroundColor="rgb(145, 238, 249)"
        >
          <Flex style={{ flex: 1 }} justify="center" align="center">
            <Button
              type="primary"
              onClick={() => this.leftDrawer.openDrawer()}
            >Open drawer
            </Button>
          </Flex>
        </Drawer>
      </View>
    )
  }
}
