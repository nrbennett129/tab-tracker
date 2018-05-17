<template>
  <v-layout fill-height align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="white elevation-12">
        <v-toolbar dark class="cyan">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="mail" type="email" name="email" label="Email" v-model.lazy="email"></v-text-field>
            <v-text-field prepend-icon="person" type="password" name="password" label="Password" v-model.lazy="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-layout justify-center>
          <v-card-actions>
            <v-btn dark class="cyan" @click="login">Login</v-btn>
          </v-card-actions>
        </v-layout>
        <v-alert icon="warning" type="error" :value="error">{{error}}</v-alert>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
