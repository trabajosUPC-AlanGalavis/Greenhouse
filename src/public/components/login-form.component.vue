<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import axios from "axios";
export default {
  name: "login-form",
  components: {ButtonPrimary},
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async handleSubmit(){
      await axios.post('/login', {
        email: this.email,
        password: this.password
      });
      this.$router.push("/dashboard");
    }
  }
}
</script>

<template>
  <form id="login" @submit.prevent="handleSubmit">
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Email"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="email"
      ></pv-input-text>
      <label for="email">Email</label>
    </div>
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="password"
          type="password"
          name="password"
          autocomplete="current-password"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="password"
      ></pv-input-text>
      <label for="password">Password</label>
    </div>
    <div class="flex items-center md:items-start mb-3">
      <div class="h-5">
        <input id="remember" aria-describedby="remember" type="checkbox" class="rounded cursor-pointer">
      </div>
      <div class="text-sm ml-3">
        <label for="remember" class="font-medium">Remember me</label>
      </div>
    </div>
    <div class="text-center">
      <button-primary
          class="px-7 mb-3"
          :text="'Login'"
          :buttonColor="'var(--primary-green)'"
          :buttonTextColor="'var(--primary-white)'"
          :buttonBorderColor="'var(--primary-green)'"
          type="submit">
      </button-primary>
      <p class="text-blue-500 text-sm underline">
        <router-link to="/password-reset">Forgot my password</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>
* {
  font-family: var(--font-primary);
}
</style>