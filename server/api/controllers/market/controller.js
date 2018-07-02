import l from '../../../common/logger';
import MarketService from '../../services/market/market.service';

export class Controller {
  getPrice(req, res, next) {
    l.info('Received getPrice request');
    MarketService.getPrice(req.query.name, req.query.strict)
      .then(r => res.json(r))
      .catch(error => next(error));
  }
}
export default new Controller();
