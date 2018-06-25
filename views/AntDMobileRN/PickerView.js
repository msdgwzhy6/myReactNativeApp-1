import React, { Component } from 'react'
import { PickerView } from 'antd-mobile-rn'

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
    {
      label: '秋',
      value: '秋',
    },
    {
      label: '冬',
      value: '冬',
    },
  ],
]
export default class PickerViewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'PickerView'),
  })
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }
  onChange = (value) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={seasons}
        cols={2}
        cascade={false}
      />
    )
  }
}
