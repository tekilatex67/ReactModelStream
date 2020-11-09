import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // as formReducer permet de renomer reducer 
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
   auth : authReducer,
   form : formReducer,
   streams : streamReducer

})