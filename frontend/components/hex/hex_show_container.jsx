import React from 'react';
import { connect } from 'react-redux';
import HexShow from './hex_show';

const mapStateToProps = (state,{color}) => ({
  color

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HexShow);
