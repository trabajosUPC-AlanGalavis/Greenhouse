<script>
import PopupNew from "@/greenhouse/components/popup-new-crop.component.vue";
import {HarvestingApiService} from "@/greenhouse/services/harvesting-api.service";

export default {
  name: "harvesting-in-progress",
  components: {PopupNew},

  data() {
    return {
      harvestingApi: new HarvestingApiService(),
      harvestData: [],
      selectedHarvest: null
    }
  },
  created() {
    this.getHarvestingData();
  },
  methods: {
    getHarvestingData() {
      this.harvestingApi.getHarvestingData().then((response) => {
        this.harvestData = response.data;
        this.harvestData = this.harvestData.filter(data => (data.state === 'active'));
      })
    },

    onRowSelect() {
      this.$router.push('/stepper')
    }
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
            <pv-input-text class="bg-transparent border-transparent text-white" type="text"
                           placeholder="Search harvest"/>
          </div>
        </template>
        <template #content>
          <pv-data-table
              v-model:selection="selectedHarvest"
              :value="harvestData"
              selectionMode="single"
              dataKey="id"
              :metaKeySelection="false"
              @rowSelect="onRowSelect"
              sortMode="multiple">
            <pv-column field="id" header="Id"></pv-column>
            <pv-column field="organization_id" header="Organization"></pv-column>
            <pv-column field="start_date" header="Start Date" sortable="true"></pv-column>
            <pv-column field="phase" header="Phase" sortable="true"></pv-column>
          </pv-data-table>
          <div class="text-center">
            <popup-new></popup-new>
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
  background-color: var(--secondary-green-2);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>