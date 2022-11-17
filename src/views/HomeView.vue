<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      this.$router.push({
        path: "/chats",
      });
    },
  },
};
</script>

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
