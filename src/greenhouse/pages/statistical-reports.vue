<script>
import BarChart from "@/greenhouse/components/bar-chart.component.vue";
import LineChart from "@/greenhouse/components/line-chart.component.vue";
import {GreenhouseApiService} from "@/greenhouse/services/greenhouse-api.service";

export default {
  name: "statistical-reports",
  components: {LineChart, BarChart},
  data() {
    return {
      greenhouseApi: null,
      chartLabels: ['2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29'],
      chartDatasets: [
        {
          label: 'Nave 1',
          data: [22, 23, 21, 20, 22],
          backgroundColor: '#4D6443',
          borderColor: '#4D6443',
        },
        {
          label: 'Nave 2',
          data: [20, 21, 22, 20, 23],
          backgroundColor: '#8B6341',
          borderColor: '#8B6341',
        },
        {
          label: 'Nave 3',
          data: [23, 22, 22, 23, 21],
          backgroundColor: '#CBB99D',
          borderColor: '#CBB99D',
        }
      ],
    };
  },
  created() {
    this.greenhouseApi = new GreenhouseApiService();
    this.greenhouseApi.getAllData('grow_room_records');
  },
};
</script>

<template>
  <pv-card class="card">
    <template #header>
      <div class="py-4">
        <h2 class="text-center font-bold text-4xl">{{ $t('statistical_reports.statistical_reports') }}</h2>
      </div>
    </template>
    <template #content>
      <div class="mb-5">
        <p class="text-center font-bold text-[--secondary-green-1] mb-3">Average air temperature per day</p>
        <div class="md:mx-4">
          <line-chart :chart-labels="chartLabels" :chart-datasets="chartDatasets"/>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>
