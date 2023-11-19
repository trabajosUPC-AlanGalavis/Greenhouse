import http from '../../shared/services/http-common';

export class GreenhouseApiService {
    getAllData(type, id) {
        //return http.get(`/${type}harvesting_id=${id}`);
        return http.get(`${id}/${type}`);
    }

    getAllDataByCropId(type, id) {
        console.log(id);
        return http.get(`${id}/${type}`);
    }

    create(id,type, data) {
        return http.post(`${id}/${type}`, data);
    }



    async getMostRecentRecords() {
        try {
            // Fetch a list of all crops
            const cropsResponse = await http.get(`/${1}`); // Modify this URL as needed
            let crops = cropsResponse.data;
            // only crops with state true
            crops = crops.filter(crop => crop.state === true);

            // Initialize an object to store the most recent records for each crop
            const mostRecentRecords = {};
            const dataToSend = {};
            let dataToReturn = {};

            // Iterate through each crop
            for (const crop of crops) {
                const cropId = crop.id;
                let cropPhase = crop.phase;
                if (cropPhase === 'Casing' || cropPhase === 'Incubation' || cropPhase === 'Induction' || cropPhase === 'Harvest') {
                    cropPhase = `growroomrecords/${cropPhase}`;
                } else if (cropPhase === 'Preparation Area') {
                    cropPhase = 'preparationareas';
                }
                else {
                    cropPhase = cropPhase.toLowerCase() + 's';
                }
                try {
                    const mostRecentRecord = await this.getMostRecentRecord(cropPhase, cropId); // Replace 'your_type_here' with the appropriate type
                    mostRecentRecords[cropId] = mostRecentRecord;
                } catch (error) {
                    continue;
                }

                if (mostRecentRecords[cropId] === null) {
                    continue;
                }
                dataToReturn = {...mostRecentRecords[cropId], ...crop};
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
            if (type === 'Casing' || type === 'Incubation' || type === 'Induction' || type === 'Harvest'){
                const response = await http.get(`/${cropId}/growroomrecords/${type}`);
                const records = response.data;
                records.sort((a, b) => new Date(b.date) - new Date(a.date));
                const mostRecentRecord = records.length > 0 ? records[0] : null;
                return mostRecentRecord;
            }
            else {
                const response = await http.get(`/${cropId}/${type}`);
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
}