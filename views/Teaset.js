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
    const { navigation } = this.props
    return (
      <ScrollView style={[styles.container]}>
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="teaset 登录页"
          onPress={() => navigation.navigate('tLogin')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="ActionPopover 操作气泡"
          onPress={() => navigation.navigate('ActionPopover')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="ActionSheet 操作菜单"
          onPress={() => navigation.navigate('ActionSheet')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="AlbumView 相册视图"
          onPress={() => navigation.navigate('AlbumView')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="Badge 徽章"
          onPress={() => navigation.navigate('Badge')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="Carousel 走马灯"
          onPress={() => navigation.navigate('Carousel')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="Drawer 抽屉"
          onPress={() => navigation.navigate('Drawer')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="Checkbox 复选框"
          onPress={() => navigation.navigate('Checkbox')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="ListRow 列表行"
          onPress={() => navigation.navigate('ListRow')}
        />
        <Button
          style={[styles.btn]}
          type="secondary"
          size="lg"
          title="Menu{} 菜单"
          onPress={() => navigation.navigate('Menu')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="Popover 气泡"
          onPress={() => navigation.navigate('Popover')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="PullPicker 上拉选择器"
          onPress={() => navigation.navigate('PullPicker')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="PopoverPicker 气泡选择器"
          onPress={() => navigation.navigate('PopoverPicker')}
        />
        <Button
          style={[styles.btn]}
          type="danger"
          size="lg"
          title="SearchInput 搜索输入框"
          onPress={() => navigation.navigate('SearchInput')}
        />
        <Button
          style={[styles.btn]}
          size="lg"
          title="Select 选择框"
          onPress={() => navigation.navigate('Select')}
        />
        <Button
          style={[styles.btn]}
          type="primary"
          size="lg"
          title="Stepper 步进器"
          onPress={() => navigation.navigate('Stepper')}
        />
      </ScrollView>
    )
  }
}
