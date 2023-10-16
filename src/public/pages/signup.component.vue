<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import SignupForm from "@/public/components/signup-form.component.vue";

export default {
  name: "signup",
  components: {SignupForm, ButtonPrimary },
}
</script>

<template>
  <div class="max-w-xl mx-auto">
    <pv-card class="card md:mx-50 md:px-5">
      <template #content>
        <div class="mb-3 text-center md:text-left">
          <h2>{{$t('welcome')}}</h2>
          <p>{{$t('welcome_description')}}</p>
        </div>
        <div class="flex mb-5 justify-content-center md:justify-content-start">
          <div class="state-color">
            <router-link to="/login">
            <input id="login" type="radio" name="login-signup">
            <div class="mx-5">
              <label class="cursor-pointer" for="login">{{$t('login')}}</label>
            </div>
            </router-link>
          </div>
          <div class="state-color active-label">

              <input id="signup" type="radio" name="login-signup">
              <div class="mx-5">
                <label class="cursor-pointer" for="signup">{{$t('signup')}}</label>
              </div>
          </div>
        </div>
        <signup-form/>
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
