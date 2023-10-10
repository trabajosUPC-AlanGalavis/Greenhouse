<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import axios from "axios";

export default {
  name: "signup-form",
  components: {ButtonPrimary},
  data() {
    return {
      company_name: "",
      ruc: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('/signup', {
        company_name: this.company_name,
        ruc: this.ruc,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
      console.log(response);
      this.$router.push("/login");
    }
  }
}
</script>

<template>
  <form id="login" @submit.prevent="handleSubmit">
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="company_name"
          type="text"
          name="company_name"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="company_name"
      ></pv-input-text>
      <label for="email">Company name</label>
    </div>
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="ruc"
          type="number"
          name="ruc"
          required
          class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full border rounded-md px-3 py-2 "
          v-model="ruc"
      ></pv-input-text>
      <label for="email">RUC</label>
    </div>
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="email"
          type="email"
          name="email"
          autocomplete="email"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="email"
      ></pv-input-text>
      <label for="email">Email</label>
    </div>
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="first-name"
          type="text"
          name="first-name"
          autocomplete="given-name"
          required
          class="w-full border rounded-md px-3 md:py-2"
          v-model="first_name"
      ></pv-input-text>
      <label for="email">First name of the registrant</label>
    </div>
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="last-name"
          type="text"
          name="last-name"
          autocomplete="family-name"
          required
          class="w-full border rounded-md px-3 md:py-2"
          v-model="last_name"
      ></pv-input-text>
      <label for="email">Last name of the registrant</label>
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
    <div class="mb-3 p-float-label">
      <pv-input-text
          id="confirm-password"
          type="password"
          name="confirm-password"
          autocomplete="current-password"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="password_confirmation"
      ></pv-input-text>
      <label for="password">Confirm password</label>
    </div>
    <div class="flex items-center md:items-start mb-3">
      <div class="h-5">
        <input id="remember" aria-describedby="remember" type="checkbox" required class="rounded check-bg-color">
      </div>
      <div class="text-sm ml-3">
        <label for="remember" class="font-medium">I've read and accept the <span
            class="text-blue-500 underline">Terms And Conditions</span> and <span
            class="text-blue-500 underline">Privacy policy</span></label>
      </div>
    </div>
    <div class="text-center">
      <button-primary
          class="px-7 mb-3"
          :text="'Sign up'"
          :buttonColor="'var(--primary-green)'"
          :buttonTextColor="'var(--primary-white)'"
          :buttonBorderColor="'var(--primary-green)'"
          type="submit">
      </button-primary>
    </div>
  </form>
</template>

<style scoped>
* {
  font-family: var(--font-primary);
}
</style>