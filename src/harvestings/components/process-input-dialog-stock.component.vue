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
          <h1>Register Hay:</h1>
          <input id="hay" v-model="hay" class="p-inputtext" placeholder="Register Hay"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Corn:</h1>
          <input id="corn" v-model="corn" class="p-inputtext" placeholder="Register Corn"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Guano:</h1>
          <input id="guano" v-model="guano" class="p-inputtext" placeholder="Register Guano"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Cotton Seed Cake:</h1>
          <input id="cottonSeedCake" v-model="cottonSeedCake" class="p-inputtext" placeholder="Register Cotton Seed Cake"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Soybean Meal:</h1>
          <input id="soyBeanMeal" v-model="soyBeanMeal" class="p-inputtext" placeholder="Register Soybean Meal"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Gypsum:</h1>
          <input id="gypsum" v-model="gypsum" class="p-inputtext" placeholder="Register Gypsum"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Urea:</h1>
          <input id="urea" v-model="urea" class="p-inputtext" placeholder="Register Urea"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Ammonium Sulphate:</h1>
          <input id="ammoniumSulphate" v-model="ammoniumSulphate" class="p-inputtext" placeholder="Register Ammonium Sulphate"/>
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
  name: "process-input-dialog-stock",
  data() {
    return {
      apiService: new GreenhouseApiService(),
      displayDialog: false,
      author: "",
      day: 0,
      hay: 0,
      corn: 0,
      guano: 0,
      cottonSeedCake: 0,
      soyBeanMeal: 0,
      gypsum: 0,
      urea: 0,
      ammoniumSulphate: 0,
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
        hay: this.hay,
        corn: this.corn,
        guano: this.guano,
        cottonSeedCake: this.cottonSeedCake,
        soyBeanMeal: this.soyBeanMeal,
        gypsum: this.gypsum,
        urea: this.urea,
        ammoniumSulphate: this.ammoniumSulphate,
      };
      this.apiService.create('stock', dataToSend)
          .then(response => {
            console.log('Data saved successfully:', response.data);
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      this.displayDialog = false;
    }
  }
};
</script>

<style scoped>
* {
  font-family: var(--font-primary);
}
</style>