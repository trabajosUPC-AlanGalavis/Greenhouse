<template>
  <div class="card">
    <pv-steps class="stepper" :model="phases" aria-label="Phases" :active-index="currentStep" @update:activeIndex="updateStep">
      <template #item="{ label, item, index }">
        <div class="step-item" :class="{ 'active-step': index === currentStep, 'completed-step': index < currentStep }" @click="handleStepClick(index)">
          <span class="step-number">{{ label }}</span>
          <div v-if="shouldDisplayMessage" class="step-message" :class="{ 'completed-message': index < currentStep }">
            <p>{{ item.message }}</p>
          </div>
        </div>
      </template>
    </pv-steps>
      <h2 class="padding">Registros del cultivo {{""}}, iniciado el {{""}}</h2>
      <span class="padding">
        <button-primary class="margin"
                        @click="nextStep"
                        :text="'End phase'"
                        :buttonColor="'var(--red)'">
        </button-primary>
        <button-primary class="margin"
                        :text="' + Create new record'"
                        :buttonColor="'var(--primary-white)'"
                        :buttonTextColor="'var(--primary-green)'">
        </button-primary>
      </span>
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
    }
  },
};
</script>

<style scoped>

.stepper {
  background-color: #F4F5F9;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 5px 24px;
  margin-bottom: 20px;
  font-family: var(--font-primary);
}


.step-item {
  display: flex;
  align-items: center;
}

.step-number {
  width: 30px;
  height: 30px;
  color: var(--gray-2);
  border-radius: 50%;
  border-style: solid;
  border-color: var(--gray-2);
  text-align: center;
  line-height: 26px;
  font-size: var(--small-text-regular-size);
  margin-right: 10px;
}

.step-message {
  flex: 1;
  text-align: left;
  color: var(--gray-2);
  font-size: var(--medium-text-regular-size);
}

.active-step .step-number {
  background-color: var(--secondary-green-1);
  color: var(--primary-white);
  border-color: var(--secondary-green-1);
}

.active-step .step-message {
  color: var(--secondary-green-1);
  font-weight: bold;
}

.completed-step .step-number {
  border-color: var(--black);
  color: var(--black);
}

.completed-message {
  color: var(--black);
}

h2 {
  color: var(--primary-green);
  font-size: var(--medium-text-regular-size);
}

.padding {
  padding: 0 24px;
}

.margin {
  margin-right: 12px;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .stepper {
    padding: 5px 0;
  }
  .step-message {
    display: none;
  }
}
</style>
