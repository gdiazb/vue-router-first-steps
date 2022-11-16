<template>
  <div v-for="msg in messagesFiltered" :key="msg.id">{{ msg.text }}</div>
</template>

<script>
export default {
  data() {
    return {
      mesagges: [
        { id: 1, text: "Mensaje de Ximena", author: 1 },
        { id: 2, text: "Mensaje de Diana", author: 2 },
        { id: 3, text: "Mensaje de Steven", author: 3 },
        { id: 4, text: "Mensaje de Xime vue", author: 1 },
        { id: 5, text: "Mensaje de Xime hello", author: 1 },
        { id: 6, text: "Mensaje de Invierno :o", author: 4 },
        { id: 7, text: "Mensaje de Invierno :)", author: 4 },
        { id: 8, text: "Mensaje de Invierno :(", author: 4 },
      ],
    };
  },
  computed: {
    messagesFiltered() {
      return this.mesagges.filter((message) => {
        return message.author == this.$route.params.chatId;
      });
    },
  },
};
</script>
