import React, { Component } from 'react'
import { Alert, ScrollView } from 'react-native'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile-rn'

export default class MyComponent extends Component {
  static navigationOptions = {
    headerTitle: 'Button',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleButtonClick = (e) => {
    console.log(e)
    Alert.alert('点击了按钮')
  }

  render() {
    return (
      <ScrollView size="lg">
        <WhiteSpace size="lg" />
        <Button>default</Button>
        <WhiteSpace size="lg" />
        <Button type="primary">
          primary
        </Button>
        <WhiteSpace size="lg" />
        <Button type="ghost">
          ghost
        </Button>
        <WhiteSpace size="lg" />
        <Button type="warning">
          warning
        </Button>
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
          <Button type="primary" loading>loading button</Button>
          <WhiteSpace size="lg" />
          <Button activeStyle={false}>无点击反馈</Button>
          <WhiteSpace size="lg" />
          <Button type="warning" disabled>disabled button</Button>
          <WhiteSpace size="lg" />
          <Button type="primary" size="small">small button</Button>
          <WhiteSpace size="lg" />
          <Button type="warning" onClick={this.handleButtonClick}>onClick</Button>
        </WingBlank>
      </ScrollView>
    )
  }
}
