const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: 'wtf-kapusta@meta.ua' }
    await sgMail.send(email)
    return true
  } catch (error) {
    throw error()
  }
}

module.exports = sendEmail
