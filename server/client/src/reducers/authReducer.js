/**
 * File    : authReducer.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 17/10/2017
 */
import { FETCH_USER } from '../actions/types';


export default function(state = null, action) {
  switch (action.type){
    case FETCH_USER:
      // '' is a fallsy value
      return action.payload || false;
    default:
      return state;
  }
}