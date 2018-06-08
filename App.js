import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// React Native中的Flexbox的工作原理和web上的CSS基本一致，当然也存在少许差异。首先是默认值不同：flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
export default class FlexBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box,styles.box1]}/>
        <View style={[styles.box,styles.box2]}/>
        <View style={[styles.box,styles.box3]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50
  },
  box1: {
    backgroundColor: 'powderblue',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'steelblue',
  }
});
