<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat @click="navigateTo({name: 'root'})">
        Tab Tracker     
      </v-btn>
    </v-toolbar-title>
    <!--TODO: Implement Me! -->
    <!-- <v-toolbar-items>
      <v-btn flat dark fill>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat dark fill @click="navigateTo({name: 'login'})">Login</v-btn>
        <v-btn flat dark fill @click="navigateTo({name: 'register'})">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
