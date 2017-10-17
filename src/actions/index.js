import {
  INCREASE_STROKE,
  ADD_NEW_ROUND,
} from '../constants';

export function increaseStroke(total_srokes, stroke) {
  return {
    type: INCREASE_STROKE,
    total_srokes: total_srokes + stroke
  };
}

export function addNewRound(course, holes, users_score) {
  return {
    type: ADD_NEW_ROUND,
    course,
    holes,
    users_score
  };
}
