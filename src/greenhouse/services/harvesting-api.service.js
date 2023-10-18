import http from '../../shared/services/http-common';

export class HarvestingApiService {

    getHarvestingData(){
        return http.get('/harvesting')
    }
}