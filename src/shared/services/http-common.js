import axios from 'axios';

export default axios.create({
    //baseURL: 'https://my-json-server.typicode.com/upc-pre-202302-si730-sw51-integradis/Greenhouse',
    baseURL: 'http://localhost:3000',
    headers: { 'Content-type': 'application/json'}
});