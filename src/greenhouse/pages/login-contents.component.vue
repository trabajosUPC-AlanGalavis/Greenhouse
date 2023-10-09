<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import LoginForm from "@/greenhouse/components/login-form.component.vue";
import SignupForm from "@/greenhouse/components/signup-form.component.vue";

export default {
  name: "login-contents",
  components: {SignupForm, LoginForm, ButtonPrimary },
  data() {
    return {
      isLoginActive: 1
    };
  },
}
</script>

<template>
  <div class="max-w-xl mx-auto">
    <pv-card class="card md:mx-50 md:px-5">
      <template #content>
        <div class="mb-3 text-center md:text-left">
          <h2>Welcome to Greenhouse</h2>
          <p>To use the application, please login or register an organization</p>
        </div>
        <div class="flex mb-5 justify-content-center md:justify-content-start">
          <div class="state-color" :class="{ 'active-label': isLoginActive === 1 }">
            <input id="login" type="radio" name="login-signup" v-model="isLoginActive" :value="1">
            <div class="mr-5">
              <label for="login">Login</label>
            </div>
          </div>
          <div class="state-color" :class="{ 'active-label': isLoginActive === 0 }">
            <input id="signup" type="radio" name="login-signup" v-model="isLoginActive" :value="0">
            <div>
              <label for="signup">Register an organization</label>
            </div>
          </div>
        </div>
        <login-form v-if="isLoginActive === 1" />
        <signup-form v-else />
      </template>
    </pv-card>
  </div>
</template>


<style scoped>
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

input[type="radio"] {
  display: none;
}

.state-color{
  color: var(--gray-2);
  border-bottom: 2px solid var(--gray-2);
}

.active-label {
  color: var(--primary-green);
  font-weight: bold;
  border-bottom: 2px solid var(--primary-green);
}
</style>
