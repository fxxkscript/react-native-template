import { RootNavigator } from '../navigators';
import { WELCOME } from '../screen_names';

let initialState = {
  index: 0,
  routes: [
    {
      key: 'welcome',
      routeName: WELCOME
    }
  ]
};

const nav = (state, action) => {
  const nextState = RootNavigator.router.getStateForAction(
    action,
    state
  );

  return nextState || state;
};

export default nav;