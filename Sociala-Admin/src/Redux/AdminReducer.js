import {createSlice} from "@reduxjs/toolkit";


let initialState = [];

let adminReducer = createSlice({
    name : "admin",
    initialState,
reducers : {
    getAdmin(state,action){
return action.payload;
    }
}
})

export default adminReducer.reducer;

export const {getAdmin} = adminReducer.actions;