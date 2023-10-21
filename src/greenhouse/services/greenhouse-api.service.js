
import http from '../../shared/services/http-common';

export class GreenhouseApiService {
    getAllData(type, id) {
        //return http.get(`/${type}harvesting_id=${id}`);
        return http.get(`/${type}crop_id=1`);
    }

    create(type, data) {
        return http.post(`/${type}`, data);
    }

    async getMostRecentRecords(cropId) {
        try {
            // Fetch the most recent records for each type
            const mostRecentStock = await this.getMostRecentRecord('stock', cropId);
            const mostRecentPreparationArea = await this.getMostRecentRecord('preparation_area', cropId);
            const mostRecentBunker = await this.getMostRecentRecord('bunker', cropId);
            const mostRecentTunnel = await this.getMostRecentRecord('tunnel', cropId);
            const mostRecentGrowRoomRecord = await this.getMostRecentRecord('grow_room_record', cropId);

            return {
                stock: mostRecentStock,
                preparationArea: mostRecentPreparationArea,
                bunker: mostRecentBunker,
                tunnel: mostRecentTunnel,
                growRoomRecord: mostRecentGrowRoomRecord,
            };
        } catch (error) {
            throw new Error('Error fetching most recent records: ' + error.message);
        }
    }

    async getMostRecentRecord(type, cropId) {
        try {
            // Make a request to get the most recent record of the specified type
            const response = await http.get(`/${type}?crop_id=${cropId}`);
            const records = response.data;

            // Sort the records by date in descending order
            records.sort((a, b) => new Date(b.date) - new Date(a.date));

            // Get the most recent record
            const mostRecentRecord = records.length > 0 ? records[0] : null;

            // Fetch the associated crop data
            const cropResponse = await http.get(`/crops?id=${cropId}`); // Modify this URL as needed
            const cropData = cropResponse.data;

            const dataToSend = { ...mostRecentRecord, ...cropData[0] };

            return dataToSend; // Return an array
        } catch (error) {
            throw new Error(`Error fetching most recent ${type} record: ` + error.message);
        }
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

    getCropIdIncubation(id){
        return http.get(`grow_room_record?processType=Incubation&&harvesting_id=${id}`);
    }
}