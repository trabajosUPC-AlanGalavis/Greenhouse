<template>
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

<script>
import {GreenhouseApiService} from "@/greenhouse/services/greenhouse-api.service";
import {FilterMatchMode} from "primevue/api";

export default {
  name: "process-input-dialog-stock",
  props: {
    endpoint: null,
  },
  data() {
    return {
      displayDialog: false,
      filters: {},
      processData: [],
      titles: null,
      greenhouseApi: new GreenhouseApiService(),
      formData: {}
    }
  },
  created() {
    this.initFilters();
  },
  mounted() {
    // Fetch initial data and columns
    this.fetchData(this.endpoint);
  },
  watch: {
    endpoint(newEndpoint, oldEndpoint) {
      if (newEndpoint !== oldEndpoint) {
        this.fetchData(newEndpoint);
      }
    },
  },

  methods: {
    showDialog() {
      this.displayDialog = true;
    },
    closeDialog() {
      this.displayDialog = false;
    },
    getDataToSend() {
      const currentDateTime = new Date();
      const currentDate = currentDateTime.toISOString().split('T')[0];
      const currentTime = currentDateTime.toTimeString().split(' ')[0];

      // Common data fields
      const commonData = {
        author: 'Winston Smith',
        day: this.formData.day, // TODO calculate it
        date: currentDate,
        time: currentTime,
        crop_id: 1, // TODO calculate it
      };

      // Merge common data with the formData
      //const dataToSend = this.formData;
      console.log('Data to send:', this.formData);
      const dataToSend = { ...commonData, ...this.formData };

      // Add specific fields based on the endpoint
      if (this.endpoint === 'stock?') {
        dataToSend.hay = this.formData.hay;
        dataToSend.corn = this.formData.corn;
        dataToSend.guano = this.formData.guano;
        dataToSend.cottonSeedCake = this.formData.cottonSeedCake;
        dataToSend.soyBeanMeal = this.formData.soyBeanMeal;
        dataToSend.gypsum = this.formData.gypsum;
        dataToSend.urea = this.formData.urea;
        dataToSend.ammoniumSulphate = this.formData.ammoniumSulphate;
        // Add other fields as needed
      } else if (this.endpoint === 'preparation_area?') {
        dataToSend.activities = this.formData.activities;
        dataToSend.temperature = this.formData.temperature;
        dataToSend.comment = this.formData.comment;
        // Add other fields as needed
      } else if (this.endpoint === 'bunker?') {
        dataToSend.thermocoupleOne = this.formData.thermocoupleOne;
        dataToSend.thermocoupleTwo = this.formData.thermocoupleTwo;
        dataToSend.thermocoupleThree = this.formData.thermocoupleThree;
        dataToSend.average = this.formData.average;
        dataToSend.frequency = this.formData.frequency;
        dataToSend.comment = this.formData.comment;
        // Add other fields as needed
      } else if (this.endpoint === 'tunnel?') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.thermocoupleOne = this.formData.thermocoupleOne;
        dataToSend.thermocoupleTwo = this.formData.thermocoupleTwo;
        dataToSend.thermocoupleThree = this.formData.thermocoupleThree;
        dataToSend.average = this.formData.average;
        dataToSend.frequency = this.formData.frequency;
        dataToSend.freshAir = this.formData.freshAir;
        dataToSend.recirculation = this.formData.recirculation;
        dataToSend.comment = this.formData.comment;
        // Add other fields as needed
      } else if (this.endpoint === 'grow_room_record?processType=Incubation&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHydrogen = this.formData.airHydrogen;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Incubation';
      } else if (this.endpoint === 'grow_room_record?processType=Casing&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHydrogen = this.formData.airHydrogen;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Casing';
      } else if (this.endpoint === 'grow_room_record?processType=Induction&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHydrogen = this.formData.airHydrogen;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Induction';
      } else if (this.endpoint === 'grow_room_record?processType=Harvest&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHydrogen = this.formData.airHydrogen;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Harvest';
      }
      return dataToSend;
    },


    saveDialog() {
      const dataToSend = this.getDataToSend();
      //console.log('Data to send:', dataToSend)
      this.greenhouseApi.create(this.endpoint, dataToSend)
          .then(response => {
            console.log('Data saved successfully:', response.data);
            this.clearInputFields();
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      this.displayDialog = false;
    },
    clearInputFields() {
      for (const key in this.formData) {
        this.formData[key] = null;
      }
    },
    initFilters() {
      this.filters = {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
      };
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
    },
    fetchData(endpoint) {
      this.greenhouseApi.getAllData(endpoint).then((response) => {
        this.processData = response.data;
        this.addData();
      });
    },
  }
}
</script>

<style scoped>
* {
  font-family: var(--font-primary);
}
</style>