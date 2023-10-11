<script>
import PasswordResetForm from "@/public/components/password-reset-form.component.vue";
import LoginForm from "@/public/components/login-form.component.vue";

export default {
  name: "password-reset",
  components: {LoginForm, PasswordResetForm}
}
</script>

<template>
  <div class="max-w-xl mx-auto">
    <pv-card class="card md:mx-50 md:px-5">
      <template #content>
        <div class="mb-3 text-center md:text-left">
          <h2>Reset your password</h2>
          <p>Enter your user account's verified email address and we will send you a password reset link.</p>
        </div>
        <password-reset-form></password-reset-form>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
* {
  font-family: var(--font-primary);
}

.card {
  border-radius: 20px;
}

h2 {
  color: var(--primary-green);
  font-size: var(--heading-2-size);
  font-weight: bold;
  font-family: var(--font-primary);
}

p {
  color: var(--black);
}
</style>