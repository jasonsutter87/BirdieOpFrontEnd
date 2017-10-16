import {
  INCREASE_STROKE,
} from '../constants';

export function increaseStroke(total_srokes, stroke) {
  return {
    type: INCREASE_STROKE,
    total_srokes: total_srokes + stroke
  };
}
