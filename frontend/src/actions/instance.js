import axios from 'axios';
import Cookies from 'js-cookie';
const myHeaders = new Headers(); // Currently empty
console.log('aaa:', myHeaders.get("token")) // Returns null

const headers = { 'Content-Type': 'application/json' }

if (localStorage.getItem('token')) {
    headers.token = localStorage.getItem('token')
}

const instance = axios.create({
    baseURL: 'https://mern-eocm-api.onrender.com',
    // baseURL: 'http://localhost:4000',
    headers
});

export default instance;