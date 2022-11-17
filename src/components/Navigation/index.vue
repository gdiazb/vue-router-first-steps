<template>
  <nav class="navigation">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <router-link :to="{ name: 'about' }"> About </router-link>
    <router-link to="/session"> Sesión </router-link>
    <router-link to="/chats"> Chats </router-link>
  </nav>
</template>

<style scoped lang="scss">
@import "./main.scss";
</style>
