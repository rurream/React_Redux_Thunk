import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
const rootReducer = combineReducers({
    users: usersReducer
});
export default rootReducer
