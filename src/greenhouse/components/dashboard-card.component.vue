<template>
  <div>
    <router-link :to="link">
    <pv-card>
      <template #content>
        <img :src="image" width="220" height="220" alt="dashboard-icon">
      </template>
      <template #footer>
        <div class="footer w-full p-3">

            <button>
              {{ buttonText }} <i class="fa fa-angle-right"></i>
            </button>
        </div>
      </template>
    </pv-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "dashboard-card",
  props: {
    image: String,
    buttonText: String,
    link: String,
  },
};
</script>

<style scoped>
img{
  width: 100%;
  height: auto;
}

.p-card .p-card-body  {
  padding: 0 !important;
}

.footer {
  color: var(--primary-white) !important;
  background: var(--primary-green);
  font-size: var(--medium-text-bold-size);
  font-family: var(--font-primary);
  line-height: 1.2;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

:deep(.p-card .p-card-body) {
  padding: 0 !important;
}

</style>
