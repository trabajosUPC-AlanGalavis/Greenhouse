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
          <h1>Register Activities:</h1>
          <input id="activities" v-model="activities" class="p-inputtext" placeholder="Register Activities"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Temperature:</h1>
          <input id="temperature" v-model="temperature" class="p-inputtext" placeholder="Register Temperature"/>
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
  name: "process-input-dialog-preparation-area",
  data() {
    return {
      apiService: new GreenhouseApiService(),
      displayDialog: false,
      author: "",
      day: 0,
      activities: "",
      temperature: 0,
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
        activities: this.activities,
        temperature: this.temperature,
        comment: this.comment
      }
      this.apiService.create('preparation_area', dataToSend)
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