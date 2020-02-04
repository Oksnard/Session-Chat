<template>
  <v-text-field
    @click:append-outer="send"
    @click:clear="clearMessage"
    v-model="text"
    @keydown.enter="send"
    :append-outer-icon="'mdi-send'"
    filled
    clear-icon="mdi-close-circle"
    clearable
    type="text"
    label="Введите сообщение"
    outlined
  />
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    send() {
      this.$socket.emit(
        'createMessage',
        {
          text: this.text,
          id: this.$store.state.user.id
        },
        (data) => {
          if (typeof data === 'string') {
            console.error(data)
          } else {
            this.text = ''
          }
        }
      )
    },
    clearMessage() {
      this.text = ''
    }
  }
}
</script>
