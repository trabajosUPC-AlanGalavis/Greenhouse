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
export default {
  name: "process-input-dialog-preparation-area",
  data() {
    return {
      displayDialog: false,
      author: "",
      day: 0,
      date: "",
      time: "",
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