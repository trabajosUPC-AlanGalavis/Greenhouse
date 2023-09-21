<template>
  <pv-button class="button-primary" :style="{ backgroundColor: buttonColor, color: buttonTextColor}">
    <p>{{ text }}</p>
  </pv-button>
</template>

<script>
export default {
  name: 'button-primary',
  props: {
    text: null,
    buttonColor: null,
    buttonTextColor: null,
  },
};
</script>

<style scoped>
.button-primary {
  display: inline-flex;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-style: solid;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-family: var(--font-primary);
}
</style>