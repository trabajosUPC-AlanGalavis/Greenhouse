<template>
  <pv-card class="card">
    <template #content>
      <stepper-content @step-clicked="updateStep"></stepper-content>
    </template>
  </pv-card>
</template>

<script>
import StepperContent from "@/harvestings/components/stepper-content.component.vue";
export default {
  name: 'records-content',
  components: {StepperContent},
  data() {
    return {
      currentStep: 0,
    };
  },
  methods: {
    updateStep(newStep) {
      this.currentStep = newStep;
    },
  },
}
</script>

<style scoped>
.card {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  border-radius: 4px;
}


</style>