import axios from 'axios';

const apiUrl = "http://localhost:4000/api/user/";
let addUsers = (obj) => {
  return axios.post(apiUrl, obj);
};

let getUsers = () => {
  return axios.get(apiUrl);
};
let getUserByid = (id) => {
  return axios.get(apiUrl + id);
};

let updateUsers = (id, obj) => {
  return axios.put(apiUrl + "/" + id, obj);
}
export { addUsers, getUsers,updateUsers,getUserByid };