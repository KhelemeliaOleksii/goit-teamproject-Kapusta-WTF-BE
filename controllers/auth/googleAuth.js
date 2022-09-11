const asyncHandler = require('express-async-handler')
const queryString = require('query-string')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { userModel } = require('../../models/user/')

const { GOOGLE_CLIENT_ID, SECRET_KEY, GOOGLE_CLIENT_SECRET } = process.env

const googleAuth = asyncHandler(async (_, res) => {
  const stringifiedParams = queryString.stringify({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.BACK_HOST}/api/v1/users/google-redirect`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent'
  })
  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  )
})

const googleRedirect = asyncHandler(async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  const urlObj = new URL(fullUrl)
  const urlParams = queryString.parse(urlObj.search)
  const code = urlParams.code

  const tokenData = await axios({
    url: 'https://oauth2.googleapis.com/token',
    method: 'post',
    data: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BACK_HOST}/api/v1/users/google-redirect`,
      grant_type: 'authorization_code',
      code
    }
  })

  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`
    }
  })

  const { email, name, picture, id } = userData.data

  const user = await userModel.findOne({ email })
  if (!user) {
    const password = id
    const hashPassword = await bcryptjs.hash(password, 10)
    const newUser = await userModel.create({
      username: name,
      email,
      password: hashPassword,
      avatar: picture,
      verificationToken: id
    })
    const payload = {
      id: newUser._id
    }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
    const userToken = await userModel.findByIdAndUpdate(newUser.id, token)
    await userModel.findByIdAndUpdate(
      { _id: newUser._id },
      {
        token,
        verify: true,
        verificationToken: ''
      }
    )
    return res.redirect(
      `${process.env.FRONT_HOST}/login?token=${userToken.token}`
    )
  }

  const { _id } = user
  const payload = { id: _id }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
  const result = await userModel.findByIdAndUpdate({ _id }, { token })
  return res.redirect(
    `${process.env.FRONT_HOST}/login?token=${result.token}&username=${result.username}`
  )
})

module.exports = { googleAuth, googleRedirect }
