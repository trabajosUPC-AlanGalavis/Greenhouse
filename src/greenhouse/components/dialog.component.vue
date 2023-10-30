<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";

export default {
  name: "dialog",
  components: {ButtonPrimary},
  props: {
    popupTitle: '',
    popupText: '',
    date: '',
  },
  data() {
    return {
      showPopup: false,
    }
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
}
</script>

<template>
  <div class="popup-container" v-if="showPopup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>{{ popupTitle }}</h2>
      </div>
      <div class="popup-body">
        <br>
        <p style="text-align: center;">{{ popupText + date }}</p>
      </div>
      <div class="popup-footer">
        <router-link to="/crop">
          <button-primary
              class="text-center mx-auto"
              :text="' Yes, Start'"
              :buttonColor="'var(--primary-green)'"
              :buttonTextColor="'var(--primary-white)'"
              :buttonBorderColor="'var(--primary-green)'"
              @click="openPopup()">
          </button-primary>
        </router-link>
        <button-primary
            class="text-center mx-9"
            :text="' Cancel'"
            :buttonColor="'var(--gray-2)'"
            :buttonTextColor="'var(--primary-white)'"
            :buttonBorderColor="'var(--gray-2)'"
            @click="openPopup()"
        >
        </button-primary>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>