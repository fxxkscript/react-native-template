import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import styles from './styles';

class SignUp extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign up!" onPress={this._signUpAsync} />
      </View>
    );
  }

  _signUpAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigateToApp();
  };
}

export default SignUp;