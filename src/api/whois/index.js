import {
  Router
} from 'express'
import controller from './controller'

const router = new Router()

/**
 * @api {get} /whois WhoIs Query
 * @apiName WhoIs
 * @apiGroup whois
 * @apiPermission none
 * @apiParam {String} name The name of the character.
 * @apiSuccess {Object} WhoIs Object
 * @apiSuccessExample {json} Example-Response:
 * {
    "id": 0,
    "name": "string",
    "birthday": "string",
    "security_status": 0,
    "alliance": {
        "alliance_id": 0,
        "name": "string",
        "ticker": "string"
    },
    "corporation": {
        "corporation_id": 0,
        "name": "string",
        "ticker": "string"
    },
    "killboard": {
        "url": "string",
        "kills": 0,
        "losses": 0,
        "iskDestroyed": 0,
        "iskLost": 0
    }
}
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', controller.whois)

export default router
