// ListRow 组件用于显示一个列表行, 定义了一系列易于使用的元素属性, 使得可以快速开发出基于 ListView、ScrollView 的应用。
import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import { ListRow, Theme } from 'teaset'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})

export default class ListRowScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'ListRow'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <ListRow
          title="杨俊宁"
          detail="UI、百度图表、面部识别调研"
          icon={(<Icon name="rocket" size={30} color={Theme.primaryColor} />)}
          topSeparator="full"
          bottomSeparator="full"
        />
        <ListRow
          title="杨俊宁"
          detail="Swipe to show action buttons"
          icon={(<Icon name="rocket" size={30} color={Theme.primaryColor} />)}
          topSeparator="full"
          bottomSeparator="full"
          swipeActions={[
            <ListRow.SwipeActionButton
              title="Cancel"
              onPress={() => { Alert.alert('Cancel') }}
            />,
            <ListRow.SwipeActionButton
              title="Remove"
              type="danger"
              onPress={() => { Alert.alert('Remove') }}
            />,
          ]}
        />
        <ListRow
          title="杨俊宁"
          detail="UI、百度图表、面部识别调研"
          icon={(<Icon name="rocket" size={30} color={Theme.primaryColor} />)}
          accessory="indicator"
          topSeparator="full"
          bottomSeparator="full"
        />
        <ListRow
          title="杨俊宁"
          detail="UI、百度图表、面部识别调研"
          icon={(<Icon name="rocket" size={30} color={Theme.primaryColor} />)}
          accessory="check"
          topSeparator="full"
          bottomSeparator="full"
        />
        <ListRow
          title="杨俊宁"
          detail="UI、百度图表、面部识别调研"
          icon={(<Icon name="rocket" size={30} color={Theme.primaryColor} />)}
          topSeparator="full"
          bottomSeparator="full"
          onPress={(event, indicator) => { Alert.alert('点击了该组件') }}
        />
        <ListRow
          title="杨俊宁"
          titlePlace="top"
          detail="React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React."
          topSeparator="full"
          bottomSeparator="full"
        />
      </View>
    )
  }
}
