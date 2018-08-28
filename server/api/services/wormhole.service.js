import EveService from './eve.service';
import l from '../../common/logger';

class WormholeService {
  nearestTheraEntrance(systemName) {
    const system = EveService.search(systemName, 'false', 'solar_system');
    const eveScout = EveService.eveScout();
    const response = [];
    return Promise.all([system, eveScout]).then(searchJSON => {
      searchJSON[1].forEach(hole => {
        if (hole.destinationSolarSystem.regionId >= 11000000) {
          l.info(`${hole.destinationSolarSystem.name}: found a wormhole to wormhole`);
        } else {
          response.push(EveService.routes(searchJSON[0].solar_system[0], hole.destinationSolarSystem.id, 'shortest').then(routeJSON => ({
            jumps: routeJSON.length,
            system: hole.destinationSolarSystem.name,
            security: hole.destinationSolarSystem.security,
            region: hole.destinationSolarSystem.region.name,
            theraSide: hole.signatureId,
            systemSide: hole.wormholeDestinationSignatureId,
          })));
        }
      });
      return Promise.all(response);
    });
  }
}

export default new WormholeService();
