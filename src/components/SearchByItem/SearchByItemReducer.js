
import {GETLIST} from '../../actions/actionTypes';
// const initialState = {
//     userInfo: JSON.parse(localStorage.getItem('profile')) || null
// }
export default (state= {items: []}, action) => {
    switch(action.type) {
        case GETLIST:
            return {
                ...state,
                items: action.payload.items
            }    
        default:
            return state;
    }
}