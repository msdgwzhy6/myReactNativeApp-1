import React, { Component } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import { Drawer, Flex, Button, WhiteSpace } from 'antd-mobile-rn'

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebar: {
    flex: 1,
    height,
  },
})
export default class DrawerScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onOpenChange = (isOpen) => {
    console.log('是否打开了 Drawer', isOpen.toString())
  }
  render() {
    const sideBar = (
      <Flex justify="center" align="center" style={[styles.sidebar]}>
        <Button
          type="warning"
          onClick={() => this.leftDrawer.closeDrawer()}
        >
          Close Drawer
        </Button>
      </Flex>
    )
    const sideBar1 = (
      <Flex justify="center" align="center" style={[styles.sidebar]}>
        <Button
          type="warning"
          onClick={() => this.rightDrawer.closeDrawer()}
        >
          Close Drawer
        </Button>
      </Flex>
    )
    return (
      <View style={[styles.container]}>
        <WhiteSpace size="xl" />
        <Drawer
          sidebar={sideBar}
          position="left"
          open={false}
          drawerRef={(el) => { this.leftDrawer = el }}
          onOpenChange={this.onOpenChange}
          drawerBackgroundColor="rgb(145, 238, 249)"
        >
          <Flex style={{ flex: 1 }} justify="center" align="center">
            <Button
              type="primary"
              onClick={() => this.leftDrawer.openDrawer()}
            >
              Open drawer
            </Button>
          </Flex>
        </Drawer>
        <WhiteSpace size="xl" />
        <Drawer
          sidebar={sideBar1}
          position="right"
          open={false}
          drawerRef={(el) => { this.rightDrawer = el }}
          onOpenChange={this.onOpenChange}
          drawerBackgroundColor="rgb(145, 238, 249)"
        >
          <Flex style={{ flex: 1 }} justify="center" align="center">
            <Button
              type="primary"
              onClick={() => this.rightDrawer.openDrawer()}
            >
              Open drawer
            </Button>
          </Flex>
        </Drawer>
      </View>
    )
  }
}
