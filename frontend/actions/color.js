import { fetchColors,fetchColor } from '../utils/color_util';

export const RECEIVE_COLOR = 'RECEIVE_COLOR';
export const RECEIVE_COLORS = 'RECEIVE_COLORS';

const receiveColor = color => ({
  type: RECEIVE_COLOR,
  color
});

const receiveColors = colors => ({
  type: RECEIVE_COLORS,
  colors
});

export const fetchAllColors = () => dispatch => (
  fetchColors().then(colors => dispatch(receiveColors(colors)))
)

export const fetchSingleColor = id => dispatch => (
  fetchColor(id).then(color => dispatch(receiveColor(color)))
)
