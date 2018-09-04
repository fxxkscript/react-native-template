import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppNavigator } from '../navigators';
import { navigateBack } from '../actions';
import { BackHandler } from 'react-native';

const mapStateToProps = state => ({
  navigation: state.nav
});

const mapDispatchToProps = dispatch => ({ dispatch });

class ApplicationNavigatorContainer extends Component {
  handleBackButton = () => {
    const { navigation, dispatch } = this.props;
    //if its at the most backwards state
    if (navigation.index === 0) return false;
    dispatch(navigateBack());
    return true;
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    this.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    const { navigation } = this.props;
    return (
      <AppNavigator navigation={navigation} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ApplicationNavigatorContainer
);