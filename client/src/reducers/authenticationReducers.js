import {REGISTER_FAILED, USER_REGISTERED} from '../actions/types'; 

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
        default: 
          return state;
   }      
};
export default authenticationReducer;