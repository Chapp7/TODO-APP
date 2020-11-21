import {USER_REGISTERED,REGISTER_FAILED} from './types';
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
    } catch (error) {
        dispatch({
           type : REGISTER_FAILED
        })
        console.error(error.response.data);
    } 
}