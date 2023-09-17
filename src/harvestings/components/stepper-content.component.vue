<template>
  <div class="card">
    <pv-steps :model="phases" aria-label="Phases" :active-index="currentStep" @update:activeIndex="updateStep">
      <template #item="{ label, item, index }">
        <div class="step-item" :class="{ 'active-step': index === currentStep }" @click="handleStepClick(index)">
          <span class="step-number">{{ label }}</span>
          <div v-if="shouldDisplayMessage" class="step-message">
            <p>{{ item.message }}</p>
          </div>
        </div>
      </template>
    </pv-steps>
    <button-primary @click="nextStep"
                    :text="'End phase'"
                    :buttonColor="'var(--red)'">
    </button-primary>
    <button-primary
                    :text="' + Create new record'"
                    :buttonColor="'var(--primary-white)'"
                    :buttonTextColor="'var(--primary-green)'">
    </button-primary>
  </div>
</template>

<script>
import ButtonPrimary from './button-primary.component.vue';
export default {
  name: 'stepper-content',
  components: { ButtonPrimary },
  data() {
    return {
      currentStep: 0,
      phases: [
        { label: '0', message: 'Stock' },
        { label: '1', message: 'Preparation area' },
        { label: '2', message: 'Bunker' },
        { label: '3', message: 'Tunnel' },
        { label: '4.1', message: 'Incubation' },
        { label: '4.2', message: 'Casing' },
        { label: '4.3', message: 'Induction' },
        { label: '4.4', message: 'Harvest' },
      ],
    };
  },
  computed: {
    shouldDisplayMessage() {
      return window.innerWidth > 768;
    },
  },
  methods: {
    updateStep(newStep) {
      this.currentStep = newStep;
    },
    handleStepClick(index) {
      console.log('Click on step:', index);
      this.$emit('step-clicked', index);
    },
    nextStep() {
      if (this.currentStep < this.phases.length - 1) {
        this.currentStep++;
      }
    },
  },
};
</script>

<style scoped>
.step-item {
  display: flex;
  align-items: center;
}

.step-number {
  width: 30px;
  height: 30px;
  color: var(--gray-3);
  border-radius: 50%;
  border-style: solid;
  border-color: var(--gray-3);
  text-align: center;
  line-height: 25px;
  font-size: 16px;
  margin-right: 10px;
}

.step-message {
  flex: 1;
  text-align: center;
  color: var(--gray-3);
}

.active-step .step-number {
  background-color: var(--secondary-green-1);
  color:var(--primary-white);
  border-color: var(--secondary-green-1);
  font-weight: bold;
}

.active-step .step-message {
  color: var(--secondary-green-1);
  font-weight: bold;
}

@media (max-width: 768px) {
  .step-message {
    display: none;
  }
}
</style>