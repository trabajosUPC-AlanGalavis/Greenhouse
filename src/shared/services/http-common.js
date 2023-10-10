import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/upc-pre-202302-si730-sw51-integradis/Greenhouse',
    headers: { 'Content-type': 'application/json'}
});