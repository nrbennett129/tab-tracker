<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat :to="{path: '/'}">
        Tab Tracker
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark fill :to="{name: 'songs'}">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark fill :to="{name: 'login'}">Login</v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark fill :to="{name: 'register'}">Sign Up</v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" flat dark fill @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
