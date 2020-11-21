import {REGISTER_FAILED, USER_REGISTERED,USER_LOADED,LOADING_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOG_OUT} from '../actions/types'; 

const initialState = {
  token: localStorage.getItem('token'),
  loading : true ,
  isAuthenticated : null,
  user : null
}

const authenticationReducer =(state = initialState,action)=>{
   const {type,payload} = action;
   switch(type){
     
      case USER_REGISTERED :
        return {
          ...state,
          isAuthenticated : true,
          ...payload,
          loading : false
        }
      case REGISTER_FAILED :
        return {
          ...state,
          loading : false,
          isAuthenticated : false,
          token : null
        }
      case USER_LOADED :
        return {
          ...state,
          isAuthenticated :true,
          loading : false,
          user : payload
        }
      case LOADING_FAIL :
        return {
          ...state,
          isAuthenticated : false,
          loading : false
        }
      case LOGIN_SUCCESS :
        return {
          ...state,
          isAuthenticated : true,
          loading : false,
          ...payload
        }
      case LOGIN_FAIL :
        return {
          ...state,
          isAuthenticated : false,
          token : null
        }
      case LOG_OUT :
        return {
          ...state,
          isAuthenticated : false,
          loading : false,
          token : null,
          user : null
        }
        default:
          return state;
   }      
};
export default authenticationReducer;