import http from '../../shared/services/http-common';

export class ProfileApiService {
    getProfiles () {
        return http.get('/user');
    }
}