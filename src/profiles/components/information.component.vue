<script>
export default {
  name: "information",
  props: {
    value: null,
    parameter: null,
  },
};
</script>

<template>
  <label for="title"  class="fields-text">Name: </label>
  <input id="title" type="text" class="w-full text-base surface-overlay p-2 border-1 border-round"
         :value="value" readonly>
  <br>
  <a class="change" href="#">Change {{parameter}}</a>
</template>

<style scoped>
.change{
  color:var(--secondary-green-1);
}

.fields-text{
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
}

a{
  /* Small Text Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
</style>