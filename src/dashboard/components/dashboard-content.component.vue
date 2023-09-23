<template>
  <pv-card class="card">
    <template #title>
      <h2>Dashboard</h2>
    </template>
    <template #content>
      <div class="text-center">
        <div class="grid gap-4">
          <dashboard-card class="col-span-3 mx-auto" :image="'public/dashboard/process-state.png'" :buttonText="'Harvesting in progress'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3 mx-auto" :image="'public/dashboard/enterprise.png'" :buttonText="'My organization'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3 mx-auto" :image="'public/dashboard/reports.png'" :buttonText="'Statistical reports'" :link="'/process-log'"></dashboard-card>
          <dashboard-card  class="col-span-3 mx-auto" :image="'public/dashboard/history.png'" :buttonText="'Harvest archive'" :link="'/process-log'"></dashboard-card>
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
.card {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  margin: 2.7rem 9rem;
}

h2 {
  text-align: center;
  font-family: var(--font-primary);
  font-size: var(--heading-2-size);
}

@media(max-width: 768px) {
  .card {
    margin: 2.7rem 2rem;
  }
}

</style>
