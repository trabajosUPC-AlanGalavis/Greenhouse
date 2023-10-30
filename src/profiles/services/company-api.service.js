import http2 from "@/shared/services/http-common2";

export class CompanyApiService {
    getCompanies () {
        return http2.get('/companies');
    }
}