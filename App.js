import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// flex:1 === flex-grow:1;flex-shrink:1;flex-basis:0%;
export default class flexBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:2,backgroundColor: 'blue',}}/>
        <View style={{flex:2,backgroundColor: 'skyblue',}}/>
        <View style={{flex:4,backgroundColor: 'steelblue',}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
