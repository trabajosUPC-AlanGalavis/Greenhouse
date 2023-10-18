<script>
import ButtonPrimary from "../components/button-primary.component.vue";
import PopupNew from "@/greenhouse/components/popup-new-crop.component.vue";
import {HarvestingApiService} from "@/greenhouse/services/harvesting-api.service";

export default {
  name: "harvesting-in-progress",
  components: {PopupNew, ButtonPrimary },

  data(){
    return{
      harvestingApi: new HarvestingApiService(),
      harvestData: [],
      selectedHarvest: null
    }
  },
  created(){
    this.getHarvestingData();
  },
  methods: {
    getHarvestingData(){
      this.harvestingApi.getHarvestingData().then((response) => {
        this.harvestData = response.data;
        this.harvestData = this.harvestData.filter(data => (data.state === 'active'));
      })
    },

    onRowSelect(){
      this.$router.push('/stepper')
    }
  }
};


</script>

<template>
  <pv-card class="card">
    <template #title>
      <h4 class="text-center pt-4 uppercase">process log</h4>
      <h2 class="text-center pb-2">Crops in progress</h2>

      <pv-card class="card-small">
        <template #title>
          <div class="searchbar text-center">
            <pv-input-text class="bg-transparent border-transparent text-white" type="text" placeholder="Search harvest" />
          </div>
            <pv-data-table v-model:selection="selectedHarvest" :value="harvestData" selectionMode="single"
                           dataKey="id" :metaKeySelection="false" @rowSelect="onRowSelect" sortMode="multiple">
              <pv-column field="id" header="Id"></pv-column>
              <pv-column field="organization_id" header="Organization"></pv-column>
              <pv-column field="start_date" header="Start Date" sortable="true"></pv-column>
              <pv-column field="phase" header="Phase" sortable="true"></pv-column>

            </pv-data-table>
        </template>
        <template #content class="text-center">
          <div class="text-center">
            <popup-new></popup-new>
          </div>
        </template>
      </pv-card>
    </template>
  </pv-card>
</template>

<style scoped>
* {
  font-family: var(--font-primary);
}

.card {
  border-radius: 20px;
}

h2 {
  font-size: var(--heading-2-size);
}

h4 {
  color: var(--secondary-green-1);
  font-size: var(--heading-4-size);
}

.card-small {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  border-radius: 5px;
  margin: 5%;
}

.searchbar {
  background-color: var(--secondary-green-2);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

::v-deep .card-small {
  padding: 0 !important;
}

@media(max-width: 768px) {
  .card {
    margin: 2.7rem 2rem;
  }
  .card-small {
    margin: 0;
    border-radius: 5px;
  }
}
</style>