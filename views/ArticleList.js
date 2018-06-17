import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native'
import { Button } from 'youngjuning-teaset'
import Article from '../LeanCloud/Article'

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

export default class ArticleListScreen extends Component {
  // 一般来说，你需要在constructor中初始化state，然后在需要修改时调用setState方法
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }
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
          type="primary"
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
