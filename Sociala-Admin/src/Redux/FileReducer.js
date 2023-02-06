import {createSlice} from "@reduxjs/toolkit";

let initialState = []
let fileReducer = createSlice({
name : "file",
initialState,
reducers : {
addFileFunction(state,action) {
    return [...state, action.payload]
},
getFileFunction(state,action){
    return action.payload
}
}
})

export default fileReducer.reducer;
export const {addFileFunction, getFileFunction} = fileReducer.actions;