import axios from "axios";

const apiUrl = "http://localhost:4000/api/post/message/"
let addMsg = (obj) => {
return axios.post(apiUrl,obj);
}
let getMsg = () => {
return axios.get(apiUrl);
}

export {addMsg,getMsg}