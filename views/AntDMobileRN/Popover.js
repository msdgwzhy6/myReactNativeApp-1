import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native'
import { Popover } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  contextStyle: {
    margin: 50,
    flex: 1,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 400,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  triggerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  overlayStyle: {
    left: 90,
    marginTop: 20,
  },
  // 在 iOS 上弹出层有阴影，Android 上没有，
  // 详细：http://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  item: {
    backgroundColor: '#efeff4',
  },
})

export default class PopoverScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Popover',
  }
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
    }
  }
  onSelect = (value) => {
    this.setState({
      selected: value,
    })
  }
  render() {
    const overlay = [
      <Popover.Item key="1" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Popover.Item>,
      <Popover.Item key="2" value="编辑">
        <Text style={{ color: '#ddd' }}>Edit</Text>
      </Popover.Item>,
      <Popover.Item key="3" value="button ct" style={[styles.item]}>
        <Text>关闭</Text>
      </Popover.Item>,
    ]
    return (
      <View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 100 }}>
            选择了：{this.state.selected}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <Popover
            name="m"
            style={{ backgroundColor: '#eee' }}
            overlay={overlay}
            contextStyle={styles.contextStyle}
            overlayStyle={[
              styles.overlayStyle,
              Platform.OS === 'android' && styles.androidOverlayStyle,
            ]}
            triggerStyle={styles.triggerStyle}
            onSelect={this.onSelect}
          >
            <Text>菜单</Text>
          </Popover>
        </View>
      </View>
    )
  }
}
