import {
  INCREASE_STROKE,
} from '../constants';

const initialState = {
  total_srokes: 0,
  birdies: 27,
  courses: [
  { _id: '00001',
    name: 'GBH Disc Golf Park',
    rating: 3,
    hole_count: 18,
    difficulty: 'Easy',
    description: 'My good old neighborhood park where i created my own course',
    lat:38.715583,
    lng: -121.190317,
    course_avg: 54 }],
  rounds: [{
    _id: 'aaaaa',
    course_id: '00001',
    score: 54,
    par: 54
  },
    {
      _id: 'aaaab',
      course_id: '00001',
      score: 55,
      par: 54
   },
   {
     _id: 'aaaac',
     course_id: '00001',
     score: 53,
     par: 54}
   ]
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
