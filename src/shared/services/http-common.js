import axios from 'axios';

export default axios.create({
    //baseURL: 'https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI2',
    baseURL: 'https://greenhouse-web-api.azurewebsites.net/api/v1/crops/',
    //baseURL: 'https://localhost:7170/api/v1/crops/',

    headers: { 'Content-type': 'application/json'},
})