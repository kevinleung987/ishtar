import EveService from './eve.service';

class WormholeService {
  nearestTheraEntrance(systemName) {
    return Promise.all([EveService.search(systemName, 'false', 'solar_system'), EveService.eveScout()]).then(searchJSON => searchJSON);
  }
}

export default new WormholeService();
