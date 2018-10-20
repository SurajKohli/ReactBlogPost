import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

function PostsReducer(state = null, action) {
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
  }
  return state;
}

export default PostsReducer;