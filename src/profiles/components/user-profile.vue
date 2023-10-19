<script>
import {ProfileApiService} from "@/greenhouse/services/profile-api.service";

export default {
  name: "user-profile",
  data() {
    return {
      profileApi: null,
      image: "",
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  created() {
    this.profileApi = new ProfileApiService()
    this.profileApi.getProfiles()
        .then((response) => {
          this.image = response.data.image;
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
          this.email = response.data.email;
        });
  },
};
</script>


<template>

</template>

<style scoped>

</style>