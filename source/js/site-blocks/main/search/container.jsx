import { connect } from 'react-redux';

import Search from './search';

import searchAction from '../../../redux-files/action/search-action/search-action';

const mapDispatchToProps = {
  searchAction,
};

export default connect(null, mapDispatchToProps)(Search);
