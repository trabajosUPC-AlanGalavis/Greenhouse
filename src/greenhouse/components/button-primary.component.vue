<script>
export default {
  name: 'button-primary',
  props: {
    text: null,
    buttonColor: null,
    buttonTextColor: null,
    buttonBorderColor: null,
  },
};
</script>

<template>
  <pv-button class="button-primary" :style="{ backgroundColor: buttonColor, borderColor: buttonBorderColor}">
    <p :style="{ color: buttonTextColor }">{{ text }}</p>
  </pv-button>
</template>

<style scoped>
.button-primary {
  justify-content: center;
  align-items: center;
  border: solid 2px;
  border-radius: 50px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-family: var(--font-primary);
}
</style>