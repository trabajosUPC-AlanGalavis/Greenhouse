import axios from 'axios';

//const API_URL = 'https://localhost:7170/api/v1/users/';
const API_URL = 'https://greenhouse-web-api.azurewebsites.net/api/v1/users/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'sign-in', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'sign-up', {
            firstName: user.first_name,
            lastName: user.last_name,
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();