<template>
  <Bar :data="chartData" :options="chartOptions"/>
</template>

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
  name: 'bar-chart',
  components: {Bar},
  props: {
    chartLabels: {
      type: Array,
      required: true,
    },
    chartDatasets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: this.chartLabels,
        datasets: this.chartDatasets,
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: false,
          },
          y: {
            stacked: false,
          },
        },
      },
    };
  },
  watch: {
    chartLabels(newLabels) {
      this.chartData.labels = newLabels;
    },
    chartDatasets(newDatasets) {
      this.chartData.datasets = newDatasets;
    },
  },
};
</script>
