import Joi from '@hapi/joi'

import { handlerGet, handlerPost } from './handler'
import { productListSchema } from '../../schema'

exports.register = (server, options) => {
  server.route({
    method: 'GET',
    path: '/productList/{name}',
    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Get Product List',
      response: {
        status: {
          200: productListSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerGet
  })

  server.route({
    method: 'POST',
    path: '/productList/{name}',

    config: {
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['content-type']
      },
      description: 'Create Product List',
      response: {
        status: {
          201: productListSchema
        },
        failAction: 'log'
      }
    },

    handler: handlerPost
  })
}

exports.pkg = {
  name: 'productList'
}
