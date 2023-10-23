import http from '../../shared/services/http-common';

export class EmployeeApiService {
    getUsers () {
        return http.get('/user');
    }
}