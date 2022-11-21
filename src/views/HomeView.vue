<template>
  <main class="home">
    <h2>Hola {{ username }}</h2>
    <img src="@/assets/img/hero-home.svg" alt="" class="home__img" />
    <input
      type="text"
      placeholder="Introduce tu nombre"
      v-model="username"
      class="home__input"
    />
    <button @click="login" class="home__btn">Iniciar sesión</button>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref();
const router = useRouter();

function login() {
  router.push({ path: "/chats" });
}
</script>
