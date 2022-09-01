const isUserExist = require('./isUserExist')
const sendEmail = require('./sendEmail')

const serviseAuth = {
  isUserExist,
  sendEmail
}

module.exports = serviseAuth
