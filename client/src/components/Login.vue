<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md4>
      <panel title="Login">
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="mail" type="email" name="email" label="Email" v-model.lazy="email"></v-text-field>
            <v-text-field prepend-icon="lock" type="password" name="password" label="Password" v-model.lazy="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-layout justify-center>
          <v-card-actions>
            <v-btn dark class="cyan" @click="login">Login</v-btn>
          </v-card-actions>
        </v-layout>
        <v-alert icon="warning" type="error" :value="error">{{error}}</v-alert>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
          error: null
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
