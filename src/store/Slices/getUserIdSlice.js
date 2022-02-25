import {createSlice} from '@reduxjs/toolkit'

const initialState=''
const getUserIdSlice=createSlice({
    name:'getUserId',
    initialState,
    reducers:{
        getIdAction:(state,action)=>
        {
            console.log(action.payload)
            return action.payload;
        }
    }
})

export default getUserIdSlice.reducer;
export const {getIdAction} = getUserIdSlice.actions