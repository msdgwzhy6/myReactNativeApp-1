import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { Carousel } from 'teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class CarouselScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Carousel'),
  })
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[{ textAlign: 'center', paddingTop: 5, paddingBottom: 5 }]}>简单用法</Text>
        <Carousel
          style={{ height: 238 }}
          control
        >
          <Image
            style={{ width: 375, height: 238 }}
            resizeMode="cover"
            source={{ uri: 'https://i.loli.net/2018/06/14/5b224c61c88ad.jpg' }}
          />
          <Image
            style={{ width: 375, height: 238 }}
            resizeMode="cover"
            source={{ uri: 'https://i.loli.net/2018/06/14/5b224c41b11e3.jpg' }}
          />
          <Image
            style={{ width: 375, height: 238 }}
            resizeMode="cover"
            source={{ uri: 'https://i.loli.net/2018/06/14/5b224c2796d93.jpg' }}
          />
        </Carousel>
        <Text style={[{ textAlign: 'center', paddingTop: 5, paddingBottom: 5 }]}>自定义页面控制器</Text>
        <Carousel
          style={{ height: 238 }}
          control={
            <Carousel.Control
              style={{ alignItems: 'flex-end' }}
              dot={<Text style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4 }}>□</Text>}
              activeDot={<Text style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4 }}>■</Text>}
            />
          }
        >
          <Image
            style={{ width: 375, height: 238 }}
            resizeMode="cover"
            source={{ uri: 'https://i.loli.net/2018/06/14/5b224c61c88ad.jpg' }}
          />
          <Image
            style={{ width: 375, height: 238 }}
            resizeMode="cover"
            source={{ uri: 'https://i.loli.net/2018/06/14/5b224c41b11e3.jpg' }}
          />
          <Image
            style={{ width: 375, height: 238 }}
            resizeMode="cover"
            source={{ uri: 'https://i.loli.net/2018/06/14/5b224c2796d93.jpg' }}
          />
        </Carousel>
      </View>
    )
  }
}
