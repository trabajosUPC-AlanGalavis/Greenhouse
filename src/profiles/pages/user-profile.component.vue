<script>
import {ProfileApiService} from "@/profiles/services/profile-api.service";

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
    this.profileApi = new ProfileApiService();
    this.profileApi.getUsers()
        .then((response) => {
          this.image = response.data[0].image;
          this.first_name = response.data[0].first_name;
          this.last_name = response.data[0].last_name;
          this.email = response.data[0].email;
        });
  }
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <pv-card class="card md:px-5">
      <template #content>
        <div class="lg:flex">
          <div class="lg:w-1/2 text-center align-content-center mb-5 md:mr-5">
            <p class="font-bold text-4xl mb-4">{{ $t('user-profile.my_profile') }}</p>
            <div class="flex items-center justify-center mb-2">
              <img class="rounded-full w-56 h-56" :src="image" alt="avatar">
            </div>
            <a class="text-blue-500 text-sm underline">{{ $t('user-profile.change_profile_picture') }}</a>
          </div>
          <div class="lg:w-1/2 p-1 md:pt-6">
            <div>
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <p class="font-bold mr-2">{{ $t('user-profile.name') }}:</p>
                  <p class="text-sm overflow-ellipsis">{{ first_name + ' ' + last_name }}</p>
                </div>
                <a class="text-blue-500 text-sm underline">{{ $t('user-profile.change_name') }}</a>
              </div>
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <p class="font-bold mr-2">{{ $t('user-profile.email') }}:</p>
                  <p class="text-sm overflow-ellipsis">{{ email }}</p>
                </div>
                <a class="text-blue-500 text-sm underline">{{ $t('user-profile.change_email') }}</a>
              </div>
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <p class="font-bold mr-2">{{ $t('user-profile.password') }}:</p>
                  <p class="text-sm overflow-ellipsis">●●●●●●●●</p>
                </div>
                <a class="text-blue-500 text-sm underline">{{ $t('user-profile.change_password') }}</a>
              </div>
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <p class="font-bold mr-2">{{ $t('user-profile.account') }}:</p>
                </div>
                <a class="text-red-500 text-sm underline">{{ $t('user-profile.delete_account') }}</a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
* {
  color: var(--black);
}

img {
  border: solid 7px var(--primary-green);
}

.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
