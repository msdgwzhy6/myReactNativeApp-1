import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class MyScrollView extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Image source={require('./img/vue.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}
