import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Alert,
  Button,
  CheckBox,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'

import Article from './LeanCloud/Article.js'

export default class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkBoxValue: false,
      animating: true,
      articles: []
    }
  }

  handlePressLearnMore () {
    Article.saveArticle({
      title: '文章标题',
      content: '文章内容'
    }).then(res => {
      Alert.alert('保存成功！')
      let articles = this.state.articles.concat(res.toJSON())
      this.setState({
        articles: articles
      })
    })
  }

  handleValueChange (newValue) {
    this.setState({
      checkBoxValue: newValue
    })
  }

  //在生命周期中执行该function
  componentWillMount() {
    Article.getArticles().then(articles => {
      console.log(articles)
      this.setState({
        articles: articles
      })
    })
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Button
          onPress={this.handlePressLearnMore.bind(this)}
          title="发布文章"
          color="yellowgreen"
        />
        <FlatList
          // 接收一个数组
          data={this.state.articles}
          // item渲染器
          renderItem={({item, index}) => <Text style={styles.item}>{index+1}、{item.title}</Text>}
          // key提取器
          keyExtractor = { (item, index) => index.toString()}
        />
      </View>
    )
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
})
