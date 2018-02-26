import { RECEIVE_GROUPS, RECEIVE_GROUP } from '../actions/group';
import merge from 'lodash/merge';


export default (groups={},action)=>{
  Object.freeze(groups);
  switch(action.type) {
    case RECEIVE_GROUPS:
      return merge({},action.groups);

    case RECEIVE_GROUP:
      return merge({},{[action.group.id]:action.group});
    default:
      return groups
  }
};
