import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List, TextareaItem } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  contextStyle: {
    flex: 1,
  },
})
export default class TextareaItemScreen extends Component {
  static navigationOptions = {
    headerTitle: 'TextareaItem',
  }

  constructor(props) {
    super(props)
    this.state = {
      val: '默认带value',
    }
  }

  onChange = (val) => {
    this.setState({ val })
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader="基本">
          <TextareaItem rows={4} placeholder="固定行数" />
          <TextareaItem rows={4} placeholder="多行带计数" count={100} />
          <TextareaItem rows={4} placeholder="高度自适应" autoHeight style={{ paddingVertical: 5 }} />
          <TextareaItem value={this.state.val} onChange={this.onChange} />
          <TextareaItem value="不可编辑 editable = {false}" editable={false} />
          <TextareaItem clear={false} placeholder="不显示清除按钮" />
          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => console.log('err')}
          />
        </List>
      </ScrollView>
    )
  }
}
