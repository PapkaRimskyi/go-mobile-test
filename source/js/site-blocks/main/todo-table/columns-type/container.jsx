import { connect } from 'react-redux';

import ColumnsType from './columns-type';

import filtersAction from '../../../../redux-files/action/filters-action/filters-action';

const mapDispatchToProps = {
  filtersAction,
};

export default connect(null, mapDispatchToProps)(ColumnsType);
