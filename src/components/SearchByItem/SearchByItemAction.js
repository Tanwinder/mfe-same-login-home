// import {signIn, signUp} from '../utils/api'
import { CALLLIST } from '../../actions/actionTypes'

// const { AUTH, CALL_AUTH, LOG_OUT } = obj;

// export const signin = (formData, history, alreadyLoggedIn) => ({ type: CALL_AUTH, formData, history, alreadyLoggedIn });
export const callList = (val) => ({type: CALLLIST, val});


// below code is for redux-thunk middleware
// export const signin = (formData, router) => async (dispatch) => {
//     try {
//       const { data } = await signIn(formData);
  
//       dispatch({ type: "AUTH", payload: data });
  
//       router.push('/events');
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   export const signup = (formData, history) => ({ type: CALL_SIGNUP, formData, history });

//   export const logOut = () => ({type: LOG_OUT})