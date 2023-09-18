<script>

import ProfileBox from "@/profiles/components/profile-box.component.vue";
import ProfileInformation from "@/profiles/components/profile-information.component.vue";
import ProfileAvatar from "@/profiles/components/avatar.component.vue";

export default {
  name: "main-content",
  components: {ProfileAvatar, ProfileInformation, ProfileBox},
  data(){
    return{
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      name: "Winston Smith",
    }
  }
}
</script>

<template>
<profile-box>
  <div class="col-12 md:col-3 md:mb-5 overflow-auto">
    <h1>My profile</h1>
    <profile-avatar :image="image" :name="name"></profile-avatar>
  </div>
  <profile-information class="overflow-auto"></profile-information>
</profile-box>
</template>

<style scoped>

h1{
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
}
</style>