import l from '../../../common/logger';
import WormholeService from '../../services/wormhole.service';

export class WormholeController {
  nearestTheraEntrance(req, res, next) {
    l.info('Received nearestTheraHole request');
    WormholeService.nearestTheraEntrance(req.query.systemName)
      .then(r => res.json(r))
      .catch(error => {
        if (error.message === 'no search results') {
          res.status(400);
          res.send('No search results found.');
        } else {
          next(error);
        }
      });
  }
}
export default new WormholeController();
