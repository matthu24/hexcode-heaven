import React from 'react';
import { connect } from 'react-redux';

import SideBar from './side_bar';
import { fetchAllColors } from '../../actions/color';

const mapStateToProps = state => ({
  colors: Object.values(state.entities.colors)
});


const mapDispatchToProps = dispatch => ({
  fetchColors: () => dispatch(fetchAllColors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
