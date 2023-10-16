<script>
export default {
  name: "toolbar",
  data() {
    return {
      showMenu: false,
      languageOptions: [
        { label: 'EN', value: 'en' },
        { label: 'ES', value: 'es' },
      ],
      selectedLanguage: this.$i18n.locale,
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
    toggleLanguage() {
      this.showMenu = !this.showMenu;
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.selectedLanguage = locale;
    },
  }
};
</script>

<template>
  <nav class="header relative flex flex-wrap items-center justify-between pt-3 pb-2 mb-3">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <router-link to="/">
          <div class="font-bold leading-relaxed flex mr-4 py-2 whitespace-nowrap items-center">
            <img src="/logo-white.png" alt="logo" width="20" height="20">
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
          <li class="nav-item" @click="toggleLanguage">
            <a class="px-3 py-2 flex items-center leading-snug cursor-pointer">
              <span class="ml-2 flex">
                {{ $i18n.locale === 'en' ? 'EN' : 'ES' }}
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
            <ul v-if="showMenu" class="text-black absolute mt-2 py-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <li @click="changeLanguage('en')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">EN</li>
              <li @click="changeLanguage('es')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">ES</li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/organization">
              <div class="px-3 py-2 items-center font-bold">
                <span class="ml-2 flex">
                  <pv-avatar image="" shape="circle" class="border-2 border-b-white mr-2"/>
                    {{'organization_name'}}
                </span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">
              <div class="px-3 py-2 flex items-center font-bold leading-snug">
                <span class="ml-2 flex">
                  <pv-avatar image="" shape="circle" class="border-2 border-b-white mr-2"/>
                  {{ 'profile_name' }}
                </span>
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
}

path {
  color: var(--primary-white) !important;
}
</style>