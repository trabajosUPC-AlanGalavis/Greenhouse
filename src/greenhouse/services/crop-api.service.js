import http2 from "@/shared/services/http-common";

export class CropApiService {
    getCropData(companyId) {
        return http2.get(`${companyId}`)
    }

    getCropDataById(id){
        return http2.get(`${id}`)
    }

    createCropData(companyId) {
        return http2.post(`${companyId}`)
    }

    updateCurrentPhase(cropId, newPhase) {
        return http2.patch(`${cropId}`)
    }
}