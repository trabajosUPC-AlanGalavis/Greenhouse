<script>
import {GreenhouseApiService} from "@/greenhouse/services/greenhouse-api.service";
import {CropApiService} from "@/greenhouse/services/crop-api.service";
import {FilterMatchMode} from "primevue/api";
import {string} from "yup";

export default {
  name: "process-table",
  props: {
    endpoint: null,
    crop_id: null,
  },

  data() {
    return {
      filters: {},
      processData: [],
      columns: null,
      greenhouseApi: new GreenhouseApiService(),
      cropApi: null,
      start_date: "",
      formData: {},
      form: [],
      displayDialog: false,
      titles: null
    }
  },
  created() {
    this.cropApi = new CropApiService();
    this.initFilters();
    this.cropApi.getCropData(1).then((response => {
      this.start_date = this.formatDate(response.data[0].startDate);
    }));
  },
  mounted() {
    // Fetch initial data and columns
    console.log('Endpoint:', this.endpoint);
    this.fetchDataAndColumns(this.endpoint);
  },
  watch: {
    endpoint(newEndpoint, oldEndpoint) {
      if (newEndpoint !== oldEndpoint) {
        this.fetchDataAndColumns(newEndpoint);
      }
    },
  },

  methods: {
    initFilters() {
      this.filters = {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
      };
    },
    addColumn() {
      // delete columns before adding them
      this.columns = null;
      this.columns = Object.keys(this.processData[0])
          .filter((key) => key !== "processType" && key !== 'cropId' && key !== "id" && key !== "apiId")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    },
    fetchDataAndColumns(endpoint) {

      this.greenhouseApi.getAllDataByCropId(endpoint, this.crop_id).then((response) => {
        this.processData = response.data;
        this.addColumn();
      });
    },
    fetchData(endpoint) {
      this.greenhouseApi.getAllDataByCropId(endpoint, this.crop_id).then((response) => {
        this.processData = response.data;
        this.addData();
      });
    },
    fetchFormData(endpoint) {
      this.greenhouseApi.getAllDataByCropId(endpoint, 1).then((response) => {
        this.form = response.data;
        this.addFormData();
      });
    },
    showDialog() {
      this.fetchFormData(this.endpoint);
      this.displayDialog = true;
    },
    closeDialog() {
      this.clearInputFields();
      this.displayDialog = false;
    },
    getDataToSend() {


      const dataToSend = this.formData;

      // Add specific fields based on the endpoint
      if (this.endpoint === 'formulas') {
        dataToSend.author = this.formData.author;
        dataToSend.hay = this.formData.hay;
        dataToSend.corn = this.formData.corn;
        dataToSend.guano = this.formData.guano;
        dataToSend.cottonSeedCake = this.formData.cottonSeedCake;
        dataToSend.soyBeanMeal = this.formData.soyBeanMeal;
        dataToSend.gypsum = this.formData.gypsum;
        dataToSend.urea = this.formData.urea;
        dataToSend.ammoniumSulphate = this.formData.ammoniumSulphate;
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'preparationareas') {
        dataToSend.author = this.formData.author;
        dataToSend.activities = this.formData.activities;
        dataToSend.temperature = this.formData.temperature;
        dataToSend.comment = this.formData.comment;
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'bunkers') {
        dataToSend.author = this.formData.author;
        dataToSend.thermocoupleOne = this.formData.thermocoupleOne;
        dataToSend.thermocoupleTwo = this.formData.thermocoupleTwo;
        dataToSend.thermocoupleThree = this.formData.thermocoupleThree;
        dataToSend.motorFrequency = this.formData.motorFrequency;
        dataToSend.comment = this.formData.comment;
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'tunnels') {
        dataToSend.author = this.formData.author;
        dataToSend.thermocoupleOne = this.formData.thermocoupleOne;
        dataToSend.thermocoupleTwo = this.formData.thermocoupleTwo;
        dataToSend.thermocoupleThree = this.formData.thermocoupleThree;
        dataToSend.motorFrequency = this.formData.frequency;
        dataToSend.freshAir = this.formData.freshAir;
        dataToSend.recirculation = this.formData.recirculation;
        dataToSend.comment = this.formData.comment;
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'growroomrecords/Incubation') {
        dataToSend.author = this.formData.author;
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        //dataToSend.processType = 'Incubation';
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'growroomrecords/Casing') {
        dataToSend.author = this.formData.author;
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        //dataToSend.processType = 'Casing';
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'growroomrecords/Induction') {
        dataToSend.author = this.formData.author;
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        //dataToSend.processType = 'Induction';
        dataToSend.employeeId = 1;
      } else if (this.endpoint === 'growroomrecords/Harvest') {
        dataToSend.author = this.formData.author;
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        //dataToSend.processType = 'Harvest';
        dataToSend.employeeId = 1;
      }

      console.log('Data to send:', this.formData);

      return dataToSend;
    },
    formatDate(originalDate) {
      // Parse the original date string
      const dateObject = new Date(originalDate);

      // Extract the relevant parts
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(dateObject.getDate()).padStart(2, "0");

      // Form the formatted date string
      return`${year}-${month}-${day}`;
    },
    saveDialog() {
      const dataToSend = this.getDataToSend();
      console.log('Data to send:', dataToSend)
      let endpointSend = this.endpoint;
      if(this.endpoint === 'growroomrecords/Incubation' || this.endpoint === 'growroomrecords/Casing' || this.endpoint === 'growroomrecords/Induction' || this.endpoint === 'growroomrecords/Harvest'){
         endpointSend = 'growroomrecords';
      }
      this.greenhouseApi.create(this.crop_id,endpointSend, dataToSend)
          .then(response => {
            console.log('Data saved successfully:', response.data);
            console.log("Time: ", response.data.time)
            response.data.time = this.formatTime(response.data.time);
            console.log("Time 2: ", response.data.time)
            this.processData.push(response.data);
            this.clearInputFields();
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      this.displayDialog = false;
    },
    clearInputFields() {
      console.log("Process data length: ", this.processData.length)
      if(this.processData.length === 1){
        let endpointSend = this.endpoint;
        if(this.endpoint === 'growroomrecords/Incubation' || this.endpoint === 'growroomrecords/Casing' || this.endpoint === 'growroomrecords/Induction' || this.endpoint === 'growroomrecords/Harvest'){
          endpointSend = 'growroomrecords';
        }
        this.fetchData(endpointSend);
        this.fetchDataAndColumns(endpointSend);
      }
      for (const key in this.formData) {
        this.formData[key] = null;
      }
    },
    formatTime(originalTime) {
      // Parse the original time string
      const timeArray = originalTime.split(":");
      const hours = timeArray[0];
      const minutes = timeArray[1];
      const seconds = timeArray[2].split(".")[0]; // Extract seconds without milliseconds

      // Form the formatted time string
      return `${hours}:${minutes}:${seconds}`;
    },
    addFormData() {
      if(this.form[0] === undefined) {
        if (this.endpoint === 'formulas') {
          this.form[0] = {
            author: "",
            hay: 0,
            corn: 0,
            guano: 0,
            cottonSeedCake: 0,
            soyBeanMeal: 0,
            gypsum: 0,
            urea: 0,
            ammoniumSulphate: 0
          }
        } else if (this.endpoint === 'preparationareas') {
          this.form[0] = {
            author: "",
            activities: "",
            temperature: 0,
            comment: ""
          }
        } else if (this.endpoint === 'bunkers') {
          this.form[0] = {
            author: "",
            thermocoupleOne: 0,
            thermocoupleTwo: 0,
            thermocoupleThree: 0,
            motorFrequency: 0,
            comment: ""
          }
        } else if (this.endpoint === 'tunnels') {
          this.form[0] = {
            author: "",
            thermocoupleOne: 0,
            thermocoupleTwo: 0,
            thermocoupleThree: 0,
            motorFrequency: 0,
            freshAir: 0,
            recirculation: 0,
            comment: ""
          }
        } else if (this.endpoint === 'growroomrecords/Incubation') {
          this.form[0] = {
            author: 0,
            growRoom: 0,
            airTemperature: 0,
            compostTemperature: 0,
            carbonDioxide: 0,
            airHumidity: 0,
            setting: 0,
            comment: 0
          }
        } else if (this.endpoint === 'growroomrecords/Casing') {
          this.form[0] = {
            author: 0,
            growRoom: 0,
            airTemperature: 0,
            compostTemperature: 0,
            carbonDioxide: 0,
            airHumidity: 0,
            setting: 0,
            comment: 0
          }
        } else if (this.endpoint === 'growroomrecords/Induction') {
          this.form[0] = {
            author: 0,
            growRoom: 0,
            airTemperature: 0,
            compostTemperature: 0,
            carbonDioxide: 0,
            airHumidity: 0,
            setting: 0,
            comment: 0
          }
        } else if (this.endpoint === 'growroomrecords/Harvest') {
          this.form[0] = {
            author: 0,
            growRoom: 0,
            airTemperature: 0,
            compostTemperature: 0,
            carbonDioxide: 0,
            airHumidity: 0,
            setting: 0,
            comment: 0
          }
        }
      }
      this.titles = Object.keys(this.form[0])
          .filter((key) => key !== "processType" && key !== 'cropId' && key !== "id" && key !== "apiId"  && key !== "date" && key !== "time" && key !== "day" && key !== "averageThermocouple")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    },
    addData() {
      this.titles = Object.keys(this.processData[0])
          .filter((key) => key !== "processType" && key !== 'crop_id' && key !== "id" && key !== "apiId" && key !== "author" && key !== "date" && key !== "time")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    }
  }
}

</script>

<template>
  <pv-data-table
      class="overflow-hidden ml-4 mr-4 mb-4"
      :value="processData"
      ref="dt"
      dataKey="id"
      :paginator="true"
      :rows="10"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport
        RowsPerPageDropdown"
      :filters="filters"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      responsiveLayout="scroll">
    <template #header>
      <div class="table-header flex flex-column md:justify-content-between">
        <h2 class="mb-2 md:m-0 p-as-md-center text-xl font-bold">Records of crop {{ crop_id }}, started on {{ start_date }}</h2>
        <pv-input-text class="bg-transparent border-transparent text-black"
                       v-model="filters['global'].value"
                       placeholder="Filter records..."/>
      </div>
    </template>
    <pv-column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header">
    </pv-column>
  </pv-data-table>
  <!-- Prueba de botón -->
  <div>
    <pv-dialog
        :visible="displayDialog"
        :modal="true"
        header="Create new record"
        :closable="false"
        :width="300"
        :resizable="false"
        @onHide="closeDialog"
    >
      <div class="p-fluid p-2">
        <div class="p-field" v-for="title in titles" :key="title.field">
          <h1>{{ title.header }}</h1>
          <input class="p-inputtext" :placeholder="'Register ' + title.header" v-model="formData[title.field]"/>
        </div>
      </div>
      <div class="p-dialog-footer flex">
        <button type="button" class="p-button bg-white" @click="closeDialog">
          <span class="text-black">Cancel</span>
        </button>
        <button type="button" class="p-button bg-white" @click="saveDialog">
          <span class="text-black font-bold">Save</span>
        </button>
      </div>
    </pv-dialog>
  </div>
</template>

<style scoped>
h2 {
  color: var(--primary-green);
  font-size: var(--medium-text-regular-size);
  font-family: var(--font-primary);
}

:deep(th)  {
  background-color: var(--secondary-green-2) !important;
  color: var(--white) !important;
}

.records {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
}
</style>