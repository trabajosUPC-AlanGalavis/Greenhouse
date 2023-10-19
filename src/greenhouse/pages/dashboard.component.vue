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
      <h2 class="text-center font-bold text-4xl mb-4">{{ $t('dashboard.dashboard') }}</h2>
    </template>
    <template #content>
      <div class="text-center">
        <div class="grid gap-4">
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/process-state.png'" :buttonText="$t('dashboard.crops_in_progress')" :link="'/process-log'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/enterprise.png'" :buttonText="$t('dashboard.my_company')" :link="'/organization'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/statistical-reports.png'" :buttonText="$t('dashboard.statistical_reports')" :link="'/statistical-reports'"></dashboard-card>
          <dashboard-card class="col-span-3 mx-auto" :image="'dashboard/archive.png'" :buttonText="$t('dashboard.crops_archive')" :link="'/'"></dashboard-card>
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
  font-size: var(--heading-2-size);
}

</style>
