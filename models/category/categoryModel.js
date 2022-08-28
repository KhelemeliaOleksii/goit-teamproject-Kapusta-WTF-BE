const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    imageUrl: {
      type: String,
      required: true,
      // default: "../../public/avatars/defaultAvatar.jpg",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoryModel = model("category", categorySchema);

module.exports = CategoryModel;
