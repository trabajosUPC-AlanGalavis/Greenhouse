<template>
  <div>
    <records-content></records-content>
  </div>
</template>

<script>
import RecordsContent from "@/harvestings/components/records-content.component.vue";

export default {
  name: 'App',
  components: {RecordsContent},

}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito');

:root {
  --primary-green: #4D6443;
  --primary-white:#E1E8EC;
  --gray-1: #D9D9D9;
  --gray-2:#8E8E8E;
  --gray-3:#4D4D4D;
  --black: #282828;
  --white: #FFFFFF;
  --secondary-brown: #8B6341;
  --secondary-green-1: #4A845B;
  --secondary-green-2:#5B7051;
  --secondary-beige:#CBB99D;
  --red: #FF3439;
  --font-primary: nunito;
  --heading-1-size: 52px;
  --heading-2-size: 36px;
  --heading-3-size: 24px;
  --heading-4-size: 18px;
  --large-text-bold-size: 24px;
  --large-text-regular-size: 24px;
  --medium-text-bold-size: 18px;
  --medium-text-regular-size: 18px;
  --normal-text-bold-size: 16px;
  --normal-text-regular-size: 16px;
  --small-text-bold-size: 14px;
  --small-text-regular-size: 14px;
}

body {
  font-family: var(--font-primary);
}
</style>
