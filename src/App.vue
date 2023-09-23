<template>
  <div>
    <header-content></header-content>
    <router-view></router-view>
  </div>
</template>

<script>
import ButtonPrimary from "@/shared/components/button-primary.component.vue";
import HarvestList from "@/process_log/components/harvest-list.component.vue";
import HeaderContent from "@/header/components/header-content.component.vue";

export default {
  name: "App",
  components: {HeaderContent, HarvestList, ButtonPrimary },
  data() {
    return {
      currentSection: "process-log",
    };
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

@tailwind base;
@tailwind components;
@tailwind utilities;

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
