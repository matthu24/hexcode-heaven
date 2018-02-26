import { fetchGroups,fetchGroup } from '../utils/group_util';

export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const fetchAllGroups = () => dispatch => (
  fetchGroups().then(groups => dispatch(receiveGroups(groups)))
)

export const fetchSingleGroup = id => dispatch => (
  fetchGroup(id).then(group => dispatch(receiveGroup(group)))
)
