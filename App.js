import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: '电影',
    };
  }
  async getMoviesFromApiAsync() {
    try {
      let response = await fetch('https://cnodejs.org/api/v1/topics');
      let responseJson = await response.json();
      return responseJson.data;
    } catch (e) {
      console.error(error);
    }
  }
  //在生命周期中执行该function
  componentWillMount() {
    this.getMoviesFromApiAsync().then(res => {
      this.setState({
        topics: res
      })
    });
  }
  render() {
    return (
      <View style={[styles.container]}>
        <FlatList
          // 接收一个数组
          data={this.state.topics}
          // item渲染器
          renderItem={({item, index}) => <Text style={styles.item}>{index+1}、{item.title}</Text>}
          // key提取器
          keyExtractor = { (item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
