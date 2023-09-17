<script>
export default {
  name: "delete-account",
};
</script>

<template>
  <span class="fields-text"> Account</span>
  <br>
  <a class="delete" href="#">Delete account</a>
</template>

<style scoped>
a{
  /* Small Text Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.delete{
  color: var(--red);
}

.fields-text{
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
}
</style>