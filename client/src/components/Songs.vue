<template>
  <v-layout align-center justify-center >
    <v-flex sm8>
      <panel title='Songs'>
        <div
          v-for="song in songs"
          :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>

<style scoped>

</style>
