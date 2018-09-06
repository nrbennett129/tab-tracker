<template>
  <v-layout wrap justify-space-around>
    <v-flex xs12 sm12 md6>
      <panel title="Info">
        <v-btn slot="toolbar" absolute fab color="pink" right @click="navigateTo({
          name: 'edit-song',
          params: {
            songId: song.id
          }
        })">
          <v-icon >edit</v-icon>
        </v-btn>
        <v-layout fill-height align-center justify-end>
          <v-flex justify-center>
                <h1>{{song.title}}</h1>
                <h3>{{song.artist}}</h3>
          </v-flex>
          <v-flex>
            <img :src="song.albumImageUrl" :alt="song.album + ' Album Art'"
                  :title="song.album" height="200" width="200"/>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <panel title="Video">
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
      </panel>
    </v-flex>
    <v-flex xs12 sm12 md6>
    <panel title="Tabs">
      <v-card-text>
        <textarea :value="song.tab"></textarea>
      </v-card-text>
    </panel>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <panel title="Lyrics">
        <v-card-text>
          <textarea :value="song.lyrics"></textarea>
        </v-card-text>
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
