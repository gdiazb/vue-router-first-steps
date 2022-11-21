<template>
  <div class="login">
    <!-- <form action="" class="login__form"> -->
    <fieldset class="login__group">
      <legend class="login__title">Inicia sesión</legend>
      <ul class="login__list">
        <li class="login__list-item">
          <label for="login-email" class="login__label">
            Ingresa tu correo
          </label>
          <input type="email" name="login-email" class="login__input" />
        </li>
        <li class="login__list-item">
          <label for="login-password" class="login__label">
            Ingresa tu contraseña
          </label>
          <input type="password" name="login-password" class="login__input" />
        </li>
      </ul>
    </fieldset>
    <button class="login__btn" @click="login">Ingresar</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      sessionStorage.toRequiresAuth = true;
      this.$router.push({
        name: "chats",
      });
    },
  },
};
</script>
