import MarketService from '../../services/market.service'

export class MarketController {
  priceByName (req, res, next) {
    var strict = req.query.strict
    if (!strict) {
      strict = false
    }
    MarketService.getPriceByName(req.query.name, strict)
      .then(r => res.json(r))
      .catch(error => next(error))
  }
  priceById (req, res, next) {
    MarketService.getPriceById(req.query.id)
      .then(r => res.json(r))
      .catch(error => next(error))
  }
}
export default new MarketController()
