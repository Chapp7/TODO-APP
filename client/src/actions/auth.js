import {USER_REGISTERED,REGISTER_FAILED,USER_LOADED,LOADING_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOG_OUT} from './types';
import api from '../utils/api';


export const register = (formdata) => async dispatch=>{
    try {
        const {email,password,firstName,lastName} = formdata;
        const name= firstName+' '+lastName;
        const newformdata = {email,password,name};
        console.log(newformdata);
        console.log('test');
        const res = await api.post('/user',newformdata);
        dispatch({
            type : USER_REGISTERED,
            payload : res.data
        });
        dispatch(loaduser());
    } catch (error) {
        dispatch({
           type : REGISTER_FAILED
        })
        console.error(error.response.data);
    } 
}

export const loaduser = () => async dispatch=>{
     try {
          const res = await api.get('/user');
          dispatch({
              type : USER_LOADED,
              payload : res.data
          })
     } catch (error) {
         console.error(error.message);
         dispatch({
           type : LOADING_FAIL 
         })
     }
}

export const login = (credantials)=> async dispatch =>{
    try {
        const res = await api.post('/auth',credantials);
        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
        })
        dispatch(loaduser());
    } catch (error) {
        console.error(error.response.data);
         dispatch({
           type : LOGIN_FAIL
         })
    }
}

export const logout=()=> dispatch =>{
    dispatch({
        type : LOG_OUT
    })
}