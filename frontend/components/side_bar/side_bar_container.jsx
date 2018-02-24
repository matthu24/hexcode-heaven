import React from 'react';
import { connect } from 'react-redux';

import SideBar from './side_bar';
import { fetchAllColors } from '../../actions/color';

const mapStateToProps = state => ({
  colors: Object.values(state.entities.colors)
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({
  fetchColors: () => dispatch(fetchAllColors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
