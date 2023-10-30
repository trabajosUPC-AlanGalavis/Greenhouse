import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1',
    headers: { 'Content-type': 'application/json'},
});