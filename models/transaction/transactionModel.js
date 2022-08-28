const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
  {
    date: {
      day: {
        type: String,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
    },
    description: {
      descriptionName: {
        type: String,
        required: true,
      },
    },
    transactionType: {
      type: String,
      required: true,
      enum: {
        values: ["income", "expense"],
        message: "{VALUE} is not supported",
      },
    },
    categoryId: {
      type: String,
      ref: "categories",
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TransactionModel = model("transaction", transactionSchema);

module.exports = TransactionModel;
