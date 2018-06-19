<template>
  <v-card class="white elevation-12">
    <v-toolbar dark dense class="cyan">
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <slot>
    </slot>
  </v-card>
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
