<template>
  <pv-card class="m-6">
    <template #title>
      <h2 class="p-4">Dashboard</h2>
    </template>
    <template #content>
      <div class="text-center"> <!-- Cambia "content-center" por "text-center" -->
        <div class="grid md:grid-cols-12 gap-4 pb-5 justify-items-center">
          <dashboard-card class="col-span-3" :image="'public/dashboard/process-state.png'" :buttonText="'Harvesting in progress'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3" :image="'public/dashboard/enterprise.png'" :buttonText="'My organization'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3" :image="'public/dashboard/reports.png'" :buttonText="'Statistical reports'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3" :image="'public/dashboard/history.png'" :buttonText="'Harvest archive'" :link="'/process-log'"></dashboard-card>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<script>
import dashboardCard from "@/dashboard/components/dashboard-card.component.vue";

export default {
  name: "dashboard-content",
  components: {
    dashboardCard,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: var(--font-primary);
  font-size: var(--heading-2-size);
  font-style: normal;
  font-weight: 700;
  line-height: 49px;
}

pv-card {
  border-radius: 20px;
}
</style>
