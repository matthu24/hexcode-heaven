import React from 'react';
import { connect } from 'react-redux';

import Group2 from './group2';
import {fetchAllGroups, fetchSingleGroup} from '../../actions/group';

const mapStateToProps = (state) => ({
  groups: Object.values(state.entities.groups),
});


const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => dispatch(fetchAllGroups()),
  fetchSingleGroup: (id) => dispatch(fetchSingleGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group2);
