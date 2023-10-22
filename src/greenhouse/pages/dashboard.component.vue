<script>
import dashboardCard from "@/greenhouse/components/dashboard-card.component.vue";
import {GreenhouseApiService} from "@/greenhouse/services/greenhouse-api.service";

export default {
  name: "dashboard",
  components: {
    dashboardCard,
  },
  data() {
    return {
      greenhouseApi: null,
      recordData: []
    }
  },
  created() {
    this.greenhouseApi = new GreenhouseApiService();
    this.fetchMostRecentRecords()
  },
  methods: {
    async fetchMostRecentRecords() {
      try {
        //const cropId = 1; // Replace with the desired crop ID
        const mostRecentRecords = await this.greenhouseApi.getMostRecentRecords();
        this.recordData = mostRecentRecords;
        console.log(mostRecentRecords);
      } catch (error) {
        console.error('Error fetching most recent records:', error);
      }
    },
  },
};
</script>

<template>
  <pv-card class="card md:mx-50 md:px-5">
    <template #header>
      <h2 class="text-center font-bold text-4xl py-4">{{ $t('dashboard.dashboard') }}</h2>
    </template>
    <template #content>
      <div class="text-center">
        <div class="grid gap-4 mb-5">
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/process-state.png'"
                          :buttonText="$t('dashboard.crops_in_progress')" :link="'/process-log'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/enterprise.png'"
                          :buttonText="$t('dashboard.my_company')" :link="'/organization'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/statistical-reports.png'"
                          :buttonText="$t('dashboard.statistical_reports')"
                          :link="'/statistical-reports'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/archive.png'"
                          :buttonText="$t('dashboard.crops_archive')" :link="'/crop-history'"></dashboard-card>
        </div>
        <div>
          <div class="mb-4">
            <h4 class="text-center pt-4 uppercase">{{ $t('dashboard.recent_records') }}</h4>
          </div>
          <pv-data-table
              :value="recordData"
              selectionMode="single">
            <pv-column field="id" :header="$t('dashboard.crop_id')"></pv-column>
            <pv-column field="author" :header="$t('dashboard.author')"></pv-column>
            <pv-column field="start_date" :header="$t('dashboard.start_date')" sortable="true"></pv-column>
            <pv-column field="phase" :header="$t('dashboard.phase')" sortable="true"></pv-column>
            <pv-column field="date" :header="$t('dashboard.record_date')" sortable="true"></pv-column>
            <pv-column field="time" :header="$t('dashboard.record_time')" sortable="true"></pv-column>
            <pv-column field="comment" :header="$t('dashboard.comment')"></pv-column>
          </pv-data-table>
        </div>
      </div>
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

:deep(th) {
  background-color: var(--secondary-green-2) !important;
  color: var(--white) !important;
}

</style>
