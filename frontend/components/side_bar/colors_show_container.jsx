import React from 'react';
import { connect } from 'react-redux';

import ColorsShow from './colors_show';
import {fetchSingleColor} from '../../actions/color';

const mapStateToProps = (state,ownProps) => ({
  color: state.entities.colors[ownProps.match.params.colorId]
});


const mapDispatchToProps = dispatch => ({
  fetchColor: (id) => dispatch(fetchSingleColor(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorsShow);
