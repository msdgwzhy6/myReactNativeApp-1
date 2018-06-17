import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { AlbumView, Overlay } from 'youngjuning-teaset'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  imageWrap: {
    width: 100,
    height: 100,
    padding: 10,
  },
})

export default class AlbumViewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'AlbumView'),
  })
  constructor(props) {
    super(props)
    this.state = {
      images: [
        require('../../images/teaset1.jpg'),
        require('../../images/teaset2.jpg'),
        require('../../images/teaset3.jpg'),
        require('../../images/faircup.jpg'),
      ],
      thumbs: [
        require('../../images/teaset1_s.jpg'),
        require('../../images/teaset2_s.jpg'),
        require('../../images/teaset3_s.jpg'),
        require('../../images/faircup_s.jpg'),
      ],
    }
  }
  showAlbumView(index) {
    const curImg = this.state.curImg
    curImg.measure((x, y, width, height, pageX, pageY) => {
      const overlayView = (
        <Overlay.PopView
          style={{}}
          containerStyle={{ flex: 1 }}
          overlayOpacity={1}
          type="custom"
          customBounds={{
            x: pageX,
            y: pageY,
            width,
            height,
          }}
          ref={(c) => { this.state.fullImageView = c }}
        >
          <AlbumView
            style={{ flex: 1 }}
            control
            images={this.state.images}
            thumbs={this.state.thumbs}
            defaultIndex={index}
            onPress={() => this.state.fullImageView && this.state.fullImageView.close()}
          />
        </Overlay.PopView>
      )
      Overlay.show(overlayView)
    })
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.wrap]}>
          {this.state.thumbs.map((item, index) => (
            <View style={[styles.imageWrap]} key={index.toString()}>
              <TouchableOpacity
                style={[styles.container]}
                ref={(c) => { this.state.curImg = c }}
                onPress={() => this.showAlbumView(index)}
              >
                <Image source={item} resizeMode="cover" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
