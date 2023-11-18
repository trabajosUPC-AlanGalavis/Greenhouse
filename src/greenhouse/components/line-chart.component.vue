<template>
  <div>
    <Line :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default {
  name: 'line-chart',
  components: { Line },
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
