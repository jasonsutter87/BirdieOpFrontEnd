import {
  INCREASE_STROKE,
  INCREASE_BIRDIES,
  INCREASE_STROKE_FOR_ROUND,
  ADD_NEW_ROUND,
  ADD_NEW_HOLE,
} from '../constants';

export function increaseStroke(total_srokes, stroke) {
  return {
    type: INCREASE_STROKE,
    total_srokes: total_srokes + stroke
  };
}

export function increaseBirdies(birdies) {
  return {
    type: INCREASE_BIRDIES,
    birdies: birdies += 1
  };
}

export function increaseStrokeForRound(users_score, stroke) {
  return {
    type: INCREASE_STROKE_FOR_ROUND,
    users_score: users_score + stroke
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
