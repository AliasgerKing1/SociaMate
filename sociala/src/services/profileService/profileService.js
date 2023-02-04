
import axios from 'axios';
let token = localStorage.getItem("token");
const header = token;

  let getUserProfile =() => {
    return axios.get('http://localhost:4000/api/userprofile/',{ headers: { header } });
  }


export {getUserProfile}