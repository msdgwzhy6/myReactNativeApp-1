import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native'

import { Button } from 'teaset'

import Article from './LeanCloud/Article'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default class Fetch extends Component {
  // 一般来说，你需要在constructor中初始化state，然后在需要修改时调用setState方法
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }
  // 组件已经加载到虚拟DOM，在render方法之后执行，整个生命周期只执行一次。通常在该方法中完成异步网络请求或者集成其他JavaScript库
  componentDidMount() {
    Article.getArticles().then((articles) => {
      this.setState({
        articles,
      })
    })
  }
  handlePressLearnMore() {
    Article.saveArticle({
      title: '文章标题',
      content: '文章内容',
    }).then((res) => {
      Alert.alert('保存成功！')
      const articles = this.state.articles.concat(res.toJSON())
      this.setState({
        articles,
      })
    })
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          onPress={() => this.handlePressLearnMore()}
          title="发布文章"
          color="yellowgreen"
        />
        <FlatList
          // 接收一个数组
          data={this.state.articles}
          // item渲染器
          renderItem={({ item, index }) => <Text style={styles.item}>{index + 1}、{item.title}</Text>}
          // key提取器
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
