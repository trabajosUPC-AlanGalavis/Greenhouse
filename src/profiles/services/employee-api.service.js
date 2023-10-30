import http2 from "@/shared/services/http-common2";

export class EmployeeApiService {
    getUsers () {
        return http2.get('/users');
    }
}