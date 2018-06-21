import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'
import { WhiteSpace } from 'antd-mobile-rn'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  slideImg: {
    width,
    flex: 1,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: 'white',
    fontSize: 20,
  },
})

const renderPagination = (index, total, context) => (
  <View style={styles.paginationStyle}>
    <Text style={{ color: 'grey' }}>
      <Text style={styles.paginationText}>{index + 1}</Text>/{total}
    </Text>
  </View>
)

export default class ReactNativeSwiper extends Component {
  static navigationOptions = {
    headerTitle: 'react-native-swiper',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView>
        <Swiper
          style={styles.swiper}
          height={200}
          showsButtons
          renderPagination={renderPagination}
        >
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/480/any' }}
            />
          </View>
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/481/any' }}
            />
          </View>
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/482/any' }}
            />
          </View>
        </Swiper>
        <WhiteSpace size="xl" />
        <Swiper
          height={200}
          horizontal={false}
        >
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/480/any' }}
            />
          </View>
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/481/any' }}
            />
          </View>
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/482/any' }}
            />
          </View>
        </Swiper>
        <WhiteSpace size="xl" />
        <Swiper
          height={200}
          showsButtons
        >
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/480/any' }}
            />
          </View>
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/481/any' }}
            />
          </View>
          <View style={[styles.slide]}>
            <Image
              style={[styles.slideImg]}
              resizeMode="cover"
              source={{ uri: 'https://placeimg.com/640/482/any' }}
            />
          </View>
        </Swiper>
      </ScrollView>
    )
  }
}
