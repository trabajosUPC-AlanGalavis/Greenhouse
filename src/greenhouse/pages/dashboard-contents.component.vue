<script>
import dashboardCard from "@/greenhouse/components/dashboard-card.component.vue";

export default {
  name: "dashboard-contents",
  components: {
    dashboardCard,
  },
};
</script>

<template>
  <pv-card class="card">
    <template #title>
      <h2>Dashboard</h2>
    </template>
    <template #content>
      <div class="text-center">
        <div class="grid gap-4">
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/process-state.png'" :buttonText="'Harvesting in progress'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3 mx-auto" :image="'dashboard/enterprise.png'" :buttonText="'My organization'" :link="'/organization'"></dashboard-card>
          <dashboard-card  class="col-span-3 mx-auto" :image="'dashboard/reports.png'" :buttonText="'Statistical reports'" :link="'/'"></dashboard-card>
          <dashboard-card  class="col-span-3 mx-auto" :image="'dashboard/history.png'" :buttonText="'Harvest archive'" :link="'/'"></dashboard-card>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.card {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  margin: 5%;
 }

h2 {
  text-align: center;
  font-family: var(--font-primary);
  font-size: var(--heading-2-size);
}

</style>
