import api from '@/services/api'

export default {
  getAllSongs (search) {
    return api().get('songs', {
      params: {
        search: search
      }
    })
  },
  getSong (songId) {
    return api().get(`songs/${songId}`)
  },
  createSong (song) {
    return api().post('songs', song)
  },
  deleteSong (songId) {
    return api().delete(`songs/${songId}`)
  },
  updateSong (song) {
    return api().put(`songs/${song.id}`, song)
  }
}
