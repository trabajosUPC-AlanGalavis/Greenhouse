<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import axios from "axios";

export default {
  name: "password-reset-form",
  components: {ButtonPrimary},
  data() {
    return {
      email: "",
    }
  },
  methods: {
    async handleSubmit() {
      await axios.post('/password-reset', {
        email: this.email,
      });
    }
  }
}
</script>

<template>
  <form id="login" @submit.prevent="handleSubmit">
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="password"
          type="password"
          name="password"
          autocomplete="current-password"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="email"
      ></pv-input-text>
      <label for="password">Enter your email address</label>
    </div>
    <div class="text-center">
      <button-primary
          class="mb-3"
          :text="'Send password reset email'"
          :buttonColor="'var(--primary-green)'"
          :buttonTextColor="'var(--primary-white)'"
          :buttonBorderColor="'var(--primary-green)'"
          type="submit">
      </button-primary>
      <p class="text-sm">
        <router-link to="/login">Cancel</router-link>
      </p>
    </div>

  </form>
</template>

<style scoped>

p {
  color: var(--black);
}
</style>