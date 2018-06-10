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

const onPressLearnMore = () => {
  Alert.alert('Button has been pressed!');
}

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
          onPress={onPressLearnMore}
          title="Learn More"
          color="yellowgreen"
        />
        <CheckBox
          value={this.state.checkBoxValue}
          onValueChange={(prevState) => {
            console.log(this.state.checkBoxValue);
            this.setState({
              checkBoxValue: !this.state.checkBoxValue
            })
          }}
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
