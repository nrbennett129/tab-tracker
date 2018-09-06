const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.getAllSongs)

  app.get('/songs/:songId',
    SongsController.getSong)

  app.post('/songs',
    SongsController.createSong)

  app.delete('/songs/:songId',
    SongsController.deleteSong)

  app.put('/songs/:songId',
    SongsController.updateSong)
}
