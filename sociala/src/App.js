import "./App.css";
import { useState, useEffect } from "react";
import SocialaRoutes from "./routes/Sociala/SocialaRoutes";

import {Provider} from "react-redux";
import {configureStore,combineReducers} from "@reduxjs/toolkit";
import UserReducer from "./Redux/UserReducer";
import AllUserReducer from "./Redux/AllUserReducer";

import { getUserProfile} from "./services/profileService/profileService";

let rootReducer = combineReducers({
  UserReducer,
  AllUserReducer
})

let store = configureStore({
  reducer : rootReducer
})
function App() {
  let [allData,setAllData] = useState("");
  let [id,setId] = useState("");
  useEffect(()=> {
    getUserProfile().then(result=> {
        setId(result.data._id);
        setAllData(result.data);
      })
    }, [])
return (
  <>
  <Provider store={store}>
  <SocialaRoutes />
  </Provider>
  </>
)


}

export default App;
