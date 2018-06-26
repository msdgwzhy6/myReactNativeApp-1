import React, { Component } from 'react'
import { Text } from 'react-native'
import { QRScannerView } from 'ac-qrcode'
import { Toast } from 'antd-mobile-rn'

export default class AcQrcode extends Component {
  static navigationOptions = {
    headerTitle: 'ac-qrcode',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  barcodeReceived(e) {
    Toast.info(`Type: ${e.type}\nData: ${e.data}`)
  }
  renderTitleBar() {
    return (
      <Text
        style={{
          color: 'white',
          textAlignVertical: 'center',
          textAlign: 'center',
          font: 20,
          padding: 12,
        }}
      >这里添加标题
      </Text>
    )
  }
  renderMenu() {
    return (
      <Text
        style={{
          color: 'white',
          textAlignVertical: 'center',
          textAlign: 'center',
          font: 20,
          padding: 12,
        }}
      >这里添加底部菜单
      </Text>
    )
  }
  render() {
    return (
      <QRScannerView
        onScanResultReceived={e => this.barcodeReceived(e)}
        renderTopBarView={() => this.renderTitleBar()}
        renderBottomMenuView={() => this.renderMenu()}
      />
    )
  }
}
