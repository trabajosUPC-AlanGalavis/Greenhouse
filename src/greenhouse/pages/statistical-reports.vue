<script>
import BarChart from "@/greenhouse/components/bar-chart.component.vue";

export default {
  name: "statistical-reports",
  components: {BarChart},
  data() {
    return {
      chartLabels: ['Nave 1', 'Nave 2', 'Nave 3', 'Nave 4', 'Nave 5'],
      chartDatasets: [
        {
          label: 'Air Temperature',
          data: [22, 23, 21, 20, 22],
          backgroundColor: '#4D6443',
          borderColor: '#4D6443',
        },
        {
          label: 'Compost Temperature',
          data: [18, 17, 19, 18, 20],
          backgroundColor: '#5B7051',
          borderColor: '#5B7051',
        },
        {
          label: 'Carbon Dioxide',
          data: [400, 420, 410, 390, 400],
          backgroundColor: '#8B6341',
          borderColor: '#8B6341',
        },
        {
          label: 'Air Hydrogen',
          data: [2, 2.5, 2.2, 2, 1.8],
          backgroundColor: '#CBB99D',
          borderColor: '#CBB99D',
        },
      ],
    };
  },
};
</script>

<template>
  <pv-card class="card">
    <template #header>
      <div class="py-4">
        <h2 class="text-center font-bold text-4xl">Statistical reports</h2>
      </div>
    </template>
    <template #content>
      <bar-chart :chart-labels="chartLabels" :chart-datasets="chartDatasets" />
    </template>
  </pv-card>
</template>

<style scoped>

</style>
