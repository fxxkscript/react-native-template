import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components';
import { navigateToApp } from 'navigation/actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ navigateToApp }, dispatch);

export default connect(null, mapDispatchToProps)(Component);