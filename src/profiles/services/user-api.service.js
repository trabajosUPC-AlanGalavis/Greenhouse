import http2 from "@/shared/services/http-common2";
import http from "@/shared/services/http-common3";

export class UserApiService {
    getUsers () {
        return http2.get('/users');
    }

    getUsersByCompanyId (companyId) {
        return http2.get(`/users?company_id=${companyId}`);
    }

    create(data) {
        return http2.post('/users', data);
    }

    createEmployee(data) {
        return http.post('/employees', data);
    }
}