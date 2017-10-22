/**
 * File    : index.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 17/10/2017
 */
import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
