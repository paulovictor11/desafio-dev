import axios from 'axios';

const url = 'http://192.168.0.9:8000';

export const api = axios.create({
    baseURL: `${url}/api`
});
