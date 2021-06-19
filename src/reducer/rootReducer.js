import { combineReducers } from 'redux';
// import events from './eventsReducer'
import user from '../components/Auth/LoginReducers'
import SearchByItem from '../components/SearchByItem/SearchByItemReducer'

export default combineReducers({
    user,
    SearchByItem
})