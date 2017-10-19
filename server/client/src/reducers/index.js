/**
 * File    : index.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 17/10/2017
 */
import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
