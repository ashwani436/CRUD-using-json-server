import {combineReducers} from "redux";
import usersReducers from '../redux/reducer';

const rootReducer = combineReducers({
    users:usersReducers,
    
});
export default rootReducer;