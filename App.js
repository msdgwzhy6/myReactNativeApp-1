import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '电影',
    };
  }
  async getMoviesFromApiAsync() {
    try {
      let response = await fetch('https://cnodejs.org/api/v1/topics');
      let responseJson = await JSON.stringify(response);
      return responseJson;
    } catch (e) {
      console.error(error);
    }
  }
  render() {
    this.getMoviesFromApiAsync().then(res => {
      this.setState(previousState => {
        return {movie: res}
      })
    })
    return (
      <View style={styles.container}>
        <Text>{this.state.movie}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
