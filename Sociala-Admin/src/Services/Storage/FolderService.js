import axios from "axios";

let apiUrl = "http://localhost:4000/api/storage/folder"

let addFolder = (Folder) => {
    return axios.post(apiUrl, Folder);
}
let getFolder = () => {
    return axios.get(apiUrl);
}


export {addFolder,getFolder}