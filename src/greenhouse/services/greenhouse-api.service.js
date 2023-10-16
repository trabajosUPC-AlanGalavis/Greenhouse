
import http from '../../shared/services/http-common';

export class GreenhouseApiService {
    getAllData(type, id) {
        //return http.get(`/${type}harvesting_id=${id}`);
        return http.get(`/${type}harvesting_id=1`);
    }

    create(type, data) {
        return http.post(`/${type}`, data);
    }

    updateStock(id, data){
        return http.put(`/stock/${id}`, data);
    }

    deleteStock(id){
        return http.delete(`/stock/${id}`);
    }

    updatePreparationArea(id, data){
        return http.put(`/preparation-area/${id}`, data);
    }

    deletePreparationArea(id){
        return http.delete(`/preparation-area/${id}`);
    }

    updateBunker(id, data){
        return http.put(`/bunker/${id}`, data);
    }

    deleteBunker(id){
        return http.delete(`/bunker/${id}`);
    }

    updateTunnel(id, data){
        return http.put(`/tunnel/${id}`, data);
    }

    deleteTunnel(id){
        return http.delete(`/tunnel/${id}`);
    }

    getAllIncubation(){
        return http.get('/grow_room_record?processType=Incubation');
    }

    getAllCasing() {
        return http.get('/grow_room_record?processType=Casing');
    }

    getAllInduction() {
        return http.get('/grow_room_record?processType=Induction');
    }

    getAllHarvest() {
        return http.get('/grow_room_record?processType=Harvest');
    }

    createGrowRoomProcess(data) {
        return http.post('/grow_room_record', data);
    }

    updateGrowRoomProcess(id, data){
        return http.put(`/grow_room_record/${id}`, data);
    }

    deleteGrowRoomProcess(id){
        return http.delete(`/grow_room_record/${id}`);
    }

    getHarvestingIdIncubation(id){
        return http.get(`grow_room_record?processType=Incubation&&harvesting_id=${id}`);
    }
}