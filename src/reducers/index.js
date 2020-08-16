import {combineReducers} from 'redux';
import postReducer from './postReducer';

// const postReducer = (state=null, action) => {
//     return state;
// };

export default combineReducers({posts: postReducer});