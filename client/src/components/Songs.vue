<template>
  <v-layout align-center justify-center >
    <v-flex sm8>
      <panel title="Songs">
        <template slot="toolbar">
          <v-spacer></v-spacer>
            <v-text-field color="white"
              width="100px"
              hide-details
              prepend-icon="search"
              single-line class="mr-4"
              v-model="search"></v-text-field>
          <v-btn fab color="pink" right @click="navigateTo({name: 'create-song'})">
            <v-icon >add</v-icon>
          </v-btn>
        </template>
        <v-list two-line avatar>
          <template v-for="(song,index) in songs">
            <v-list-tile :key="song.id" @click="navigateTo(
              {
                name: 'view-song',
                params: {
                  songId: song.id
                  }
              })">
              <v-list-tile-avatar tile>
                <img v-if="song.albumImageUrl" :src="song.albumImageUrl">
                <v-icon v-else>music-note</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{song.title}}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{song.artist}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{song.album}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click="deleteSong(song.id)">
                  <v-icon color="grey">delete_outline</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < songs.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
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
      search: '',
      songs: null
    }
  },
  components: {
    Panel
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteSong (songId) {
      const res = (await SongsService.deleteSong(songId)).data
      console.log(res)
      if (res.removed > 0) {
        this.songs = this.songs.filter((song) => {
          return (song.id !== res.id)
        })
      }
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (value !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
        this.songs = (await SongsService.getAllSongs(value)).data
      }
    }
  }
}
</script>

<style scoped>
  .tile-action {
    visibility: hidden;
  }
  .list-tile:hover .tile-action {
    visibility: visible;
  }

</style>
