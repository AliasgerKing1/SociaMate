import axios from "axios";
import {} from 'react-router-dom';

let Logout = () => {
  localStorage.clear();
}

let DoLogin = (obj) => {
  return axios.post(
      'http://localhost:4000/api/admin/login/',
      obj
    );
  }

  let IsLoggedIn = () => {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }


  export {DoLogin,IsLoggedIn,Logout}