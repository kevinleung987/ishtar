import {
  Router
} from 'express'
import controller from './controller'

const router = new Router()

/**
 * @api {get} /wormhole/thera Get Thera entrances to system
 * @apiName TheraEntrances
 * @apiGroup Wormhole
 * @apiPermission none
 * @apiParam {String} systemName The name of the system.
 * @apiSuccess {Object[]} Array of Thera Distance objects.
 * @apiSuccessExample {json} Example-Response:
 * [{
  "jumps": "string",
  "name": "string",
  "security": 0,
  "region": "string",
  "theraSide": "string",
  "systemSide": "string"
}]
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/thera', controller.nearestTheraEntrance)

export default router
