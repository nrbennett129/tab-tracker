const AuthenticationController = require('./controllers/AuthenticatonController')

module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
