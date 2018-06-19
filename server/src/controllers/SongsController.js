const { Song } = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to retreive songs.'
      })
    }
  },
  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      const songJson = song.toJson()

      res.send(songJson)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to create a song.'
      })
    }
  }
}
