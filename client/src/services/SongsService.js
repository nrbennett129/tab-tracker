import api from '@/services/api'

export default {
  getAllSongs () {
    return api().get('songs')
  },
  getSong (songId) {
    return api().get(`songs/${songId}`)
  },
  createSong (song) {
    return api().post('songs', song)
  },
  deleteSong (songId) {
    return api().delete(`songs/${songId}`)
  }
}
