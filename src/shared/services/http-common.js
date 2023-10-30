import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI2',
    //baseURL: 'http://localhost:3000',
    headers: { 'Content-type': 'application/json'},
});