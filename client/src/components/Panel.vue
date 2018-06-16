<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg4>
      <v-card class="white elevation-12">
        <v-toolbar dark dense class="cyan">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <slot>
        </slot>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
