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
          <input class="p-inputtext" :placeholder="'Register ' + title.header" />
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
      greenhouseApi: new GreenhouseApiService()
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
    saveDialog() {
      const currentDateTime = new Date();

      const currentDate = currentDateTime.toISOString().split('T')[0];
      const currentTime = currentDateTime.toTimeString().split(' ')[0];
      const dataToSend = {
        author: this.author,
        day: this.day,
        date: currentDate,
        time: currentTime,
        thermocoupleOne: this.thermocoupleOne,
        thermocoupleTwo: this.thermocoupleTwo,
        thermocoupleThree: this.thermocoupleThree,
        average: this.average,
        frequency: this.frequency,
        comment: this.comment,
      };
      this.greenhouseApi.create('bunker', dataToSend)
          .then(response => {
            console.log('Data saved successfully:', response.data);
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      this.displayDialog = false;
    },
    initFilters() {
      this.filters = {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
      };
    },
    addData() {
      this.titles = Object.keys(this.processData[0])
          .filter((key) => key !== "processType" && key !== 'crop_id' && key !== "id" && key !== "apiId" && key !== "author" && key !== "day" && key !== "date" && key !== "time")
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