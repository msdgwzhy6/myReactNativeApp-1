import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,
  Button,
  StyleSheet,
} from 'react-native'

import Article from './LeanCloud/Article'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  // 在生命周期中执行该function
  componentWillMount() {
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
