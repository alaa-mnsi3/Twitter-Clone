import {createSlice} from '@reduxjs/toolkit'

const initialState={id:"",replyCount:0}
const getReplyIdSlice=createSlice({
    name:'getReplyId',
    initialState,
    reducers:{
        getReplyIDAction:(state,action)=>
        {
            state.id=action.payload.Id;
            state.replyCount=action.payload.replyCount + 1
        }
    }
})

export default getReplyIdSlice.reducer;
export const {getReplyIDAction} = getReplyIdSlice.actions