<template>
  <nav class="header relative flex flex-wrap items-center justify-between pt-3 pb-2 mb-3">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
        <router-link to="/">
          <div class="font-bold leading-relaxed flex mr-4 py-2 whitespace-nowrap items-center">
            <img src="public/logo-white.png" alt="logo" width="20" height="20">
            <p>Greenhouse</p>
          </div>
        </router-link>
        <button class="cursor-pointer leading-none rounded block lg:hidden outline-none focus:outline-none" type="button" @click="toggleNavbar">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center leading-snug cursor-pointer">
              <span class="ml-2 flex"><p>EN</p><i class="fa fa-angle-down"></i></span>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/organization">
              <div class="px-3 py-2 items-center font-bold">
                <span class="ml-2 flex">
                  <pv-avatar image="" shape="circle" class="border-2 border-b-white mr-2"/>
                  <p>Organization</p>
                </span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">
              <div class="px-3 py-2 flex items-center font-bold leading-snug">
                <span class="ml-2 flex">
                  <pv-avatar image="" shape="circle" class="border-2 border-b-white mr-2"/>
                  <p>Profile</p>
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

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
</style>