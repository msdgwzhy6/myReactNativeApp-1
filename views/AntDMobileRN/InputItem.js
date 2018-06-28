import React, { Component } from 'react'
import { ScrollView, Alert } from 'react-native'
import {
  InputItem, List, Button, WhiteSpace,
} from 'antd-mobile-rn'

const Item = List.Item

export default class InputItemScreen extends Component {
  static navigationOptions = {
    headerTitle: 'InputItem',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScrollView>
        <WhiteSpace
          size="md" // xs,sm,md,lg,xl
        />
        <List renderHeader="基本">
          <InputItem
            clear
            error
            type="number"
            value={this.state.value}
            extra="元"
            placeholder="有标签"
            onErrorPress={() => Alert.alert('clicked me')}
            onChange={(value) => { this.setState({ value }) }}
          >输入框
          </InputItem>
          <InputItem
            clear
            editable={false}
            value="不可编辑"
            extra="元"
            placeholder="不可编辑"
            onErrorPress={() => { Alert.alert(1) }}
          >输入框
          </InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value) => { this.setState({ value1: value }) }}
            placeholder="无标签"
          />
          <InputItem
            clear
            placeholder="点击下方按钮该输入框会获取光标"
            ref={(c) => { this.inputRef = c }}
          >标题
          </InputItem>
          <Item>
            <Button
              type="primary"
              size="large"
              onClick={() => { this.inputRef.focus() }}
            >点击获取光标
            </Button>
          </Item>
        </List>
        <List renderHeader="固定标签字数">
          <InputItem
            clear
            value={this.state.labelnum1}
            onChange={(value: any) => {
              this.setState({
                labelnum1: value,
              })
            }}
            labelNumber={2}
            placeholder="两个字标签"
          >姓名
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum2}
            labelNumber={3}
            placeholder="三个字标签"
            onChange={(value) => { this.setState({ labelnum2: value }) }}
          >校验码
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum3}
            labelNumber={4}
            placeholder="四个字标签（默认）"
            onChange={(value) => { this.setState({ labelnum3: value }) }}
          >四字标签
          </InputItem>
        </List>
        <List renderHeader="格式">
          <InputItem
            clear
            error
            value={this.state.text}
            placeholder="text"
            onChange={(value) => { this.setState({ text: value }) }}
          >文本输入
          </InputItem>
          <InputItem
            clear
            type="bankCard"
            value={this.state.bankcard}
            placeholder="bankCard"
            onChange={(value) => { this.setState({ bankcard: value }) }}
          >银行卡
          </InputItem>
          <InputItem
            clear
            type="phone"
            value={this.state.phone}
            placeholder="phone"
            onChange={(value) => { this.setState({ phone: value }) }}
          >手机号
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={(value) => { this.setState({ password: value }) }}
          >密码
          </InputItem>
          <InputItem
            clear
            type="number"
            value={this.state.number}
            placeholder="number"
            onChange={(value) => { this.setState({ number: value }) }}
          >数字
          </InputItem>
          <InputItem
            clear
            type="number"
            value={this.state.number}
            placeholder="number"
            onChange={(value) => { this.setState({ number: value }) }}
          >原生数字
          </InputItem>
        </List>
      </ScrollView>
    )
  }
}
