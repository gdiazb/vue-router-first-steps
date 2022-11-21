<template>
  <nav class="navigation">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <router-link :to="{ name: 'about' }"> About </router-link>
    <router-link to="/session"> Sesión </router-link>
    <router-link to="/chats"> Chats </router-link>
    <router-link to="/profile" v-if="isTest"> Profile </router-link>
  </nav>
</template>

<style scoped lang="scss">
@import "./main.scss";
</style>

<script setup>
const isTest = import.meta.env.VITE_STAGE === "test";
</script>
