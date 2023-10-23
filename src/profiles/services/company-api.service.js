import http from '../../shared/services/http-common';

export class CompanyApiService {
    getCompanies () {
        return http.get('/company');
    }
}