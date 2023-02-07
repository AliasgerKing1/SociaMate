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
},
deleteFileFunction(state,action){
    let x = 0;
    state.forEach((item,n)=> {
        if(item._id == action.payload) {
            x = n;
            return
        }
    })
    state.splice(x,1);
    return state;
}
}
})

export default fileReducer.reducer;
export const {addFileFunction, getFileFunction, deleteFileFunction} = fileReducer.actions;