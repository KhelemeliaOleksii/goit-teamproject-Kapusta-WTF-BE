const category = require('../../models/category')
const { CategoryModel } = category
const getCategories = async () => {
  const result = await CategoryModel.find()

  return result
}

module.exports = getCategories
