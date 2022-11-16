<script>
export default {
  data() {
    return {
      username: "",
    };
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
  </main>
</template>
