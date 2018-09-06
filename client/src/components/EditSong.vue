<template>
  <v-layout wrap justify-space-around>
    <v-flex xs12 sm5 md4>
      <panel title="Song Metadata">
        <v-card-text>
          <v-form>
            <v-text-field type="text" name="title" label="Title" v-model.lazy="song.title"></v-text-field>
            <v-text-field type="text" name="artist" label="Artist" v-model.lazy="song.artist"></v-text-field>
            <v-text-field type="text" name="genre" label="Genre" v-model.lazy="song.genre"></v-text-field>
            <v-text-field type="text" name="album" label="Album" v-model.lazy="song.album"></v-text-field>
            <v-text-field type="text" name="albumImageUrl" label="Album Cover URL" v-model.lazy="song.albumImageUrl"></v-text-field>
            <v-text-field type="text" name="youtubeId" label="YouTube ID" v-model.lazy="song.youtubeId"></v-text-field>
          </v-form>
        </v-card-text>
      </panel>
    </v-flex>
    <v-flex xs12 sm7 md7>
    <panel title="Song Structure">
      <v-card-text>
        <v-form>
          <v-text-field multi-line name="lyrics" label="Lyrics" v-model="song.lyrics"></v-text-field>
          <v-text-field multi-line name="tab" label="Tab" v-model="song.tab"></v-text-field>
        </v-form>
      </v-card-text>
    </panel>
    </v-flex>
    <v-flex xs12>
      <v-btn dark class="cyan" @click="editSong">Save Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {

    async editSong () {
      try {
        await SongsService.updateSong(this.song)
        this.$router.push({
          name: 'view-song',
          params: {
            songId: this.song.id
          }
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.getSong(songId)).data
    } catch (error) {
      this.error = error.response.data.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
