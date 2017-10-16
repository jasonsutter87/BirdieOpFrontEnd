import {
  INCREASE_STROKE,
} from '../constants';

const initialState = {
  total_srokes: 0
};

function BirdieOpReducer(state = initialState, action) {
  const { total_srokes } = action;
  switch (action.type) {
    case INCREASE_STROKE:
      return Object.assign({}, state, { total_srokes });
    default:
      return state;
  }
}

export default BirdieOpReducer;
