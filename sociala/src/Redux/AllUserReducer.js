import {createSlice} from "@reduxjs/toolkit";

let initialState = [];

let allUserReducer = createSlice({
    name : "allUser",
    initialState,
    reducers : {
        getAllUser(state,action) {
            return action.payload;
        }
    }
})

export default allUserReducer.reducer;
export const {getAllUser} = allUserReducer.actions;