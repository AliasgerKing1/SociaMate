import axios from "axios";

let apiUrl = "http://localhost:4000/api/storage/file/"
let addFile = (obj) => {
    return axios.post(apiUrl,obj);
}
let getFile = () => {
    return axios.get(apiUrl);
}
export {addFile,getFile}