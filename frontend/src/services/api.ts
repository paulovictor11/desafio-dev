import axios from 'axios';

const url = 'http://<endereço_ipv4>';

export const api = axios.create({
    baseURL: `${url}/api`
});
