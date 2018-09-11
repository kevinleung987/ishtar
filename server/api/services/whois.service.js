import request from 'request-promise';
import EveService from './eve.service';


class WhoIsService {
  whois(name) {
    const output = {};
    return EveService.search(name, true, 'character').then(searchResult => {
      console.log('test');
      return EveService.characters(searchResult.character[0]);
    });
  }
}

export default new WhoIsService();
