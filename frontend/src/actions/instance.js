import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mern-eocm-api.onrender.com',
    // baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;