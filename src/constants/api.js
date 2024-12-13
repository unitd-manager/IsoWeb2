import axios from "axios";
const api = axios.create({
    baseURL: 'https://isodemo.unitdtechnologies.com:2018',
   // baseURL: 'https://localhost:3003/api'
  });
  export default api;