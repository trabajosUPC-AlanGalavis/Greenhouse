import http from '../../shared/services/http-common';

export class ProfileApiService {
    getUsers () {
        return http.get('/user');
    }

    getCompany () {
        return http.get('/company');
    }

}