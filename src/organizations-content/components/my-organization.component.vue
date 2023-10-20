<script >
import { getOrganizationById } from '../services/organization-api.service';

export default {
  data() {
    return {
      organization: {}
    };
  },
  computed: {
    organizationId() {
      return this.$route.params.id;
    }
  },
  async created() {
    try {
      const response = await getOrganizationById(this.organizationId);
      this.organization = response.data;
    } catch (error) {
      console.error("Error obteniend la organizacion:", error);
    }
  }
};
</script>

<template>
  <div class="profile-container bg-white rounded-lg shadow-md p-3 w-4/5 mx-auto flex">

    <div class="w-1/3 flex justify-center items-center">
      <div class="profile-image flex flex-col items-center relative">
        <h2 class="mb-2 text-center text-gray-3 text-4xl font-bold">My organization</h2>
        <img :src="organization.photo" alt="Imagen de perfil" class="w-40 h-40 rounded-full border-8 border-green-800"/>
      </div>
    </div>


    <div class="w-2/3 pl-6">
      <div class="mb-1 relative">
        <label class="block text-gray-2 font-bold">Business Name:</label>
        <input type="text" v-model="organization.organizationName" class="border border-gray-1 rounded p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left" style="text-decoration: underline;">Change name</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>
      <div class="mb-1 relative">
        <label class="block text-gray-2 font-bold">RUC:</label>
        <input type="text" v-model="organization.ruc" class="border border-gray-1 rounded p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left" style="text-decoration: underline;">Change name</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>
      <div class="mb-1 relative">
        <label class="block text-gray-2 font-bold">Organization:</label>
        <a href="#" style="color: var(--red); text-decoration: underline;" >Delete</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a{
  color:#4A845B;
}
.linea-verde {
  border-bottom: 2px solid #112c11;
  padding-bottom: 12px;
  margin-bottom: 12px;
}
label{
  font-size:25px;
}
</style>
