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
      Name: "Winston Smith",
      Email: "winstonsmith@peruagro.com",
      Organization: "Peru Agro J&V S.A.C",
      Role: "Administrador",
      Password: "sgtews"
    }
  }
}
</script>

<template>
  <div class="col-12 md:col-8 md:mt-6 md:ml-6 mb-6">
    <information :value="Name" :type="'text'" :action="'Change'" :parameter="'Name'"></information>
    <a class="link-color" href=""> Change name</a>
    <hr class="division">

    <information :value="Email" :type="'email'" :parameter="'Email'"></information>
    <a class="link-color" href=""> Change email</a>
    <hr class="division">

    <information :value="Organization" :type="'text'" :parameter="'Organization'"></information>
    <a class="link-color" href=""> View organization</a>
    <hr class="division">

    <information :value="Role" :type="'text'" :parameter="'Role'"></information>
    <a class="link-color" href=""> Change role</a>
    <hr class="division">

    <information :value="Password" :type="'password'" :parameter="'Password'"></information>
    <a class="link-color" href=""> Change password</a>
    <hr class="division">

    <delete-account></delete-account>
  </div>
</template>

<style scoped>
.division{
  border-top: 1px solid var(--primary-green);
}
.link-color{
  color:var(--secondary-green-1);
}
</style>