import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import styles from './styles';

class SignIn extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>登录</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigateToApp();
  };
}

export default SignIn;