<script>
export default {
  name: "profile-card",
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
  <div>
    <div class="field grid box mt-8">
      <div class="col-12 md:col-3 md:mb-5">
        <h1>My profile</h1>
        <pv-avatar image="https://www.svgrepo.com/show/452030/avatar-default.svg" shape="circle"/>
      </div>
      <div class="col-12 md:col-8 md:mt-6 md:ml-6 mb-6">
        <label for="title"  class="fields-text">Name: </label>
        <input id="title" type="text" class="w-full text-base surface-overlay p-2 border-1 border-round"
        :value="name" readonly>
        <br>
        <a class="change" href="#">Change name</a>
        <hr class="division">
        <label for="email" class="fields-text">Email: </label>
        <input id="email" type="email" class="w-full text-base  surface-overlay p-2 border-1 border-round"
        :value="email" readonly>
        <br>
        <a class="change" href="#">Change email</a>
        <hr class="division">
        <label for="organization" class="fields-text">Organization: </label>
        <input id="organization" type="text" class="w-full text-base surface-overlay p-2 border-1 border-round"
        :value="organization" readonly>
        <br>
        <a class="change" href="#">View organization</a>
        <hr class="division">
        <label for="role" class="fields-text">Role within the company: </label>
        <input id="role" type="text" class="w-full text-base text-color surface-overlay p-2 border-1 border-round"
        :value="role" readonly>
        <br>
        <a class="change" href="#">Change role</a>
        <hr class="division">
        <label for="password" class="fields-text">Password: </label>
        <input id="password" type="password" class="w-full text-base text-color surface-overlay p-2 border-1 border-round"
        :value="password" readonly>
        <br>
        <a class="change" href="#">Change password</a>
        <hr class="division">
        <span class="fields-text"> Account</span>
        <br>
        <a class="delete" href="#">Delete account</a>
      </div>
    </div>
  </div>


</template>

<style scoped>

.fields-text{
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
}


.p-avatar{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.p-avatar-image{
  width: 60%;
  height: auto;
  border: var(--primary-green) 5px solid;
}

.box{
  border-radius: 25px;
  background-color: var(--white);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 80%;
  height: auto;
  flex-shrink: 0;
  margin: 0 auto;

}

h1{
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
}

.division{
  border-top: 1px solid var(--primary-green);
}

a{
  /* Small Text Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.delete{
  color: var(--red);
}

.change{
  color:var(--secondary-green-1);
}

</style>