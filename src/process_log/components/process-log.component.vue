<template>
  <pv-card class="card">
    <template #title>
      <h4 class="text-center pt-4 uppercase">process log</h4>
      <h2 class="text-center pb-2">Harvestings in progress</h2>

      <pv-card class="card-small">
        <template #title>
          <div class="searchbar text-center">
            <pv-input-text class="bg-transparent border-transparent text-white" type="text" placeholder="Search harvest" />
          </div>
        </template>
        <template #content class="text-center">
          <div class="text-center">
            <router-link to="/stepper">
              <button-primary
                  class="text-center mx-auto"
                  :text="' + Start new harvest'"
                  :buttonColor="'var(--primary-green)'"
                  :buttonTextColor="'var(--primary-white)'"
                  :buttonBorderColor="'var(--primary-green)'">
              </button-primary>
            </router-link>
          </div>
        </template>
      </pv-card>
    </template>
  </pv-card>
</template>

<script>
import ButtonPrimary from "../../shared/components/button-primary.component.vue";

export default {
  name: "process-log",
  components: { ButtonPrimary },
};
</script>

<style scoped>
* {
  font-family: var(--font-primary);
}

h2 {
  font-size: var(--heading-2-size);
}

h4 {
  color: var(--secondary-green-1);
  font-size: var(--heading-4-size);
}

.card {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  margin: 2.7rem 9rem;
}

.card-small {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  border-radius: 5px;
  margin: 2.7rem 1rem;
}
.searchbar {
  background-color: var(--secondary-green-2);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

@media(max-width: 768px) {
  .card {
    margin: 2.7rem 2rem;
  }
  .card-small {
    margin: 0;
    border-radius: 5px;
  }
}
</style>
