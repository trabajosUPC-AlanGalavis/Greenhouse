<script>
import dashboardCard from "@/greenhouse/components/dashboard-card.component.vue";
export default {
  name: "dashboard",
  components: {
    dashboardCard,
  },
};
</script>

<template>
  <pv-card class="card">
    <template #title>
      <h2>{{ $t('dashboard.dashboard') }}</h2>
    </template>
    <template #content>
      <div class="text-center">
        <div class="grid gap-4">
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/process-state.png'" :buttonText="$t('dashboard.crops_in_progress')" :link="'/process-log'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/enterprise.png'" :buttonText="$t('dashboard.my_company')" :link="'/organization'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/reports.png'" :buttonText="$t('dashboard.statistical_reports')" :link="'/'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/history.png'" :buttonText="$t('dashboard.crops_archive')" :link="'/'"></dashboard-card>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
}

h2 {
  text-align: center;
  font-family: var(--font-primary);
  font-size: var(--heading-2-size);
}

</style>
