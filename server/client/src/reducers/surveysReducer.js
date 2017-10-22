/**
 * File    : surveysReducer.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 22/10/2017
 */
import { FETCH_SURVEYS } from '../actions/types';

// create and export our reducer. init/default the state
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}