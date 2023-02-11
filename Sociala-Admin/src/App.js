import './App.css';
import { useState, useEffect } from "react";

import { Provider } from 'react-redux';
import {combineReducers, configureStore} from "@reduxjs/toolkit";

import UserReducer from './Redux/UserReducer';
import AdminReducer from './Redux/AdminReducer';
import TaskDetailsReducer from './Redux/TaskDetailsReducer';
import FolderReducer from './Redux/FolderReducer';
import FileReducer from './Redux/FileReducer';
import DataByIdReducer from "./Redux/GetFolderDataByIdReducer"

import SocialaAdminRoutes from './routes/SocialaAdminRoutes';
import { getAdminProfile } from './Services/AdminService/AdminService';
import {getPhoto } from "./Services/ProfilePhotoService/ProfilePhotoService";

let rootReducer = combineReducers({
  UserReducer,
  AdminReducer,
  TaskDetailsReducer,
  FolderReducer,
  FileReducer,
  DataByIdReducer
})
let store = configureStore({
reducer : rootReducer
})
let App = () => {
  let [allData,setAllData] = useState("");
  let [id,setId] = useState("");
  let [photo, setPhoto] = useState([]);
  useEffect(()=> {
    getAdminProfile().then(result=> {
        setId(result.data._id);
        setAllData(result.data);
      })
    }, [])
    useEffect(()=> {
      getPhoto().then(result=> {
      setPhoto(result.data[0].image);
      },[])
          })
let obj = {
  data : allData,
}
  return (
    <Provider store={store}>
 <SocialaAdminRoutes/>
    </Provider>

  )
}

export default App;
