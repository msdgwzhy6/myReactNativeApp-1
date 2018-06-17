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

export default class Teaset extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Teaset'),
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
          type="secondary"
          size="lg"
          title="ActionPopover 操作气泡"
          onPress={() => this.props.navigation.navigate('ActionPopover')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="ActionSheet 操作菜单"
          onPress={() => this.props.navigation.navigate('ActionSheet')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="AlbumView 相册视图"
          onPress={() => this.props.navigation.navigate('AlbumView')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="Badge 徽章"
          onPress={() => this.props.navigation.navigate('Badge')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="Carousel 走马灯"
          onPress={() => this.props.navigation.navigate('Carousel')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="Drawer 抽屉"
          onPress={() => this.props.navigation.navigate('Drawer')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="Checkbox 复选框"
          onPress={() => this.props.navigation.navigate('Checkbox')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="ListRow 列表行"
          onPress={() => this.props.navigation.navigate('ListRow')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="Menu{} 菜单"
          onPress={() => this.props.navigation.navigate('Menu')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="Popover 气泡"
          onPress={() => this.props.navigation.navigate('Popover')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="PullPicker 上拉选择器"
          onPress={() => this.props.navigation.navigate('PullPicker')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="PopoverPicker 气泡选择器"
          onPress={() => this.props.navigation.navigate('PopoverPicker')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="Projector 幻灯机"
          onPress={() => this.props.navigation.navigate('Projector')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="SearchInput 搜索输入框"
          onPress={() => this.props.navigation.navigate('SearchInput')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="Select 选择框"
          onPress={() => this.props.navigation.navigate('Select')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="Stepper 步进器"
          onPress={() => this.props.navigation.navigate('Stepper')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="TabView 标签页"
          onPress={() => this.props.navigation.navigate('TabView')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="Wheel 滚轮"
          onPress={() => this.props.navigation.navigate('Wheel')}
        />
      </ScrollView>
    )
  }
}