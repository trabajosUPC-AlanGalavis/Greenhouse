<script>
export default {
  name: "profile-avatar",
  props: {
    image: null,
    name: null,
  },
}
</script>

<template>
  <pv-avatar :image="image" :aria-label="name" shape="circle"/>
</template>

<style scoped>
.p-avatar{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.p-avatar-image{
  width: 60%;
  height: auto;
  border: var(--primary-green) 5px solid;
}
</style>