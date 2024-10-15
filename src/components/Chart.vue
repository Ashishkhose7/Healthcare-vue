<script setup>
import Chart from "primevue/chart";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { computed, reactive, ref } from "vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

import { userDataStore } from "@/stores/store";
const userStore = userDataStore();

const state = reactive({
  isLoading: true,
});
const datachart = ref("");

const options = {
  responsive: true,
  stacked: false,
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          weight: 500,
          size: 11,
        },
      },
      grid: {
        display: true,
      },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          weight: 500,
          size: 11,
        },
      },
    },
  },
};

const data = computed(() => {
  let dataObjects = [];
  let systoliclevels = [];
  let diastoliclevels = [];
  let labels = "";
  let history = "";

  history = userStore.getactiveUsers.diagnosis_history;

  for (const key in history) {
    const obj = {
      month: history[key].month.slice(0, 3),
      year: history[key].year,
    };
    dataObjects.push(obj);
    systoliclevels.push(history[key].blood_pressure.systolic.value);
    diastoliclevels.push(history[key].blood_pressure.diastolic.value);
  }

  labels = dataObjects
    .slice(0, 6)
    .reverse()
    .map((obj) => `${obj.month} ${obj.year}`);

  return (datachart.value = {
    labels: labels,
    datasets: [
      {
        data: systoliclevels.slice(0, 6).reverse(),
        borderColor: "rgb(236 72 153)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        tension: 0.4,
        borderWidth: 1.5,
        pointBackgroundColor: "rgb(236 72 153)",
      },
      {
        data: diastoliclevels.slice(0, 6).reverse(),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: false,
        tension: 0.4,
        borderWidth: 1.5,
        pointBackgroundColor: "rgba(153, 102, 255, 1)",
      },
    ],
  });
});
</script>
<template>
  <div class="space-y-4 h-[100%]">
    <Chart type="line" :data="data" :options="options" class="h-[100%]" />
  </div>
</template>
