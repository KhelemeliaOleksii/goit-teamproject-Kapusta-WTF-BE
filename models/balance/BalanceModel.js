const { Schema, model } = require('mongoose')

const balanceSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    currentBalance: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const BalanceModel = model('balance', balanceSchema)

module.exports = BalanceModel
