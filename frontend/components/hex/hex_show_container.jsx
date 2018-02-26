import React from 'react';
import { connect } from 'react-redux';
import HexShow from './hex_show';

const mapStateToProps = (state,{color}) => ({
  color

});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HexShow);
