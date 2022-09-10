const { Schema, model } = require('mongoose')

const transactionSchema = new Schema(
  {
    date: {
      day: {
        type: Number,
        required: true,
        min: 1,
        max: 31
      },
      month: {
        type: Number,
        required: true,
        min: 0,
        max: 11
      },
      year: {
        type: Number,
        required: true,
        min: 2021
      }
    },
    description: {
      descriptionName: {
        type: String,
        required: true
      }
    },
    transactionType: {
      type: String,
      required: true,
      enum: {
        values: ['income', 'expenses'],
        message: '{VALUE} is not supported'
      }
    },
    categoryId: {
      type: String,
      ref: 'categories',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    userId: {
      type: String,
      ref: 'users',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const TransactionModel = model('transaction', transactionSchema)

module.exports = TransactionModel
