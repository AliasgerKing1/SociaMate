import axios from "axios";

let token = localStorage.getItem("token");
const header = token;

let checkPass = (obj) => {
    return axios.post("http://localhost:4000/api/admin/lockscreen", obj, { headers: { header } })
}

let Lock = () => {
    localStorage.removeItem("Admintoken");
  }
  

export {checkPass,Lock}