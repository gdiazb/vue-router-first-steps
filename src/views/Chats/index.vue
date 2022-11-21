<template>
  <div class="chat-grid">
    <aside class="chat-grid__aside">
      <ul class="chat-grid__list">
        <li v-for="(chat, index) in chats" :key="index" class="chat-item">
          <router-link :to="`/chats/${chat.id}`" class="chat-item__link avatar">
            {{ chat.name }}
          </router-link>
        </li>
      </ul>
    </aside>
    <section class="chat-grid__messages">
      <article class="intro" v-if="chatSelected">
        <div class="intro__body">
          <img src="@/assets/img/bg.png" alt="" class="intro__bg" />
          <div class="intro__content">
            <h2 class="intro__title">GerlApp Web</h2>
            <p class="intro__txt">
              Envía y recibe mensajes sin necesidad de tener tu teléfono
              conectado.
            </p>
            <p class="intro__txt">
              Usa GerlApp en hasta 4 dispositivos vinculados y 1 teléfono a la
              vez.
            </p>
          </div>
        </div>
      </article>
      <article class="messages" v-else>
        <router-view />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { id: 1, name: "Ximena" },
        { id: 2, name: "Diana" },
        { id: 3, name: "Steven" },
        { id: 4, name: "Invierno" },
      ],
    };
  },
  computed: {
    chatSelected() {
      return this.$route.path !== "/chats" ? false : true;
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (val) => {
        console.log("update params", val);
      },
      { inmediate: true }
    );
  },
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
