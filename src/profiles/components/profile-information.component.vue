<script>
import Information from "@/profiles/components/information.component.vue";
import DeleteAccount from "@/profiles/components/delete-account.component.vue";

export default {
  name: "profile-information",
  components: {DeleteAccount, Information},
  props:{

  },
  data(){
    return{
      name: "Winston Smith",
      email: "winstonsmith@peruagro.com",
      organization: "Peru Agro J&V S.A.C",
      role: "Administrador",
      password: "********"
    }
  }
}
</script>

<template>
  <div class="col-12 md:col-8 md:mt-6 md:ml-6 mb-6">
    <information :value="name" :parameter="'name'"></information>
    <hr class="division">

    <information :value="email" :parameter="'email'"></information>
    <hr class="division">

    <information :value="organization" :parameter="'organization'"></information>
    <hr class="division">

    <information :value="role" :parameter="'role'"></information>
    <hr class="division">

    <information :value="password" :parameter="'password'"></information>
    <hr class="division">

    <delete-account></delete-account>
  </div>
</template>

<style scoped>
.division{
  border-top: 1px solid var(--primary-green);
}
</style>