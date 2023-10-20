<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getOrganizationById } from '../services/organization-api.service';

export default {
  name: 'Organization',
  setup() {
    const organization = ref({});
    const route = useRoute();
    const organizationId = route.params.id;

    const fetchOrganizationData = async () => {
      try {
        const response = await getOrganizationById(organizationId);
        if (response.data) {
          organization.value = response.data;
        }
      } catch (error) {
        console.error('Error al obtener la organización:', error);
      }
    };

    onMounted(() => {
      fetchOrganizationData();
    });

    return {
      organization
    };
  }
};
</script>

<template>
  <div class="workers-container bg-white rounded-lg shadow-md p-3 w-4/5 mx-auto p-6 my-4">
    <div class="workers-header flex justify-between items-center mb-5">
      <h2 class="text-2xl font-semibold">Trabajadores</h2>
      <button class="bg-secondary-green-1 text-black px-4 py-2 rounded-lg">Invitar trabajadores</button>
    </div>
    <input type="text" placeholder="Buscar trabajadores" class="search-input w-full p-3 border border-gray-1 rounded-lg mb-5">
    <div class="workers-grid grid grid-cols-5 gap-4">
      <div v-for="worker in organization.workers" :key="worker.id" class="worker-card flex flex-col items-center justify-center text-center">
        <div class="worker-avatar w-20 h-20 mb-3 bg-gray-1 rounded-full border-3 border-secondary-green-1">
          <img :src="worker.photo" alt="Foto del trabajador" class="w-full h-full rounded-full object-cover border-3 border-green-500">
        </div>
        <p class="text-black font-semibold">{{ worker.name }}</p>
        <a href="#" class="text-secondary-green-1">Ver más</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.worker-card {
  width: calc(25% - 1rem);
  max-width: calc(25% - 1rem);
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.workers-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  align-items: center;
}
</style>

