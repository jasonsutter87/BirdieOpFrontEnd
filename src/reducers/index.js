import {
  INCREASE_STROKE,
  INCREASE_BIRDIES,
  INCREASE_STROKE_FOR_ROUND,
  ADD_NEW_ROUND,
  ADD_NEW_HOLE,
} from '../constants';

const initialState = {
  total_srokes: 0,
  birdies: 0,
  courses: [
  { _id: '00001',
    name: 'GBH Disc Golf Park',
    rating: 3,
    hole_count: 18,
    difficulty: 'Easy',
    description: 'My good old neighborhood park where i created my own course',
    lat:38.715583,
    lng: -121.190317,
    course_avg: 54 ,
    players_avg: 54 ,
  },
  { _id: '00002',
      name: 'Rocklin Golf Park',
      rating: 4,
      hole_count: 18,
      difficulty: 'Easy',
      description: 'Fun Open shots',
      lat: 38.715583,
      lng: -121.190317,
      course_avg: 54,
      players_avg: 57 ,
     },

  ],
  rounds: [],
  holes: [],
  date: ''
};



function BirdieOpReducer(state = initialState, action) {
  const { total_srokes, course, users_score, holes, hole_num, course_id, par, strokes, date, birdies } = action;
  switch (action.type) {
    case INCREASE_STROKE:
      return Object.assign({}, state, { total_srokes });
    case INCREASE_BIRDIES:
      return Object.assign({}, state, { birdies });
    case INCREASE_STROKE_FOR_ROUND:
      return Object.assign({}, state, { users_score });
    case ADD_NEW_ROUND:
      return {
         ...state,
         rounds: [{
           course,
           holes,
           users_score,
           date
         }, ...state.rounds],
       };
       case ADD_NEW_HOLE:
         return {
            ...state,
            holes: [{
              course_id,
              course,
              hole_num,
              par,
              strokes,
            }, ...state.holes],
          };
    default:
      return state;
  }
}

export default BirdieOpReducer;
