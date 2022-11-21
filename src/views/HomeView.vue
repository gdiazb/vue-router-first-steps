<template>
  <main>
    <h3>Hola {{ username }}</h3>
    <input
      type="text"
      placeholder="Introduce tu nombre de usuario"
      v-model="username"
    />
    <button @click="login">Iniciar sesión</button>
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
