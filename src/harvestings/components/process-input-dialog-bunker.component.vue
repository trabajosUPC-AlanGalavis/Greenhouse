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
          <h1>Register Thermocuple One:</h1>
          <input id="thermocoupleOne" v-model="thermocoupleOne" class="p-inputtext" placeholder="Register Thermocuple One"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Thermocouple Two:</h1>
          <input id="thermocoupleTwo" v-model="thermocoupleTwo" class="p-inputtext" placeholder="Register Thermocouple Two"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Thermocouple Three:</h1>
          <input id="thermocoupleThree" v-model="thermocoupleThree" class="p-inputtext" placeholder="Register Thermocouple Three"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Average Thermocouple:</h1>
          <input id="average" v-model="average" class="p-inputtext" placeholder="Register Average Thermocouple"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Frequency:</h1>
          <input id="frequency" v-model="frequency" class="p-inputtext" placeholder="Register Frequency"/>
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
  name: "process-input-dialog-bunker",
  data() {
    return {
      apiService: new GreenhouseApiService(),
      displayDialog: false,
      author: "",
      day: 0,
      date: "",
      time: "",
      thermocoupleOne: 0,
      thermocoupleTwo: 0,
      thermocoupleThree: 0,
      average: 0,
      frequency: 0,
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
        thermocoupleOne: this.thermocoupleOne,
        thermocoupleTwo: this.thermocoupleTwo,
        thermocoupleThree: this.thermocoupleThree,
        average: this.average,
        frequency: this.frequency,
        comment: this.comment,
      };
      this.apiService.create('bunker', dataToSend)
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