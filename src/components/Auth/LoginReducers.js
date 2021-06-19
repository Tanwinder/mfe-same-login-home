
import {AUTH_RESULT, LOG_OUT_USER} from '../../actions/actionTypes';
const initialState = {
    userInfo: sessionStorage.getItem('profile') ? JSON.parse(sessionStorage.getItem('profile')) : null
}
export default (state= initialState, action) => {
    switch(action.type) {
        case AUTH_RESULT:
            return {
                ...state,
                userInfo: action.payload
            };
        case LOG_OUT_USER:
            sessionStorage.removeItem('profile');
            localStorage.removeItem('profile');
            return {
                userInfo: null
            };        
        default:
            return state;
    }
}