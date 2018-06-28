import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
// 注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能
import { ImagePicker, WhiteSpace } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default class ImagePickerScreen extends Component {
  static navigationOptions = {
    headerTitle: 'ImgaePicker',
  }

  constructor(props) {
    super(props)
    this.state = {
      files: [
        {
          url: 'https://placeimg.com/200/200/any',
          id: '2121',
        },
        {
          url: 'https://placeimg.com/200/201/any',
          id: '2122',
        },
        {
          url: 'https://placeimg.com/200/202/any',
          id: '2123',
        },
      ],
      files2: [],
    }
  }

  handleFileChange = (files) => {
    this.setState({ files })
  }

  handleFile2Change = (files2) => {
    this.setState({ files2 })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImagePicker
          files={this.state.files}
          onChange={this.handleFileChange}
          onImageClick={() => Alert.alert('点击了图片')}
        />
        <WhiteSpace />
        <ImagePicker
          multiple
          files={this.state.files2}
          onChange={this.handleFile2Change}
        />
      </View>
    )
  }
}
