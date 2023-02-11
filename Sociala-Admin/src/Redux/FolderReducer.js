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
if(item._id == action.payload._id) {
     x = n;
     return
}
            })
            state.splice(x,1);
            return state;
        },
        updateFolderFunction(state, action) {
            state.forEach((item)=> {
                if(item._id ===  action.payload._id) {
                    return [...state, action.payload]
                }
            })

           
        }
    }
})

export default folderReducer.reducer;
export const {getFolderFunction, addFolderFunction,deleteFolderFunction,updateFolderFunction} = folderReducer.actions;
