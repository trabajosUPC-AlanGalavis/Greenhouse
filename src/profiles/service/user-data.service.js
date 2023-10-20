import http from "../../shared/services/http-common.js";

const BASE_URL = 'http://localhost:3000';

const getUsersById = (id) => {
    return http.get(`${BASE_URL}/users/${id}`);


}
export { getUsersById };