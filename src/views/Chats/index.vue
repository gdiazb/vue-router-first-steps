<template>
  <div class="chat-grid">
    <aside class="chat-grid__aside">
      <ul class="chat-grid__list">
        <li v-for="(chat, index) in chats" :key="index" class="chat-item">
          <router-link :to="`/chats/${chat.id}`" class="chat-item__link">
            {{ chat.name }}
          </router-link>
        </li>
      </ul>
    </aside>
    <section class="chat-grid__messages">
      <article class="messages">
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
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
