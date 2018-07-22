import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { ListRow, Label } from 'teaset'
import Picker from 'react-native-picker'
import area from 'react-native-picker-area-json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class ReactNativePicker extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', 'react native picker'),
  })

  constructor(props) {
    super(props)
    this.hero = ['蜘蛛侠', '钢铁侠', '美国队长', '黑寡妇', '幻视', '死侍', '奇异博士', '蚁人', '鹰眼', '绿巨人', '金刚狼']
    this.state = {}
  }

  createAreaData() {
    const data = []
    const len = area.length
    for (let i = 0; i < len; i++) {
      const city = []
      for (let j = 0, cityLen = area[i].city.length; j < cityLen; j++) {
        const _city = {}
        _city[area[i].city[j].name] = area[i].city[j].area
        city.push(_city)
      }

      const _data = {}
      _data[area[i].name] = city
      data.push(_data)
    }
    return data
  }

  showHeroPicker() {
    Picker.init({
      pickerData: this.hero,
      selectedValue: ['钢铁侠'],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '复仇者联盟',
      onPickerConfirm: (hero) => {
        this.setState({
          hero: hero[0],
        })
      },
      // onPickerCancel: (hero) => {
      //   Alert.alert(hero[0])
      // },
      // onPickerSelect: (hero) => {
      //   Alert.alert(hero[0])
      // },
    })
    Picker.show()
  }

  showAreaPicker() {
    Picker.init({
      pickerData: this.createAreaData(),
      selectedValue: ['河南', '许昌', '襄城县'],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '三级联动',
      onPickerConfirm: (pickedValue) => {
        console.log(pickedValue)
        this.setState({
          area: `${pickedValue[0]} ${pickedValue[1]} ${pickedValue[2]}`,
        })
      },
      onPickerCancel: (pickedValue) => {
        console.log('area', pickedValue)
      },
      onPickerSelect: (pickedValue) => {
        // Picker.select(['河南', '许昌', '襄城县'])
        console.log('area', pickedValue)
      },
    })
    Picker.show()
  }

  render() {
    return (
      <View style={styles.container}>
        <Label
          style={{ paddingTop: 10, paddingBottom: 10, textAlign: 'center' }}
          type="title"
          size="md"
          text="时间选择器（配置繁琐）、地区选择器（基于area.json）、普通选择器（还行）"
          numberOfLines={3}
        />
        <ListRow
          title="你最喜欢的漫威英雄"
          titlePlace="left"
          detail={this.state.hero ? this.state.hero : '请选择'}
          topSeparator="full"
          bottomSeparator="full"
          accessory="indicator"
          onPress={() => { this.showHeroPicker() }}
        />
        <ListRow
          title="你的家乡"
          titlePlace="left"
          detail={this.state.area ? this.state.area : '请选择'}
          topSeparator="full"
          bottomSeparator="full"
          accessory="indicator"
          onPress={() => { this.showAreaPicker() }}
        />
      </View>
    )
  }
}
