import {
  INCREASE_STROKE,
  ADD_NEW_ROUND,
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
  rounds: []
};



function BirdieOpReducer(state = initialState, action) {
  const { total_srokes, course, users_score, holes } = action;
  switch (action.type) {
    case INCREASE_STROKE:
      return Object.assign({}, state, { total_srokes });
    case ADD_NEW_ROUND:
      return {
         ...state,
         rounds: [{
           course,
           holes,
           users_score
         }, ...state.rounds],
       };
    default:
      return state;
  }
}

export default BirdieOpReducer;
