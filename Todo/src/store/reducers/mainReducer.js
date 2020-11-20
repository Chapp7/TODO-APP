import authenticationReducer from './authenticationReducers'
import taskReducer from './taskReducer'
import {combineReducers} from 'redux'

const mainReducers = combineReducers({
  auth:authenticationReducer,
  task:taskReducer,  
});

export default mainReducers