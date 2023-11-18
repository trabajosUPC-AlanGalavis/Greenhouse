import http2 from "@/shared/services/http-common2";

export class HarvestingApiService {
    getCropData(){
        return http2.get('/crops')
    }

    getCropDataById(id){
        return http2.get(`/crops/${id}`)
    }

    createCropData(data) {
        return http2.post('/crops', data)
    }

    updateCurrentPhase(cropId, newPhase) {
        return http2.patch(`/crops/${cropId}`, {
            phase: newPhase
        })
    }

    updateCropState(cropId){
        return http2.patch(`/crops/${cropId}`, {
            state: 'finished'
        })
    }
}