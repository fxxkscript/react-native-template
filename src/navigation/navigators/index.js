import { createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import * as screenNames from '../screen_names';
import Welcome from 'features/welcome/containers';
import Auth from './auth';
import App from './app';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createSwitchNavigator(
  {
    [screenNames.WELCOME]: Welcome,
    [screenNames.APP]: App,
    [screenNames.AUTH]: Auth,
  },
  {
    initialRouteName: screenNames.WELCOME,
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };