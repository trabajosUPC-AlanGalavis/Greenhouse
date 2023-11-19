<script>
import {CropApiService} from "@/greenhouse/services/crop-api.service";
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import {FilterMatchMode, FilterOperator} from "primevue/api";
import {date} from "yup";

export default {
  name: "crops-in-progress",
  components: {ButtonPrimary},

  data() {
    return {
      cropApiService: new CropApiService(),
      cropsData: [],
      selectedCrop: null,
      newCrop: {},
      cropQuantity: 0,
      showPopup: false,
      crop_id: 0,
      filters: {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
        date: {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
      },
    }
  },
  created() {
    this.getCropData();
  },
  methods: {
    getCropData() {
      this.cropApiService.getCropData(1).then((response) => {
        this.cropsData = response.data;
        console.log(this.cropsData);
        this.cropQuantity = this.cropsData.length;
        this.cropsData = this.cropsData.filter(data => (data.state === true));
        this.cropsData.forEach(data => {
          data.startDate = this.formatDate(data.startDate);
        });
        this.crop_id = this.cropQuantity + 1;
      })
    },
    formatDate(originalDate) {
      // Parse the original date string
      const dateObject = new Date(originalDate);

      // Extract the relevant parts
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(dateObject.getDate()).padStart(2, "0");

      // Form the formatted date string
      return`${year}-${month}-${day}`;
    },

    formatPhase(){
      if(this.selectedCrop.phase === "Preparation Area"){
        this.selectedCrop.phase = "PreparationArea";
      }
    },

    onRowSelect() {
      if (this.selectedCrop) {
        this.formatPhase()
        this.$router.push({
          name: 'stepper',
          params: {
            crop_id: this.selectedCrop.id,
            phase: this.selectedCrop.phase,
          },
        });
      }
    },

    saveNewCrop() {
      //this.buildNewCrop();
      this.cropApiService
          .createCropData(1)//default company id
          .then((response) => {
            this.cropsData.push(response.data);
            console.log(response);
          }).catch(error => {
        console.error('Error saving new crop:', error);
      });
      this.newCrop = {};
    },

    /*buildNewCrop() {
      this.newCrop.id = this.cropQuantity + 1;
      this.newCrop.company_id = 1;
      this.newCrop.start_date = this.formatDate(new Date());
      this.newCrop.end_date = "";
      this.newCrop.phase = "Stock";
      this.newCrop.state = "active";
    },*/

    openPopup() {
      this.showPopup = true;
    },

    closePopup() {
      this.showPopup = false;
    },

  }
};

</script>

<template>
  <pv-card class="card">
    <template #header>
      <div class="py-4">
        <h4 class="text-center uppercase">{{ $t('crops-in-progress.process_log') }}</h4>
        <h2 class="text-center font-bold text-4xl">{{ $t('crops-in-progress.crops_in_progress') }}</h2>
      </div>
    </template>
    <template #content>
      <pv-card class="card-small">
        <template #header>
          <div class="searchbar text-center">
            <pv-input-text
                class="bg-transparent border-transparent"
                type="text"
                v-model="filters['global'].value"
                :placeholder="$t('crops-in-progress.search_crop')"/>
          </div>
        </template>
        <template #content>
          <pv-data-table
              v-model:selection="selectedCrop"
              v-model:filters="filters"
              filterDisplay="menu"
              show-gridlines
              :value="cropsData"
              selectionMode="single"
              dataKey="id"
              :metaKeySelection="false"
              @rowSelect="onRowSelect"
              paginator
              :rows="5"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink
              LastPageLink"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              sortMode="multiple">
            <pv-column field="id" header="Id"></pv-column>
            <pv-column filter-field="date" dataType="date" :header="$t('crops-in-progress.start_date')" sortable='true'>
              <template #body="{ data }">
                {{ data.startDate }}
              </template>
              <template #filter="{ filterModel }">
                <pv-calendar
                    v-model="filterModel.value"
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yy"
                    mask="99/99/9999"/>
              </template>
            </pv-column>
            <pv-column field="phase" :header="$t('crops-in-progress.phase')" sortable='true'></pv-column>
          </pv-data-table>
          <div class="text-center">
            <button-primary
                class="text-center mx-auto"
                :text="$t('crops-in-progress.start_new_crop')"
                :buttonColor="'var(--primary-green)'"
                :buttonTextColor="'var(--primary-white)'"
                :buttonBorderColor="'var(--primary-green)'"
                @click="openPopup()">
            </button-primary>

            <div class="popup-container" v-if="showPopup">
              <div class="popup-content">
                <div class="popup-header">
                  <h3>{{ $t('pop-up.warning') }}</h3>
                </div>
                <div class="popup-body">
                  <br>
                  <p class="text-center mb-3">{{$t('pop-up.start_new_crop')}}
                    {{ formatDate(new Date()) }}</p>
                </div>
                <div class="popup-footer">
                  <router-link :to="'/stepper/'+crop_id+'/Formula'">
                    <button-primary
                        class="text-center mx-auto"
                        :text="$t('pop-up.confirm')"
                        :buttonColor="'var(--primary-green)'"
                        :buttonTextColor="'var(--primary-white)'"
                        :buttonBorderColor="'var(--primary-green)'"
                        @click="saveNewCrop()">
                    </button-primary>
                  </router-link>
                  <button-primary
                      class="text-center mx-9"
                      :text="$t('pop-up.cancel')"
                      :buttonColor="'var(--gray-2)'"
                      :buttonTextColor="'var(--primary-white)'"
                      :buttonBorderColor="'var(--gray-2)'"
                      @click="closePopup()">
                  </button-primary>
                </div>
              </div>
            </div>
          </div>
        </template>
      </pv-card>
    </template>
  </pv-card>
</template>

<style scoped>

h2 {
  font-size: var(--heading-2-size);
}

.p-icon {
  color: black;
}

h4 {
  color: var(--secondary-green-1);
  font-size: var(--heading-4-size);
}

.card-small {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  margin: 0 6%;
}

.searchbar {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}


.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  padding: 5%;
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

.popup-header {
  background-color: #4A845B;
  text-align: center;
  padding: 15px;
  border-radius: 20px 20px 0 0;

}

.popup-header h3 {
  color: white;
  margin: 0;
}

.popup-footer .btn {
  margin-right: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}

.popup-footer .btn.yes-finish {
  background-color: #4A845B;
  color: white;
}

.popup-footer .btn.close {
  background-color: #D9D9D9;
  color: black;
}

:deep(th) {
  background-color: var(--secondary-green-2) !important;
  color: var(--white) !important;
}
</style>