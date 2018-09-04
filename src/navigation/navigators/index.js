import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import WelcomeNavigator from './welcome';
import * as screenNames from '../screen_names';
import Splash from 'features/splash/containers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  [screenNames.SPLASH]: {
    screen: Splash
  },

  [screenNames.WELCOME]: {
    screen: WelcomeNavigator
  }
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);


export { RootNavigator, AppNavigator, middleware };
