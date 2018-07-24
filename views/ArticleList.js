import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native'
import { Button } from 'antd-mobile-rn'
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
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('headerTitle', '文章列表'),
  })

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
    let { articles } = this.state
    Article.saveArticle({
      title: '文章标题',
      content: '文章内容',
    }).then((res) => {
      Alert.alert('保存成功！')
      articles = articles.concat(res.toJSON())
      this.setState({
        articles,
      })
    })
  }

  render() {
    const { articles } = this.state
    return (
      <View style={[styles.container]}>
        <Button
          onClick={() => this.handlePressLearnMore()}
          title="发布文章"
          type="primary"
        />
        <FlatList
          // 接收一个数组
          data={articles}
          // item渲染器
          renderItem={({ item, index }) => (
            <Text style={styles.item}>
              {index + 1}、{item.title}
            </Text>
          )}
          // key提取器
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
