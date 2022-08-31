const { model, Schema } = require('mongoose')

const ExampleSchema = new Schema(
  {
    exampleName: {
      type: String,
      require: true
    },
    examplePassword: {
      type: String,
      required: [true, 'Password is required']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const modelExample = model('example', ExampleSchema)

module.exports = modelExample
