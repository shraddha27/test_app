import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // Backend API
});

export default api;
