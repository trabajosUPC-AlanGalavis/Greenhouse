<script>
import {GreenhouseApiService} from "@/greenhouse/services/greenhouse-api.service";
import {CropApiService} from "@/greenhouse/services/crop-api.service";
import {FilterMatchMode} from "primevue/api";

export default {
  name: "process-table",
  props: {
    endpoint: null,
    crop_id: null,
  },

  data() {
    return {
      filters: {},
      processData: [],
      columns: null,
      greenhouseApi: new GreenhouseApiService(),
      cropApi: null,
      start_date: "",
      formData: {},
      form: [],
      displayDialog: false,
      titles: null
    }
  },
  created() {
    this.cropApi = new CropApiService();
    this.initFilters();
    this.cropApi.getCropData().then((response => {
      this.start_date = response.data[0].start_date;
    }));
  },
  mounted() {
    // Fetch initial data and columns
    this.fetchDataAndColumns(this.endpoint);
  },
  watch: {
    endpoint(newEndpoint, oldEndpoint) {
      if (newEndpoint !== oldEndpoint) {
        this.fetchDataAndColumns(newEndpoint);
      }
    },
  },

  methods: {
    camelToSnakeCase(str) {
      return str.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`).replace(/^\_/, '').replace(/\s/g, '');
    },
    initFilters() {
      this.filters = {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
      };
    },
    addColumn() {
      this.columns = Object.keys(this.processData[0])
          .filter((key) => key !== "processType" && key !== 'crop_id' && key !== "id" && key !== "apiId")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    },
    fetchDataAndColumns(endpoint) {
      this.greenhouseApi.getAllDataByCropId(endpoint, this.crop_id).then((response) => {
        this.processData = response.data;
        this.addColumn();
      });
    },
    fetchData(endpoint) {
      this.greenhouseApi.getAllData(endpoint).then((response) => {
        this.processData = response.data;
        this.addData();
      });
    },
    fetchFormData(endpoint) {
      this.greenhouseApi.getAllData(endpoint).then((response) => {
        this.form = response.data;
        this.addFormData();
      });
    },
    showDialog() {
      this.fetchFormData(this.endpoint);
      this.displayDialog = true;
    },
    closeDialog() {
      this.clearInputFields();
      this.displayDialog = false;
    },
    getDataToSend() {
      const currentDateTime = new Date();
      const currentDate = currentDateTime.toISOString().split('T')[0];
      const currentTime = currentDateTime.toTimeString().split(' ')[0];

      // Common data fields
      const commonData = {
        author: 'Winston Smith',
        day: this.formData.day, // TODO calculate it
        date: currentDate,
        time: currentTime,
        crop_id: this.crop_id,
      };

      // Merge common data with the formData
      //const dataToSend = this.formData;
      console.log('Data to send:', this.formData);
      const dataToSend = {...commonData, ...this.formData};

      // Add specific fields based on the endpoint
      if (this.endpoint === 'stocks?') {
        dataToSend.hay = this.formData.hay;
        dataToSend.corn = this.formData.corn;
        dataToSend.guano = this.formData.guano;
        dataToSend.cottonSeedCake = this.formData.cottonSeedCake;
        dataToSend.soyBeanMeal = this.formData.soyBeanMeal;
        dataToSend.gypsum = this.formData.gypsum;
        dataToSend.urea = this.formData.urea;
        dataToSend.ammoniumSulphate = this.formData.ammoniumSulphate;
        // Add other fields as needed
      } else if (this.endpoint === 'preparation_areas?') {
        dataToSend.activities = this.formData.activities;
        dataToSend.temperature = this.formData.temperature;
        dataToSend.comment = this.formData.comment;
        // Add other fields as needed
      } else if (this.endpoint === 'bunkers?') {
        dataToSend.thermocoupleOne = this.formData.thermocoupleOne;
        dataToSend.thermocoupleTwo = this.formData.thermocoupleTwo;
        dataToSend.thermocoupleThree = this.formData.thermocoupleThree;
        dataToSend.average = this.formData.average;
        dataToSend.frequency = this.formData.frequency;
        dataToSend.comment = this.formData.comment;
        // Add other fields as needed
      } else if (this.endpoint === 'tunnels?') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.thermocoupleOne = this.formData.thermocoupleOne;
        dataToSend.thermocoupleTwo = this.formData.thermocoupleTwo;
        dataToSend.thermocoupleThree = this.formData.thermocoupleThree;
        dataToSend.average = this.formData.average;
        dataToSend.frequency = this.formData.frequency;
        dataToSend.freshAir = this.formData.freshAir;
        dataToSend.recirculation = this.formData.recirculation;
        dataToSend.comment = this.formData.comment;
        // Add other fields as needed
      } else if (this.endpoint === 'grow_room_records?processType=Incubation&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Incubation';
      } else if (this.endpoint === 'grow_room_records?processType=Casing&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Casing';
      } else if (this.endpoint === 'grow_room_records?processType=Induction&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Induction';
      } else if (this.endpoint === 'grow_room_records?processType=Harvest&&') {
        dataToSend.growRoom = this.formData.growRoom;
        dataToSend.airTemperature = this.formData.airTemperature;
        dataToSend.compostTemperature = this.formData.compostTemperature;
        dataToSend.carbonDioxide = this.formData.carbonDioxide;
        dataToSend.airHumidity = this.formData.airHumidity;
        dataToSend.setting = this.formData.setting;
        dataToSend.comment = this.formData.comment;
        dataToSend.processType = 'Harvest';
      }
      return dataToSend;
    },
    saveDialog() {

      const dataToSend = this.getDataToSend();
      //console.log('Data to send:', dataToSend)
      this.greenhouseApi.create(this.endpoint, dataToSend)
          .then(response => {
            console.log('Data saved successfully:', response.data);
            this.processData.push(response.data);
            this.clearInputFields();
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      this.displayDialog = false;
    },
    clearInputFields() {
      if (this.processData.length === 0) {
        this.fetchData(this.endpoint)
        this.fetchDataAndColumns(this.endpoint);
      }
      for (const key in this.formData) {
        this.formData[key] = null;
      }
    },
    addFormData() {
      this.titles = Object.keys(this.form[0])
          .filter((key) => key !== "processType" && key !== 'crop_id' && key !== "id" && key !== "apiId" && key !== "author" && key !== "date" && key !== "time")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    },
    addData() {
      this.titles = Object.keys(this.processData[0])
          .filter((key) => key !== "processType" && key !== 'crop_id' && key !== "id" && key !== "apiId" && key !== "author" && key !== "date" && key !== "time")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    }
  }
}

</script>

<template>
  <pv-data-table
      class="overflow-hidden ml-4 mr-4 mb-4"
      :value="processData"
      ref="dt"
      dataKey="id"
      :paginator="true"
      :rows="10"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport
        RowsPerPageDropdown"
      :filters="filters"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      responsiveLayout="scroll">
    <template #header>
      <div class="table-header flex flex-column md:justify-content-between">
        <h2 class="mb-2 md:m-0 p-as-md-center text-xl font-bold">{{ $t('crop.records_of_crop') }} {{ crop_id }},
          {{ $t('crop.started_on') }} {{ start_date }}</h2>
        <pv-input-text class="bg-transparent border-transparent text-black"
                       v-model="filters['global'].value"
                       :placeholder="$t('crop.filter')"/>
      </div>
    </template>
    <pv-column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="$t('crop.' + camelToSnakeCase(col.header))">
    </pv-column>
  </pv-data-table>
  <!-- Prueba de botón -->
  <div>
    <pv-dialog
        :visible="displayDialog"
        :modal="true"
        header="Create new record"
        :closable="false"
        :width="300"
        :resizable="false"
        @onHide="closeDialog"
    >
      <div class="p-fluid p-2">
        <div class="p-field" v-for="title in titles" :key="title.field">
          <h1>{{ $t('crop.'+camelToSnakeCase(title.header)) }}</h1>
          <input class="p-inputtext mb-4" :placeholder="$t('crop.'+camelToSnakeCase(title.header))" v-model="formData[title.field]"/>
        </div>
      </div>
      <div class="p-dialog-footer flex">
        <button type="button" class="p-button bg-white" @click="saveDialog">
          <span class="text-black font-bold text-[--primary-green]">{{ $t('pop-up.confirm') }}</span>
        </button>
        <button type="button" class="p-button bg-white" @click="closeDialog">
          <span class="text-black">{{ $t('pop-up.cancel') }}</span>
        </button>
      </div>
    </pv-dialog>
  </div>
</template>

<style scoped>
h2 {
  color: var(--primary-green);
  font-size: var(--medium-text-regular-size);
  font-family: var(--font-primary);
}

:deep(th) {
  background-color: var(--secondary-green-2) !important;
  color: var(--white) !important;
}

.records {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
}
</style>