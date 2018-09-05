import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components';
import { navigateToSignIn, navigateToApp } from 'navigation/actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ navigateToApp, navigateToSignIn }, dispatch);

export default connect(null, mapDispatchToProps)(Component);