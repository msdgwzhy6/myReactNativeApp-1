import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  // 如果逻辑与是true，则返回前面的word，如果是false，则返回🍕
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.textinput]}
          placeholder='please input your name'
          onChangeText={(text) => this.setState({text})}
        />
      <Text style={[styles.text]}>
        {this.state.text.split('').map((word) => word && '🍕').join('')}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  textinput: {
    height: 40,
  },
  text: {
    padding: 10,
    fontSize: 42,
  }
});
