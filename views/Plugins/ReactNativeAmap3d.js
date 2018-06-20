import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { MapView } from 'react-native-amap3d'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class ReactNativeAmap3d extends Component {
  static navigationOptions = {
    headerTitle: 'react-native-amap3d',
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <ScrollView style={[styles.container]}>
        <MapView
          style={{ width: Dimensions.get('screen').width, height: 300, marginBottom: 20 }}
          coordinate={{
            latitude: 39.91095,
            longitude: 116.37296,
          }}
        >
          <MapView.Marker
            image="flag"
            coordinate={{
            latitude: 39.91095,
            longitude: 116.37296,
          }}
          >
            <View style={styles.customInfoWindow}>
              <Text>自定义信息窗体</Text>
            </View>
          </MapView.Marker>
        </MapView>
        <MapView
          style={{ width: Dimensions.get('screen').width, height: 300, marginBottom: 20 }}
        >
          <MapView.Marker
            draggable
            title="这是一个可拖拽的标记"
            onDragEnd={({ nativeEvent }) =>
                console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
            coordinate={{
                  latitude: 39.91095,
                  longitude: 116.37296,
                }}
          />
        </MapView>
      </ScrollView>
    )
  }
}
