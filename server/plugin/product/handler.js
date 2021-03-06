import Boom from '@hapi/boom'
import Joi from '@hapi/joi'

import { Product, ProductList } from '../../models'

export const handlerGet = async (request, h) => {
  let product

  try {
    product = await Product.findOne({
      where: {
        id: request.params.id
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
  } catch (err) {
    throw Boom.boomify(error)
  }

  if (!product) {
    throw Boom.notFound()
  }

  return h
    .response(product)
    .code(200)
    .type('application/json')
}

export const handlerPut = async (request, h) => {
  const { payload } = request

  try {
    let product = await Product.findOne({
      where: {
        id: payload.id
      }
    })

    await product.update({
      ...payload
    })

    let newProduct = await Product.findOne({
      where: {
        id: payload.id
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })

    return h
      .response(newProduct)
      .code(200)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}

export const handlerPost = async (request, h) => {
  const { payload } = request

  try {
    const productList = await ProductList.findOne({
      where: {
        name: payload.storeName
      }
    })

    const product = await Product.findOne({
      where: {
        name: payload.name,
        ProductListId: productList.id
      }
    })

    if (product) {
      throw Boom.conflict()
    }

    let newProduct = await Product.create({
      name: payload.name,
      quantity: payload.quantity,
      price: payload.price,
      currency: payload.currency,
      ProductListId: productList.id
    })

    newProduct = await Product.findOne({
      where: {
        name: newProduct.name
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })

    return h
      .response(newProduct)
      .code(201)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}

export const handlerDelete = async (request, h) => {
  const { params } = request

  try {
    await Product.destroy({
      where: {
        id: params.id
      }
    })

    return h
      .response()
      .code(204)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}
