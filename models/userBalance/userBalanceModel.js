const { string } = require('joi')
const { Schema, model } = require('mongoose')

const userBalanceSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    currentBalance: {
      type: String,
      required: true,
      default: '0'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const userBalanceModel = model('userBalance', userBalanceSchema)

module.exports = userBalanceModel
