import {createSlice} from "@reduxjs/toolkit";

let initialState = [];
let folderReducer = createSlice({
    name : "Folder",
    initialState,
    reducers : {
        addFolderFunction(state,action) {
            return [...state, action.payload]
        },
        getFolderFunction(state,action) {
            return action.payload
        }
    }
})

export default folderReducer.reducer;
export const {getFolderFunction, addFolderFunction} = folderReducer.actions;
