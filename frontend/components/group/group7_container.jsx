import React from 'react';
import { connect } from 'react-redux';

import Group7 from './group7';
import {fetchAllGroups, fetchSingleGroup} from '../../actions/group';
// import { fetchAllColors } from '../../actions/color';

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
)(Group7);
