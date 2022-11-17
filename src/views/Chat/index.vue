<template>
  <div class="chat">
    <nav class="chat__info">
      <img
        @click="goBack"
        src="../../assets/img/arrow-left.svg"
        alt=""
        class="chat__go-back"
      />
      <p class="chat__name avatar">{{ chatName }}</p>
    </nav>
    <section class="chat__body">
      <div v-for="msg in messagesFiltered" :key="msg.id">
        {{ msg.text }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesagges: [
        {
          id: 1,
          text: "Mensaje de Ximena",
          authorId: 1,
          authorName: "Ximena",
        },
        {
          id: 2,
          text: "Mensaje de Diana",
          authorId: 2,
          authorName: "Diana",
        },
        {
          id: 3,
          text: "Mensaje de Steven",
          authorId: 3,
          authorName: "Steven",
        },
        {
          id: 4,
          text: "Mensaje de Xime vue",
          authorId: 1,
          authorName: "Ximena",
        },
        {
          id: 5,
          text: "Mensaje de Xime hello",
          authorId: 1,
          authorName: "Ximena",
        },
        {
          id: 6,
          text: "Mensaje de Invierno :o",
          authorId: 4,
          authorName: "Invierno",
        },
        {
          id: 7,
          text: "Mensaje de Invierno :)",
          authorId: 4,
          authorName: "Invierno",
        },
        {
          id: 8,
          text: "Mensaje de Invierno :(",
          authorId: 4,
          authorName: "Invierno",
        },
      ],
    };
  },
  computed: {
    messagesFiltered() {
      return this.mesagges.filter((message) => {
        return message.authorId == this.$route.params.chatId;
      });
    },
    chatName() {
      return this.messagesFiltered[0].authorName;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./main.scss";
</style>
