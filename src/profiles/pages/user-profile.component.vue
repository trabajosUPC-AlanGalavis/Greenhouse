<script>
import { getUsersById } from '../service/user-data.service';

export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  async created() {
    try {
      const response = await getUsersById(this.userId);
      this.user = response.data;
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
    }
  }
};

</script>

<template>
  <div class="profile-container bg-white rounded-lg shadow-md p-1 w-4/5 mx-auto flex">
    <div class="w-1/3 flex justify-center items-center">
      <div class="profile-image flex flex-col items-center relative">
        <h2 class="mb-2 text-center text-gray-3 text-6xl font-bold">My profile</h2>
        <img :src="user.photo" alt="Imagen de perfil" class="w-80 h-80 rounded-full border-8 border-green-800"/>
      </div>
    </div>
    <div class="w-2/3 pl-6">
      <div class="mb-1 relative">
        <label class="block text-gray-2 font-bold">Name:</label>
        <input type="text" v-model="user.name" class="border border-gray-1 rounded p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left" style="text-decoration: underline;">Change name</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>

      <div class="mb-1 relative">
        <label class="block text-gray-2  font-bold">Email:</label>
        <input type="email" v-model="user.email" class="border border-gray-1 rounded  p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left" style="text-decoration: underline;">Change email</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>

      <div class="mb-1 relative">
        <label class="block text-gray-2  font-bold">Organization:</label>
        <input type="text" v-model="user.company" class="border border-gray-1 rounded  p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left " style="text-decoration: underline;">View organization</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>
      <div class="mb-1 relative">
        <label class="block text-gray-2 font-bold">Role:</label>
        <input type="text" v-model="user.role" class="border border-gray-1 rounded  p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left" style="text-decoration: underline;">Change role</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>
      <div class="mb-1 relative">
        <label class="block text-gray-2  font-bold">Password:</label>
        <input type="password" v-model="user.password" class="border border-gray-1 rounded p-1 w-full mt-1" readonly />
        <a href="#" class="block text-left" style="text-decoration: underline;">Change password</a>
        <div class="mb-1 p-1 relative linea-verde"></div>
      </div>

      <div class="mb-1 relative">
        <label class="block text-gray-2  font-bold">Account:</label>
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

