import {
  INCREASE_STROKE,
  ADD_NEW_ROUND,
  ADD_NEW_HOLE,
} from '../constants';

export function increaseStroke(total_srokes, stroke) {
  return {
    type: INCREASE_STROKE,
    total_srokes: total_srokes + stroke
  };
}

export function addNewRound(course, holes, users_score, date) {
  return {
    type: ADD_NEW_ROUND,
    course,
    holes,
    users_score,
    date
  };
}

export function addNewHole(course_id, course, hole_num, par, strokes) {
  return {
    type: ADD_NEW_HOLE,
    course_id,
    course,
    hole_num,
    par,
    strokes
  };
}
