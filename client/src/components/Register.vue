<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md4>
      <panel title="Sign Up">
        <v-card-text>
          <v-form autocomplete="off">
            <v-text-field prepend-icon="mail" type="email" name="email" label="Email" v-model.lazy="email"></v-text-field>
            <v-text-field prepend-icon="lock" type="password" name="password" label="Password" v-model.lazy="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-layout justify-center>
          <v-card-actions>
            <v-btn dark class="cyan" @click="register">Register</v-btn>
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
  name: 'Register',
  data: () => {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
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
