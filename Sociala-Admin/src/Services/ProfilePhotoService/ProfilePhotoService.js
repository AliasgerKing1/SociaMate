import axios from "axios";

let addPhoto = (obj) => {
return axios.post("http://localhost:4000/api/admin/profile/photo", obj);
}
let token = localStorage.getItem("token");
const header = token;

let getPhoto = () => {
return axios.get("http://localhost:4000/api/admin/profile/photo",{ headers: { header } });
}

export {addPhoto,getPhoto}