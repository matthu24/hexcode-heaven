import React from 'react';
import { connect } from 'react-redux';

import ColorsShow from './colors_show';
import {fetchSingleColor} from '../../actions/color';
// import { fetchAllColors } from '../../actions/color';

const mapStateToProps = (state,ownProps) => ({
  color: state.entities.colors[ownProps.match.params.colorId]
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({
  fetchColor: (id) => dispatch(fetchSingleColor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorsShow);
