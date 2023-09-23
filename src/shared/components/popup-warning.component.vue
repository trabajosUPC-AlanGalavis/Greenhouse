<script>
export default {
  data() {
    return {
      showPopup: false,
      popupText:
          "This phase is completed, you will not be able to make any more records at this stage. Are you sure you want to continue?",
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<template>
  <button class="btn" @click="openPopup" :style="{ color: 'black' }">Confirm</button>
  <div class="popup-container" v-if="showPopup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>WARNING</h2>
      </div>
      <div class="popup-body">
        <br>
        <p style="text-align: center;">{{ popupText }}</p>
        <h5>This operation is irreversible</h5>
      </div>
      <div class="popup-footer">
        <button class="btn yes-finish" @click="closePopup()">Yes, finish it</button>
        <button class="btn close" @click="closePopup()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>