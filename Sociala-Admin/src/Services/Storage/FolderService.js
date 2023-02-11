import axios from "axios";

let apiUrl = "http://localhost:4000/api/storage/folder/"

let addFolder = (Folder) => {
    return axios.post(apiUrl, Folder);
}
let getFolder = () => {
    return axios.get(apiUrl);
}
let getFolderById = (id) => {
    return axios.get(apiUrl  + id);
}

let deleteFolder = (id) => {
    return axios.delete(apiUrl + id);
}
let updateFolder = (id, obj) => {
    return axios.put(apiUrl + id, obj);
}

export {addFolder,getFolder,deleteFolder,updateFolder, getFolderById}