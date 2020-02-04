<template>
  <v-app dark app>
    <v-navigation-drawer v-model="drawer" app mobile-break-point="650">
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>

        <v-list-item v-for="u in users" :key="u.id" @click.prevent>
          <v-list-item-content>
            <v-list-item-title v-text="u.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="u.id == user.id ? 'primary' : 'grey'"
              >mdi-message</v-icon
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn @click="exit" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>Чат комнаты {{ user.room }}</v-toolbar-title>

      <!-- <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>

    <v-content>
      <div class="app-content">
        <transition name="page" mode="out-in">
          <nuxt />
        </transition>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    drawer: true
  }),
  computed: mapState(['user', 'users']),
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.$router.push('/?message=leftChat')
        this.clearData()
      })
    }
  }
}
</script>

<style scoped>
.app-content {
  height: 100%;
}
.no-avatar::before {
  font-size: 40px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
