import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let DataByIdReducer = createSlice({
    name : "DataById",
    initialState,
    reducers : {
        getDataById(state, action) {
            return action.payload
        }
    }
})


export default DataByIdReducer.reducer;
export const {getDataById} = DataByIdReducer.actions;