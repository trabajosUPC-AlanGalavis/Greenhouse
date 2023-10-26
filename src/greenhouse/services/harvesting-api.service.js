import http from '../../shared/services/http-common';

export class HarvestingApiService {

    getCropData(){
        return http.get('/crops')
    }

    getCropDataById(id){
        return http.get(`/crops/${id}`)
    }

    createCropData(data) {
        return http.post('/crops', data)
    }

    updateCurrentPhase(cropId, newPhase) {
        return http.patch(`/crops/${cropId}`, {
            phase: newPhase
        })
    }

    updateCropState(cropId){
        return http.patch(`/crops/${cropId}`, {
            state: 'finished'
        })
    }
}