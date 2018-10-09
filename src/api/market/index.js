import {
  Router
} from 'express'
import controller from './controller'

const router = new Router()
/**
 * @api {get} /price/name Retrieve Price by Name
 * @apiName PriceByName
 * @apiGroup Market
 * @apiPermission none
 * @apiParam {String} name The name of the item.
 * @apiParam {boolean} strict Use a strict ESI Search.
 * @apiSuccess {Object[]} Array of Price objects.
 * @apiSuccessExample {json} Example-Response:
 * [{
  "id": 0,
  "name": "string",
  "group_id": 0,
  "price": {
    "sell": {
      "min": 0,
      "max": 0,
      "avg": 0
    },
    "buy": {
      "min": 0,
      "max": 0,
      "avg": 0
    }
  }
}]
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/price/name', controller.priceByName)

/**
 * @api {get} /price/id Retrieve Price by Id
 * @apiName PriceById
 * @apiGroup Market
 * @apiPermission none
 * @apiParam {String} id The item id.
 * @apiSuccess {Object} Single price object.
 * @apiSuccessExample {json} Example-Response:
 * {
  "min": 0,
  "max": 0,
  "avg": 0
  }
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/price/id', controller.priceById)

export default router
