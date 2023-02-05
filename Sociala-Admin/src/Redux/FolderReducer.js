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
        },
        deleteFolderFunction(state,action) {
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

export default folderReducer.reducer;
export const {getFolderFunction, addFolderFunction,deleteFolderFunction} = folderReducer.actions;
