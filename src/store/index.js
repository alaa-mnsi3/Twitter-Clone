import {configureStore} from '@reduxjs/toolkit'
import userIdSlice from './Slices/getUserIdSlice'
import IdReplySlice from './Slices/IdReplySlice';
import { persistStore  , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';

const persistConfig ={
    key:'root',
    storage,
    whitelist :['userIdSlice']
}
const reducers = combineReducers({
    userIdSlice,
    IdReplySlice,
});
const persistedReducer = persistReducer(persistConfig,reducers)

const store= configureStore({reducer:persistedReducer})
export const persistor = persistStore(store)
export default store;
