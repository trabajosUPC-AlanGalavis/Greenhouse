<template>
  <pv-toolbar class="sticky" :style="{ backgroundColor: 'var(--primary-green)', borderRadius: '0' }">
    <template #start>
      <a href="">
        <img src="public/logo-white.png" alt="logo" width="30" height="30">
        Greenhouse</a>
      <a href="">
        Panel de control</a>
      <a href="">
        Cultivos</a>
    </template>
    <template #end>
      <a href="">
        <img src="public/logo-white.png" alt="logo" width="30" height="30">
        Empresa</a>
      <a href="">
        <img src="public/logo-white.png" alt="logo" width="30" height="30">
        Usuario</a>
    </template>
  </pv-toolbar>
</template>

<script>
</script>

<style>
  body {
    margin: 0 !important;
  }
  a{
    text-decoration: none;
    color: var(--primary-white);
    display: flex;
    align-items: center;
    margin-right: 40px;
  }

  .link-text {
    margin-left: 8px;
  }
</style>