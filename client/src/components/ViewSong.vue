<template>
  <v-layout wrap justify-center>
    <v-flex xs12 sm5 md4>
      <panel title="Song View">
        <v-card-text>
        </v-card-text>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: null
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
