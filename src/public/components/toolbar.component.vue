<script>
import {ProfileApiService} from "@/profiles/services/profile-api.service";

export default {
  name: "toolbar",
  data() {
    return {
      profileApi: null,
      company_name: '',
      company_image: '',
      full_name: '',
      user_image: '',
      showMenu: false,
      languageOptions: [
        {label: 'English', value: 'en'},
        {label: 'Español', value: 'es'},
      ],
      selectedLanguage: this.$i18n.locale,
    };
  },
  created() {
    this.profileApi = new ProfileApiService();
    this.profileApi.getUsers()
        .then((response) => {
          const first_name = response.data[0].first_name;
          const last_name = response.data[0].last_name;
          this.full_name = first_name + ' ' + last_name;
          this.user_image = response.data[0].image;
        });
    this.profileApi.getCompanies()
        .then((response) => {
          this.company_name = response.data[0].company_name;
          this.company_image = response.data[0].image;
        });
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
    changeLanguage(selectedOption) {
      const selectedValue = selectedOption.value;
      this.$i18n.locale = selectedValue;
      console.log(selectedValue);
      this.selectedLanguage = selectedValue;
    }
  }
};
</script>

<template>
  <nav class="header relative flex flex-wrap items-center justify-between pt-3 pb-2 mb-3">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <router-link to="/">
          <div class="font-bold leading-relaxed flex mr-4 py-2 whitespace-nowrap items-center">
            <img src="/logo-white.png" alt="logo" width="20" height="20" class="mr-2">
            <p>Greenhouse</p>
          </div>
        </router-link>
        <button class="cursor-pointer leading-none rounded block lg:hidden outline-none focus:outline-none"
                type="button" @click="toggleNavbar">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <div class="px-3 py-2 items-center font-bold ml-2">
              <pv-dropdown
                  :options="languageOptions"
                  option-label="label"
                  option-value="value"
                  :placeholder="selectedLanguage.toString()"
                  @change="changeLanguage"
                  v-model="selectedLanguage"
              >
              </pv-dropdown>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/organization">
              <div class="px-3 py-2 items-center font-bold ml-2 flex">
                  <pv-avatar :image="company_image" shape="circle" class="border-2 border-b-white mr-2"/>
                  <p>{{ company_name }}</p>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">
              <div class="px-3 py-2 items-center font-bold ml-2 flex">
                  <pv-avatar :image="user_image" shape="circle" class="border-2 border-b-white mr-2"/>
                  <p>{{ full_name }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.header {
  background: inherit;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--primary-green);
  color: var(--white);
  font-family: var(--font-primary);
  font-size: var(--medium-text-regular-size);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

p {
  font-size: var(--medium-text-regular-size);
  color: var(--white);
}

.p-dropdown {
  background-color: transparent !important;
  border: 0 !important;
  margin: 0 !important;
}

.p-dropdown-label {
  color: var(--primary-white) !important;
  font-family: var(--font-primary) !important;
}

.p-dropdown .p-dropdown-label {
  padding: 0 !important;
  font-size: var(--medium-text-regular-size);
}

path {
  color: var(--primary-white) !important;
}
</style>