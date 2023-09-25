<template>
  <div>
    <pv-dialog
        :visible="displayDialog"
        :modal="true"
        header="Create new record"
        :closable="false"
        :width="300"
        :resizable="false"
        @onHide="closeDialog">
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Author:</h1>
          <input id="author" v-model="author" class="p-inputtext" placeholder="Register Author"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Day:</h1>
          <input id="day" v-model="day" class="p-inputtext" placeholder="Register Day"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Grow Room:</h1>
          <input id="growRoom" v-model="growRoom" class="p-inputtext" placeholder="Register Grow Room"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Air Temperature:</h1>
          <input id="airTemperature" v-model="airTemperature" class="p-inputtext" placeholder="Register Air Temperature"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Compost Temperature:</h1>
          <input id="compostTemperature" v-model="compostTemperature" class="p-inputtext" placeholder="Register Compost Temperature"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Carbon Dioxide:</h1>
          <input id="carbonDioxide" v-model="carbonDioxide" class="p-inputtext" placeholder="Register Carbon Dioxide"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Air Hydrogen:</h1>
          <input id="airHydrogen" v-model="airHydrogen" class="p-inputtext" placeholder="Register Air Hydrogen"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Setting:</h1>
          <input id="setting" v-model="setting" class="p-inputtext" placeholder="Register Setting"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Comment:</h1>
          <input id="comment" v-model="comment" class="p-inputtext" placeholder="Register Comment"/>
        </div>
      </div>
      <div class="p-dialog-footer flex">
        <button type="button" class="p-button bg-white" @click="closeDialog"> <span class="text-black">Cancel</span></button>
        <button type="button" class="p-button bg-white" @click="saveDialog"> <span class="text-black font-bold">Save</span></button>
      </div>
    </pv-dialog>
  </div>
</template>

<script>
import {GreenhouseApiService} from "@/shared/services/greenhouse-api.service";

export default {
  name: "process-input-dialog",
  props: {
    processType: String,
    endpoint: String,
  },
  data() {
    return {
      apiService: new GreenhouseApiService(),
      displayDialog: false,
      author: "",
      day: 0,
      growRoom: 0,
      airTemperature: 0,
      compostTemperature: 0,
      carbonDioxide: 0,
      airHydrogen: 0,
      setting: 0,
      comment: "",
    };
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
        growRoom: this.growRoom,
        airTemperature: this.airTemperature,
        compostTemperature: this.compostTemperature,
        carbonDioxide: this.carbonDioxide,
        airHydrogen: this.airHydrogen,
        setting: this.setting,
        comment: this.comment,
        processType: this.processType,
      }
      this.apiService.create(this.endpoint, dataToSend)
          .then(response => {
            console.log('Data saved successfully:', response.data);
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      this.displayDialog = false;
    },
  },
};
</script>

<style scoped>
* {
  font-family: var(--font-primary);
}
</style>