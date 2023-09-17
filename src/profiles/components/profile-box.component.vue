<script>
export default {
  name: "profile-box",
}
</script>

<template>
  <div>
    <div class="field grid box mt-8">
      <slot></slot>
    </div>
  </div>


</template>

<style scoped>

.box{
  border-radius: 25px;
  background-color: var(--white);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 80%;
  height: auto;
  flex-shrink: 0;
  margin: 0 auto;

}

</style>