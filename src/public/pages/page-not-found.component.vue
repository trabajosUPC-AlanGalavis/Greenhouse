<script>
export default {
  name: "page-not-found-component",
  data() {
    return {
      invalidUrl: this.$route.fullPath,
    };
  },
}
</script>


<template>
  <div class="center">
    <h1>{{ $t('page_not_found') }}</h1>
    <p style="color: var(--black)">{{ $t('the_path') }} <b>{{ invalidUrl }}</b> {{ $t('page-not-found.is_not_valid') }}.</p>
    <router-link to="/">
      <pv-button class="p-button-text">
        {{ $t('return') }}
      </pv-button>
    </router-link>
  </div>
</template>


<style scoped>
.center {
  text-align: center;
  margin: 20%;
}
</style>