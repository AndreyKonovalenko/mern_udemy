import {
  ADD_POST
} from '../actions/types';


const initialState = {
  posts: [],
  post: {},
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};

export default reducer;
