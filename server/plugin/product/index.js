import Joi from '@hapi/joi'

import { handlerPut, handlerPost, handlerDelete, handlerGet } from './handler'
import { productSchema } from '../../schema'

exports.register = (server, options) => {
  server.route({
    method: 'GET',
    path: '/product/{id}',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Get product',
      validate: {
        params: Joi.object({
          id: Joi.string().required()
        }).label('ProductDeletePaylad'),
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        status: {
          204: productSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerGet
  })

  server.route({
    method: 'PUT',
    path: '/product',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Update product',
      validate: {
        payload: productSchema,
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        status: {
          200: productSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerPut
  })

  server.route({
    method: 'POST',
    path: '/product',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Create product',
      validate: {
        payload: Joi.object({
          name: Joi.string(),
          quantity: Joi.number(),
          price: Joi.string(),
          currency: Joi.string(),
          ProductListId: Joi.string()
        }).label('ProductPostPaylad'),
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        status: {
          201: productSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerPost
  })

  server.route({
    method: 'DELETE',
    path: '/product/{id}',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Delete product',
      validate: {
        params: Joi.object({
          id: Joi.string().required()
        }).label('ProductDeletePaylad'),
        failAction: (request, h, error) => {
          throw error
        }
      },
      response: {
        status: {
          204: productSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerDelete
  })
}

exports.pkg = {
  name: 'product'
}
