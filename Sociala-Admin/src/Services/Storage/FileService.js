import axios from "axios";

let apiUrl = "http://localhost:4000/api/storage/file/"
let addFile = (obj) => {
    return axios.post(apiUrl,obj);
}
let getFile = () => {
    return axios.get(apiUrl);
}
let deleteFile = (id) => {
    return axios.delete(apiUrl + id);
}
export {addFile,getFile,deleteFile}