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
  async getSong (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to retreive a song.'
      })
    }
  },
  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      const songJson = song.toJSON()

      res.send(songJson)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to create a song.'
      })
    }
  },
  async deleteSong (req, res) {
    try {
      const rowsRemoved = await Song.destroy({
        where: {
          id: req.params.songId
        }
      })
      const msg = rowsRemoved > 0 ? `Removed song with ID of ${req.params.songId}` : 'Song does not exist.'
      res.status(200).send({
        removed: rowsRemoved,
        id: Number(req.params.songId),
        message: msg
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to delete a song.'
      })
    }
  },
  async updateSong (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })

      res.send(req.body)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occured trying to update a song.'
      })
    }
  },
}
