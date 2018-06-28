import React, { Component } from 'react'
import { Pagination, WhiteSpace, WingBlank } from 'antd-mobile-rn'

const locale = {
  prevText: '上一页',
  nextText: '下一页',
}
export default class PaginationScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Pagination',
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination
          total={5}
          current={1}
          locale={locale}
        />
        <WhiteSpace size="lg" />
        <Pagination
          simple
          total={5}
          current={1}
          locale={locale}
        />
        <WhiteSpace size="lg" />
        <Pagination
          mode="number"
          total={5}
          current={3}
        />
        <WhiteSpace size="lg" />
        <Pagination
          mode="pointer"
          total={5}
          current={2}
        />
      </WingBlank>
    )
  }
}
