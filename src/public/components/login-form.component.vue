<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import axios from "axios";
import * as yup from "yup";
export default {
  name: "login-form",
  components: {ButtonPrimary},
  data() {


    return {
      loading: false,
      message: "",
      email: "",
      password: "",
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    handleSubmit(){
      this.loading = true;

      this.$store.dispatch("auth/login", {username: this.email, password: this.password}).then(
          () => {
            this.$router.push("/dashboard");
          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
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
          :placeholder="$t('login-signup.email')"
          required
          class="w-full border rounded-md px-3 py-2"
          v-model="email">
      </pv-input-text>
      <label for="email">{{$t('login-signup.email')}}</label>
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
      <label for="password">{{$t('login-signup.password')}}</label>
    </div>
    <div class="flex items-center md:items-start mb-3">
      <div class="h-5">
        <input id="remember" aria-describedby="remember" type="checkbox" class="rounded cursor-pointer">
      </div>
      <div class="text-sm ml-3">
        <label for="remember" class="font-medium">{{$t('login-signup.remember_me')}}</label>
      </div>
    </div>
    <div class="text-center">
      <button-primary
          class="px-7 mb-3"
          :text="$t('login-signup.login')"
          :buttonColor="'var(--primary-green)'"
          :buttonTextColor="'var(--primary-white)'"
          :buttonBorderColor="'var(--primary-green)'"
          type="submit">
      </button-primary>
      <p class="text-blue-500 text-sm underline">
        <router-link to="/password-reset">{{$t('login-signup.forgot_my_password')}}</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>

</style>