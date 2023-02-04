import axios from "axios";

let apiUrl = "http://localhost:4000/api/country/";
let getCountry = () => {
    return axios.get(apiUrl);
}

export {getCountry}