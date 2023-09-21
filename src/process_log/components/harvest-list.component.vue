<template>
  <router-link to="/stepper">
    <button-primary
        @click="currentSection = 'stepper'"
        :text="'+ Start new harvest'"
        :buttonColor="'var(--secondary-green-2)'"
        :buttonTextColor="'var(--white)'">
    </button-primary>
  </router-link>
  <router-view></router-view>
</template>

<script>
import ButtonPrimary from "@/shared/components/button-primary.component.vue";
export default {
  name: "harvest-list",
  components: {ButtonPrimary},
  data() {
    return {
      currentSection: "process-log",
    };
  },
}
</script>

<style scoped>

</style>