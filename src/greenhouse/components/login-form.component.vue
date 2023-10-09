<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";

export default {
  name: "login-form",
  components: {ButtonPrimary},
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      emptyFields: false,
    }
  },
  methods: {
    doLogin() {
      this.$router.push("/dashboard")
    },
  }
}
</script>

<template>
  <form>
    <div class="mb-3">
      <input type="email" id="email" class="w-full border rounded-md px-3 py-2" placeholder="Email">
    </div>
    <div class="mb-3">
      <input type="password" id="password" class="w-full border rounded-md px-3 py-2" placeholder="Password">
    </div>
    <div class="flex items-center md:items-start mb-3">
      <div class="h-5">
        <input id="remember" aria-describedby="remember" type="checkbox" class="rounded check-bg-color" required="">
      </div>
      <div class="text-sm ml-3">
        <label for="remember" class="font-medium">Remember me</label>
      </div>
    </div>
    <div class="text-center">
      <button-primary
          class="px-8 mb-3"
          :text="'Login'"
          :buttonColor="'var(--primary-green)'"
          :buttonTextColor="'var(--primary-white)'"
          :buttonBorderColor="'var(--primary-green)'"
          @click="doLogin">
      </button-primary>
      <p class="text-blue-500 text-sm underline">
        <router-link to="/">Forgot my password</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>

</style>