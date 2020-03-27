import axios from 'axios';
////192.168.0.20:19000


const api = axios.create({
    baseURL: 'http://192.168.0.20:3333'
});

export default api;