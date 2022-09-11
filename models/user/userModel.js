const { Schema, model } = require('mongoose')
const gravatar = require('gravatar')

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is required']
    },
    avatar: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: '250' }, true)
      }
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
