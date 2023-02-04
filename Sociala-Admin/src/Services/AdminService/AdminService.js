import axios from "axios";

const apiUrl = "http://localhost:4000/api/user";

let totalUser = () => {
  return axios.get(apiUrl + "/total");
};
let getUsers = () => {
  return axios.get(apiUrl)
}
let deleteUser = (id) => {
  return axios.delete(apiUrl + "/" + id)
}
let token = localStorage.getItem("token");
const header = token;

  let getAdminProfile =() => {
    return axios.get('http://localhost:4000/api/admin/profile/',{ headers: { header } });
  }
  let addAdmin =(obj) => {
    return axios.post('http://localhost:4000/api/admin/login/addadmin',obj);
  }

export { totalUser,getAdminProfile,getUsers,deleteUser,addAdmin };
