import {CALL_LOGIN,CALL_SIGNUP, LOG_OUT} from '../../actions/actionTypes'

export const signin = (formData, history, alreadyLoggedIn) => ({ type: CALL_LOGIN, formData, history, alreadyLoggedIn });
  
export const signup = (formData, history) => ({ type: CALL_SIGNUP, formData, history });

export const logOut = () => ({type: LOG_OUT})