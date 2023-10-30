import http from '../../shared/services/http-common';
import http2 from "@/shared/services/http-common2";

export class GreenhouseApiService {
    getAllData(type) {
        //return http.get(`/${type}harvesting_id=${id}`);
        return http.get(`/${type}`);
    }

    getAllDataByCropId(type, id) {
        console.log(id);
        return http.get(`/${type}crop_id=${id}`);
    }

    create(type, data) {
        return http.post(`/${type}`, data);
    }

    async getMostRecentRecords() {
        try {
            // Fetch a list of all crops
            const cropsResponse = await http2.get('/crops'); // Modify this URL as needed
            const crops = cropsResponse.data;

            // Initialize an object to store the most recent records for each crop
            const mostRecentRecords = {};
            const dataToSend = {};
            let dataToReturn = {};

            // Iterate through each crop
            for (const crop of crops) {
                const cropId = crop.id;
                let cropPhase = crop.phase;
                if (cropPhase === 'Casing' || cropPhase === 'Incubation' || cropPhase === 'Induction' || cropPhase === 'Harvest'){
                    cropPhase = `grow_room_record?processType=${cropPhase}`;
                }
                try {
                    const mostRecentRecord = await this.getMostRecentRecord(cropPhase, cropId); // Replace 'your_type_here' with the appropriate type
                    mostRecentRecords[cropId] = mostRecentRecord;
                }
                catch (error) {
                    continue;
                }

                if (mostRecentRecords[cropId] === null) {
                    continue;
                }
                dataToReturn = { ...mostRecentRecords[cropId], ...crop };
                dataToSend[cropId] = dataToReturn;
            }

            //console.log(dataToReturn);
            return dataToSend;
        } catch (error) {
            throw new Error('Error fetching most recent records: ' + error.message);
        }
    }

    async getMostRecentRecord(type, cropId) {
        try {
            // Make a request to get the most recent record of the specified type
            if (type === 'grow_room_record?processType=Casing' || type === 'grow_room_record?processType=Incubation' || type === 'grow_room_record?processType=Induction' || type === 'grow_room_record?processType=Harvest'){
                const response = await http.get(`/${type}&&crop_id=${cropId}`);
                const records = response.data;
                records.sort((a, b) => new Date(b.date) - new Date(a.date));
                const mostRecentRecord = records.length > 0 ? records[0] : null;
                return mostRecentRecord;
            }
            else {
                const response = await http.get(`/${type}?crop_id=${cropId}`);
                const records = response.data;

                // Sort the records by date in descending order
                records.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Get the most recent record
                const mostRecentRecord = records.length > 0 ? records[0] : null;

                return mostRecentRecord;
            }

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