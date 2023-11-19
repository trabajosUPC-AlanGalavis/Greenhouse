<script>
import ButtonPrimary from './button-primary.component.vue';
import ProcessTable from "../pages/process-table.component.vue";
import {CropApiService} from "@/greenhouse/services/crop-api.service";

export default {
  name: 'stepper-contents',
  components: {
    ProcessTable,
    ButtonPrimary,
  },
  data() {
    return {
      cropApiService: new CropApiService(),
      currentStep: 0,
      start_date: '',
      isButtonDisabled: false,
      showPopup: false,
      isLastPhase: false,
      phases: [
        {label: '0', message: 'formula', endpoint: 'formulas'},
        {label: '1', message: 'preparation_area', endpoint: 'preparationareas'},
        {label: '2', message: 'bunker', endpoint: 'bunkers'},
        {label: '3', message: 'tunnel', endpoint: 'tunnels'},
        {label: '4.1', message: 'incubation', endpoint: 'growroomrecords/Incubation'},
        {label: '4.2', message: 'casing', endpoint: 'growroomrecords/Casing'},
        {label: '4.3', message: 'induction', endpoint: 'growroomrecords/Induction'},
        {label: '4.4', message: 'harvest', endpoint: 'growroomrecords/Harvest'},
      ],
      record: "",
      phaseMapping: {
        'Formula': 0,
        'PreparationArea': 1,
        'Bunker': 2,
        'Tunnel': 3,
        'Incubation': 4,
        'Casing': 5,
        'Induction': 6,
        'Harvest': 7,
      },
      phaseMappingForEndpoint: {
        0: 'Formulas',
        1: 'PreparationAreas',
        2: 'Bunkers',
        3: 'Tunnels',
        4: 'Incubations',
        5: 'Casings',
        6: 'Inductions',
        7: 'Harvests',
      }
    };
  },
  created() {
    this.currentStep = this.phaseMapping[this.$route.params.phase];
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
    openPopup() {
      this.showPopup = true;
      this.isButtonDisabled = true;
    },

    closePopup() {
      this.showPopup = false;
      this.isButtonDisabled = false;
    },

    closeNotification() {
      this.cropApiService.updateCropState(this.$route.params.crop_id)
          .then((response) => {
            console.log(response);
          }).catch(error => {
        console.error('Error updating crop state:', error);
      });
      this.isLastPhase = false;
    },

    handleStepClick(index) {
      console.log('Click on step:', index);
      this.$emit('step-clicked', index);
    },
    nextStep() {
      this.showPopup = false;
      this.isButtonDisabled = false;
      if (this.currentStep === 7) {
        this.isLastPhase = true;
      } else if (this.currentStep < this.phases.length - 1) {
        this.currentStep++;
        console.log(this.currentStep);
        console.log(this.phases[this.currentStep].endpoint)
      }
      this.cropApiService.updateCurrentPhase(this.$route.params.crop_id, this.phaseMappingForEndpoint[this.currentStep])
          .then((response) => {
            console.log(response);
          }).catch(error => {
        console.error('Error updating current phase:', error);
      });
      this.$router.push({
        name: 'stepper',
        params: {
          crop_id: this.$route.params.crop_id,
          phase: this.phaseMappingForEndpoint[this.currentStep],
        },
      })
    },
    openInputDialog() {
      this.$refs.ProcessTable.showDialog();
    }
  },
};
</script>

