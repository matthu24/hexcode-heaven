import React from 'react';
import {combineReducers} from 'redux';
import colorsReducer from './colors_reducer';




export default combineReducers({
  colors: colorsReducer,

});
