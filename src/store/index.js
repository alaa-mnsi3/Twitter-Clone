import {configureStore} from '@reduxjs/toolkit'
import userIdSlice from './Slices/getUserIdSlice'
import IdReplySlice from './Slices/IdReplySlice';
import {combineReducers} from 'redux';


const reducers = combineReducers({
    userIdSlice,
    IdReplySlice,
});

const store= configureStore({reducer:reducers})
export default store;
