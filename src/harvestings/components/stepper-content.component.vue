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
    <process-table :endpoint="phases[currentStep].endpoint"></process-table>
    <div class="button-group flex-shrink">
      <button-primary class="mb-3"
                      @click="nextStep"
                      :text="'End phase'"
                      :buttonColor="'var(--red)'"
                      :buttonTextColor="'var(--white)'"
                      :buttonBorderColor="'var(--red)'">
      </button-primary>
      <button-primary
          class="mb-3"
          :text="' + Create new record'"
          :buttonColor="'var(--white)'"
          :buttonTextColor="'var(--primary-green)'"
          :buttonBorderColor="'var(--primary-green)'"
          @click="openInputDialog">
        </button-primary>
    </div>
    <div class="mb-3">
      <p class="text-black" v-if="record">Recorded info: {{ record }}</p>
    </div>

    <process-input-dialog
        ref="processInputDialog"
        @save-record="updateRecord"
    ></process-input-dialog>
  </div>
</template>

<script>
import ButtonPrimary from '../../shared/components/button-primary.component.vue';
import ProcessTable from "../../harvestings/components/process-table.component.vue";
import ProcessInputDialog from "../../harvestings/components/process-input-dialog.component.vue";

export default {
  name: 'stepper-content',
  components: {ProcessTable, ButtonPrimary, ProcessInputDialog },
  data() {
    return {
      currentStep: 0,
      phases: [
        { label: '0', message: 'Stock', endpoint: 'stock' },
        { label: '1', message: 'Preparation area', endpoint: 'preparation_area' },
        { label: '2', message: 'Bunker', endpoint: 'bunker' },
        { label: '3', message: 'Tunnel', endpoint: 'tunnel' },
        { label: '4.1', message: 'Incubation', endpoint: 'grow_room_record?processType=Incubation' },
        { label: '4.2', message: 'Casing', endpoint: 'grow_room_record?processType=Casing' },
        { label: '4.3', message: 'Induction', endpoint: 'grow_room_record?processType=Induction' },
        { label: '4.4', message: 'Harvest', endpoint: 'grow_room_record?processType=Harvest' },
      ],
      record: "",
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
        console.log(this.currentStep);
        console.log(this.phases[this.currentStep].endpoint)
      }
    },
    openInputDialog() {
      this.$refs.processInputDialog.showDialog();
    },
    updateRecord(newRecord) {
      this.record = newRecord;
    },
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
