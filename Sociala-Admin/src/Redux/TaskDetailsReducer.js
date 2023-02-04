import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let taskDetailsReducer = createSlice({
    name : "taskDetails",
    initialState,
    reducers : {
        getTaskById(state,action) {
return action.payload;
        }
    }
})

export default taskDetailsReducer.reducer;

export const {getTaskById} = taskDetailsReducer.actions;