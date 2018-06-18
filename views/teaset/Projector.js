// Projector 组件定义一个幻灯机组件, 这是一个自动保持状态的多页显示组件, 并且具有视图缓存功能的, 切换页面就像切换幻灯机胶片一样, 原页面的内容和状态不会消失, 再切换回这个页面时原样呈现而无需重新渲染。
import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Projector, Label, Input, Button, ListRow } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class ProjectorScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Projector'),
  })
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }
  renderSlide(color) {
    return (
      <View style={{
 backgroundColor: color, padding: 30, flex: 1, alignItems: 'center', justifyContent: 'center',
}}
      >
        <Label text="Enter something" />
        <View style={{ height: 12 }} />
        <View><Input style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 200 }} /></View>
      </View>
    )
  }
  renderButton(i) {
    return (
      <Button
        title={i}
        type={this.state.index == i ? 'primary' : 'default'}
        onPress={() => this.setState({ index: i })}
      />
    )
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Projector style={{ height: 238, marginBottom: 20 }} index={this.state.index}>
          {this.renderSlide('#dff0d8')}
          {this.renderSlide('#d9edf7')}
          {this.renderSlide('#fcf8e3')}
          {this.renderSlide('#f2dede')}
        </Projector>
        <ListRow
          title="Slide no"
          detail={
            <View style={{
 flex: 1, flexDirection: 'row', justifyContent: 'space-around',
}}
            >
              {this.renderButton(0)}
              {this.renderButton(1)}
              {this.renderButton(2)}
              {this.renderButton(3)}
            </View>
          }
          topSeparator="full"
          bottomSeparator="full"
        />
      </ScrollView>
    )
  }
}
