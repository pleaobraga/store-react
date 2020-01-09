import Boom from '@hapi/boom'

import { Product, ProductList } from '../../models'

export const handlerGet = async (request, h) => {
  let productList

  try {
    productList = await ProductList.findOne({
      where: {
        name: request.params.name
      },
      attributes: ['id', 'name'],
      include: [
        {
          model: Product,
          as: 'Products'
        }
      ]
    })
  } catch (err) {
    throw Boom.boomify(error)
  }

  if (!productList) {
    throw Boom.notFound()
  }

  return h
    .response(productList)
    .code(200)
    .type('application/json')
}

export const handlerPost = async (request, h) => {
  let productList

  try {
    productList = await ProductList.findOne({
      where: {
        name: request.params.name
      }
    })
  } catch (err) {
    throw Boom.boomify(error)
  }

  if (productList) {
    throw Boom.conflict()
  }

  try {
    // Create new Board
    const newProductList = await ProductList.create({
      name: request.params.name
    })

    const newTaskLists = []

    return h
      .response(newProductList)
      .code(201)
      .type('application/json')
  } catch (error) {
    throw Boom.boomify(error)
  }
}
