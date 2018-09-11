import l from '../../../common/logger';
import WhoIsService from '../../services/whois.service';

export class WhoIsController {
  whois(req, res, next) {
    l.info('Received price by id request');
    WhoIsService.whois(req.query.name)
      .then(r => res.json(r))
      .catch(error => next(error));
  }
}
export default new WhoIsController();
