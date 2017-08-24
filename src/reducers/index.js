import { combineReducers } from 'redux';

import {
  ADD_POST
} from '../actions'

// create a post reducer
function post (state = {}, action ) {
  switch(action.type) {
    case ADD_POST:
      const { post } = action
      return {
        ...state,
        [post.title]: post
      }
    default:
      return state;
  }
}

export default combineReducers({
  post
})
