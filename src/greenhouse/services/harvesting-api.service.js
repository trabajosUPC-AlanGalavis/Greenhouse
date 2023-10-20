import http from '../../shared/services/http-common';

export class HarvestingApiService {

    getCropData(){
        return http.get('/crops')
    }

    createCropData(data) {
        return http.post('/crops', data)
    }
}