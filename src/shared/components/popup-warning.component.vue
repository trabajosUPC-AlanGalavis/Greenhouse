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

</template>

<style scoped>

</style>