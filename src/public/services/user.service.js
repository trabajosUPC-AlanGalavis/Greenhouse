import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'https://localhost:7170/api/v1/users';
const API_URL = 'http://greenhouseupc-001-site1.ctempurl.com/api/v1/users';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();