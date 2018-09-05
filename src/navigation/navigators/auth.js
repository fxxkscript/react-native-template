import { createStackNavigator } from 'react-navigation';
import * as screenNames from '../screen_names';
import SignIn from 'features/sign_in/containers';

export default createStackNavigator(
  {
    [screenNames.SIGNIN]: {
      screen: SignIn
    }
  }
);