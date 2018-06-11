import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  Button,
  CheckBox,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import Article from './LeanCloud/Article.js'

const getMoviesFromApiAsync = async() =>{
  try {
    let response = await fetch('https://cnodejs.org/api/v1/topics');
    let responseJson = await response.json();
    return responseJson.data;
  } catch (e) {
    console.error(error);
  }
}

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxValue: false,
      animating: true,
      topics: '电影',
    };
  }

  handlePressLearnMore () {
    Article.saveArticle({
      title: '标题',
      content: '内容'
    }).then(res => {
      Alert.alert('保存成功')
    })
  }

  handleValueChange (newValue) {
    this.setState({
      checkBoxValue: newValue
    })
  }

  //在生命周期中执行该function
  componentWillMount() {
    getMoviesFromApiAsync().then(res => {
      this.setState({
        topics: res
      })
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Button
          onPress={this.handlePressLearnMore}
          title="测试发布文章"
          color="yellowgreen"
        />
        <CheckBox
          value={this.state.checkBoxValue}
          onValueChange={(newValue) => this.handleValueChange(newValue)}
        />
        <FlatList
          // 接收一个数组
          data={this.state.topics}
          // item渲染器
          renderItem={({item, index}) => <Text style={styles.item}>{index+1}、{item.title}</Text>}
          // key提取器
          keyExtractor = { (item, index) => index.toString()}
        />
        <ActivityIndicator
          size="large"
          animating = {this.state.animating}
          style={[styles.centering, {backgroundColor: '#eeeeee'}]}
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
