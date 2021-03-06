import React, { Component } from 'react'
import {
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Button, ListRow, ModalIndicator, Toast,
} from 'teaset'
import { FacePlusPlus } from '../../assets/Dictionary'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
})

export default class Face extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Face++'),
  })

  constructor(props) {
    super(props)
    this.state = {
      face: null,
      img: [
        'https://i.loli.net/2018/06/18/5b271a7d6a81e.jpg',
      ],
    }
  }

  async detectFace() {
    const returnAttributes = 'gender,age,ethnicity,beauty'
    try {
      const response = await fetch(`${FacePlusPlus.BaseApi}detect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `api_key=${FacePlusPlus.API_KEY}&api_secret=${FacePlusPlus.API_SECRET}&image_url=${this.state.img[0]}&return_landmark=1&return_attributes=${returnAttributes}`,
      })
      const responseJson = response.json()
      return responseJson
    } catch (err) {
      return err
    }
  }

  detect() {
    ModalIndicator.show('识别中')
    this.detectFace().then((res) => {
      ModalIndicator.hide()
      Toast.success('恭喜你，识别成功')
      const attr = res.faces[0].attributes
      let beauty = null
      if (attr.gender.value == 'Male') {
        beauty = attr.beauty.male_score
      } else {
        beauty = attr.beauty.female_score
      }
      const face = {
        gender: attr.gender.value,
        age: attr.age.value,
        ethnicity: attr.ethnicity.value,
        beauty,
      }
      this.setState({ face })
    }).catch(() => {
      ModalIndicator.hide()
      Toast.fail('识别失败，请重试')
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: this.state.img[0] }}
          style={[styles.img]}
        />
        <ListRow
          title="性别"
          detail={this.state.face ? this.state.face.gender : ''}
        />
        <ListRow
          title="年龄"
          detail={this.state.face ? this.state.face.age : ''}
        />
        <ListRow
          title="种族"
          detail={this.state.face ? this.state.face.ethnicity : ''}
        />
        <ListRow
          title="颜值"
          detail={this.state.face ? this.state.face.beauty : ''}
        />
        <Button
          style={{ marginTop: 20 }}
          type="primary"
          size="lg"
          title="人脸识别"
          onPress={() => { this.detect() }}
        />
      </ScrollView>
    )
  }
}
