<template>
  <div class="card m-5">
    <pv-steps class="stepper" :model="phases" aria-label="Phases" :active-index="currentStep" @update:activeIndex="updateStep">
      <template #item="{ label, item, index }">
        <div class="step-item" :class="{ 'active-step': index === currentStep, 'completed-step': index < currentStep }" @click="handleStepClick(index)">
          <span class="step-number">{{ label }}</span>
          <p v-if="shouldDisplayMessage" class="step-message" :class="{ 'completed-message': index < currentStep }">{{ item.message }}</p>
        </div>
      </template>
    </pv-steps>
    <process-table></process-table>
    <h2 class="p-3 pl-5 font-bold">Records of harvest {{""}}, started on {{""}}</h2>
    <div class="button-group flex-shrink">
      <button-primary class="mb-3"
                      @click="nextStep"
                      :text="'End phase'"
                      :buttonColor="'var(--red)'"
                      :buttonTextColor="'var(--white)'"
                      :buttonBorderColor="'var(--red)'">
      </button-primary>
      <button-primary class="mb-3"
                      :text="' + Create new record'"
                      :buttonColor="'var(--primary-white)'"
                      :buttonTextColor="'var(--primary-green)'"
                      :buttonBorderColor="'var(--primary-green)'">
      </button-primary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../../shared/components/button-primary.component.vue';
import ProcessTable from "../../harvestings/components/process-table.component.vue";

export default {
  name: 'stepper-content',
  components: {ProcessTable, ButtonPrimary },
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
.card {
background-color: var(--white);
box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
border-radius: 4px;
}

.stepper {
background-color: #F4F5F9;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
padding: 2rem 24px;
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
  font-size: var(--small-text-regular-size);
  text-align: center;
  border: 2px solid var(--gray-2);
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.step-message {
  flex: 1;
  text-align: left;
  color: var(--gray-2);
  font-size: var(--medium-text-regular-size);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
font-family: var(--font-primary);
}

.step-message {
display: contents;
}

.button-group {
  padding-left: 2rem;
}

@media (max-width: 768px) {
  .stepper {
    padding: 5px 0;
  }
  .step-message {
  display: none;
  }
  .button-group {
    padding: 0;
    flex-shrink: 1;
    text-align: center;
  }
}
</style>
