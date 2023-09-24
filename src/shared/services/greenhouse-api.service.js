
import http from '../services/http-common';

export class GreenhouseApiService {
    getAllData(type) {
        return http.get(`/${type}`);
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
        return http.get('/grow_room_record?process_type=Incubation');
    }

    getAllCasing() {
        return http.get('/grow_room_record?process_type=Casing');
    }

    getAllInduction() {
        return http.get('/grow_room_record?process_type=Induction');
    }

    getAllHarvest() {
        return http.get('/grow_room_record?process_type=Harvest');
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
}