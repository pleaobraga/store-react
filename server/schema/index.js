import Joi from '@hapi/joi'

// ------ Product ------

export const productSchema = Joi.object({
  id: Joi.string(),
  quantity: Joi.number(),
  price: Joi.string(),
  currency: Joi.string(),
  ProductListId: Joi.string()
}).label('Product')

// ------ Product List ------

export const productListSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  Products: Joi.array().items(productSchema)
}).label('ProductList')
