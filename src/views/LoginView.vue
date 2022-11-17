<template>
  <div class="login">
    <form action="" class="login__form">
      <fieldset class="login__group">
        <legend class="login__title">Inicia sesión</legend>
        <ul class="login__list">
          <li class="login__list-item">
            <label for="login-email" class="login__label">
              Ingresa tu correo
            </label>
            <input
              type="email"
              name="login-email"
              class="login__input"
              required
            />
          </li>
          <li class="login__list-item">
            <label for="login-password" class="login__label">
              Ingresa tu contraseña
            </label>
            <input
              type="password"
              name="login-password"
              class="login__input"
              required
            />
          </li>
        </ul>
      </fieldset>
      <button class="login__btn">Ingresar</button>
    </form>
  </div>
</template>
