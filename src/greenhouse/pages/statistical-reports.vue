<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import {Bar} from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: "statistical-reports",
  components: {Bar},
  data() {
    return {
      chartData: {
        labels: ['Nave 1', 'Nave 2', 'Nave 3', 'Nave 4', 'Nave 5'],
        borderWidth: 1,
        datasets: [{
          label: 'CO2',
          data: [40, 20, 12, 25, 12],
          backgroundColor: [
            '#4D6443',
            '#4D6443',
            '#4D6443'
          ],
          borderColor: '#4D6443'
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
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
      <Bar :data="chartData" :options="chartOptions"/>
    </template>
  </pv-card>
</template>

<style scoped>

</style>