<template>
  <div class="card">
    <pv-steps class="stepper" :model="phases" aria-label="Phases" :active-index="currentStep"
              @update:activeIndex="updateStep">
      <template #item="{ label, item, index }">
        <div class="step-item" :class="{ 'active-step': index === currentStep, 'completed-step': index < currentStep }"
             @click="handleStepClick(index)">
          <span class="step-number">{{ label }}</span>
          <p v-if="shouldDisplayMessage" class="step-message" :class="{ 'completed-message': index < currentStep }">
            {{ $t('crop.'+ item.message) }}</p>
        </div>
      </template>
    </pv-steps>
    <process-table :endpoint="phases[currentStep].endpoint" :crop_id="$route.params.crop_id"
                   ref="ProcessTable"
    ></process-table>
    <div class="button-group flex-shrink">
      <button-primary class="mb-3 mr-3"
                      @click="openPopup"
                      :text="'End phase'"
                      :buttonColor="'var(--red)'"
                      :buttonTextColor="'var(--white)'"
                      :buttonBorderColor="'var(--red)'">
      </button-primary>
      <div class="popup-container" v-if="showPopup">
        <div class="popup-content">
          <div class="popup-header">
            <h2 class="uppercase">{{ $t('warning') }}</h2>
          </div>
          <div class="popup-body">
            <br>
            <p style="text-align: center;">{{
                "This phase is completed, you will not be able to make any more records at this stage. " +
                "Are you sure you want to continue?"
              }}</p>
            <h5>This operation is irreversible</h5>
          </div>
          <div class="popup-footer">
            <button-primary class="mb-2 mr-3 mt-4"
                            @click="nextStep"
                            :text="'Yes, finish it'"
                            :buttonColor="'var(--red)'"
                            :buttonTextColor="'var(--white)'"
                            :buttonBorderColor="'var(--red)'">
            </button-primary>
            <button-primary class="mb-2 mr-3 mt-4"
                            @click="closePopup"
                            :text="'Cancel'"
                            :buttonColor="'var(--gray-2)'"
                            :buttonTextColor="'var(--white)'"
                            :buttonBorderColor="'var(--gray-2)'">
            </button-primary>
          </div>
        </div>
      </div>
      <button-primary
          :disabled="isButtonDisabled"
          class="mb-3"
          :text="' + Create new record'"
          :buttonColor="'var(--white)'"
          :buttonTextColor="'var(--primary-green)'"
          :buttonBorderColor="'var(--primary-green)'"
          @click="openInputDialog">
      </button-primary>
    </div>

    <div class="popup-container" v-if="isLastPhase">
      <div class="popup-content">
        <div class="popup-header-2">
          <h2>CROP COMPLETED</h2>
        </div>
        <div class="popup-body-2">
          <br>
          <p style="text-align: center;">The cultivation started on {{ start_date }} has successfully completed all
            stages, the records were filled in the section <strong>"Control Panel", Crop History"</strong></p>
        </div>

        <div class="popup-footer">
          <router-link to="/dashboard">
            <button-primary
                class="text-center mt-3 mx-auto"
                :text="' Accept and return to the main Menu'"
                :buttonColor="'var(--primary-green)'"
                :buttonTextColor="'var(--primary-white)'"
                :buttonBorderColor="'var(--primary-green)'"
                @click="closeNotification()"
            >
            </button-primary>
          </router-link>



        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

.card {
  border-radius: 20px;
}

.stepper {
  background-color: #F4F5F9;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 2rem 24px;
  margin-bottom: 20px;
  font-family: var(--font-primary);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
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

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-body h5 {
  color: #626262;
}

.popup-body p {
  color: #626262;
  font-size: 16px;
  white-space: pre-wrap;
  padding: 10px;
}

.popup-content {
  position: relative;
  background-color: #fff;

  border-radius: 25px;
  text-align: center;
  padding-bottom: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.popup-content img {
  max-width: 100%;
  max-height: 70vh;
}

.close-button img {
  width: 24px;
  height: 24px;
  border: none;
}

.popup-body-2 p {
  color: #626262;
  font-size: 16px;
  white-space: pre-wrap;
  padding: 10px;
}


.popup-header {
  background-color: #FF3439;
  text-align: center;
  padding: 15px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

}

.popup-header h2 {
  color: white;
  margin: 0;
}

.popup-footer .btn {
  margin-right: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
}

.popup-footer .btn.yes-finish {
  background-color: #FF3439;
  color: white;
}


.popup-footer .btn.close {
  background-color: #D9D9D9;
  color: black;
}

.popup-header-2 {
  background-color: #4A845B;
  text-align: center;
  padding: 15px;
  border-radius: 20px 20px 0 0;
}

</style>