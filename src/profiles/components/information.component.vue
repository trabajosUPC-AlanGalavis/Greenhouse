<script>
export default {
  name: "information",
  props: {
    value: null,
    parameter: null,
    type: null,
  },
};
</script>

<template>
  <label for="title" class="fields-text">{{parameter}}: </label>
  <input id="title" class="w-full mb-2 text-base surface-overlay p-1 border-1 border-round outline-none"
         :value="value" :type="type" readonly>
  <br>
</template>

<style scoped>

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