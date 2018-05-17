const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.send(403).send({
          error: `${email} is not a registered email address.`
        })
      }
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.send(403).send({
          error: 'Invalid password.'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to log in.'
      })
    }
  }
}
