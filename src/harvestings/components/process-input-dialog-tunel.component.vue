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
          <h1>Register Date:</h1>
          <input id="date" v-model="date" class="p-inputtext" placeholder="Register Date"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Time:</h1>
          <input id="time" v-model="time" class="p-inputtext" placeholder="Register Time"/>
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
          <h1>Register Fresh Air:</h1>
          <input id="freshAir" v-model="freshAir" class="p-inputtext" placeholder="Register Fresh Air"/>
        </div>
      </div>
      <div class="p-fluid p-2">
        <div class="p-field">
          <h1>Register Recirculation:</h1>
          <input id="recirculation" v-model="recirculation" class="p-inputtext" placeholder="Register Recirculation"/>
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
export default {
  name: "process-input-dialog-tunel",
  data() {
    return {
      displayDialog: false,
      author: "",
      day: 0,
      date: "",
      time: "",
      growRoom: 0,
      thermocoupleOne: 0,
      thermocoupleTwo: 0,
      thermocoupleThree: 0,
      average: 0,
      frequency: 0,
      freshAir: 0,
      recirculation: 0,
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
      this.$emit("save-record", this.author);
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