import axios from 'axios';

export default axios.create({
    //baseURL: 'https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI2',
    //baseURL: 'http://greenhouseupc-001-site1.ctempurl.com/api/v1',
    baseURL: 'https://localhost:7170/api/v1/crops/',

    headers: { 'Content-type': 'application/json'},
})