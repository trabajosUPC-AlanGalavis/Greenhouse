import http from "../../shared/services/http-common.js";

const BASE_URL = 'http://localhost:3000';

const getOrganizationById = (id) => {
    return http.get(`${BASE_URL}/organization/${id}`);


}
export { getOrganizationById };