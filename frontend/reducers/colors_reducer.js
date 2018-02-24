import { RECEIVE_COLORS, RECEIVE_COLOR } from '../actions/color';
import merge from 'lodash/merge';


export default (colors={},action)=>{
  Object.freeze(colors);
  switch(action.type) {
    case RECEIVE_COLORS:
      return merge({},action.colors);

    case RECEIVE_COLOR:
      return merge({},colors,{[action.color.id]:action.color});
    default:
      return colors
  }
};
