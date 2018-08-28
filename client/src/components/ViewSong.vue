<template>
  <v-layout wrap justify-space-around>
    <v-flex xs12 sm6>
      <panel title="Song Metadata">
        <v-card-media>
          <iframe width="100%"
                  height="400px"
                  v-bind:src="embedUrl"
                  frameborder="0"
                  rel="0"
                  allow="encrypted-media"
                  allowfullscreen>
          </iframe>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1>{{song.title}}</h1>
            <h3>{{song.artist}}</h3>
          </div>
          <v-spacer></v-spacer>
          <div>
            <img :src="song.albumImageUrl" height="150px" width="150px"/>
          </div>
        </v-card-title>
      </panel>
    </v-flex>
    <v-flex xs12 sm6>
    <panel title="Song Structure">
      <v-card-text>
        <textarea :value="song.tab"></textarea>
        <textarea :value="song.lyrics"></textarea>
      </v-card-text>
    </panel>
    </v-flex>
    <v-flex xs6>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: Object
    }
  },
  computed: {
    embedUrl () {
      return 'https://www.youtube.com/embed/' + this.song.youtubeId
    }
  },
  components: {
    Panel
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.getSong(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea {
    width: 100%;
    min-height: 37vh;
  }

</style>
