const { Schema, model } = require('mongoose')

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: 'Guest',
      min: 2,
      max: 10
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String
      // minlength: 6,
      // required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null
    },
    verify: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required']
    }
  },
  { versionKey: false, timestamps: true }
)

const User = model('user', userSchema)

module.exports = User
