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
      <div class="p-fluid">
        <div class="p-field">
          <input id="record" v-model="record" class="p-inputtext" placeholder="Register"/>
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
  name: "process-input-dialog",
  data() {
    return {
      displayDialog: false,
      record: "",
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
      this.$emit("save-record", this.record);
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