import http from '../../shared/services/http-common';

export class GreenhouseApiService {
    getAllStock() {
        return http.get('/stock');
    }

    createStock(data) {
        return http.post('/stock', data);
    }

    updateStock(id, data){
        return http.put(`/stock/${id}`, data);
    }

    deleteStock(id){
        return http.delete(`/stock/${id}`);
    }

    getAllPreparationArea() {
        return http.get('/preparation-area');
    }

    createPreparationArea(data) {
        return http.post('/preparation-area', data);
    }

    updatePreparationArea(id, data){
        return http.put(`/preparation-area/${id}`, data);
    }

    deletePreparationArea(id){
        return http.delete(`/preparation-area/${id}`);
    }

    getAllBunker(){
        return http.get('/bunker');
    }

    createBunker(data) {
        return http.post('/bunker', data);
    }

    updateBunker(id, data){
        return http.put(`/bunker/${id}`, data);
    }

    deleteBunker(id){
        return http.delete(`/bunker/${id}`);
    }

    getAllTunnel(){
        return http.get('/tunnel');
    }

    createTunnel(data) {
        return http.post('/tunnel', data);
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