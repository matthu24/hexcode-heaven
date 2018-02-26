import React from 'react';
import {combineReducers} from 'redux';
import colorsReducer from './colors_reducer';
import groupsReducer from './groups_reducer';



export default combineReducers({
  colors: colorsReducer,
  groups: groupsReducer

});
