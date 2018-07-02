import request from 'request-promise';
import l from '../../../common/logger';


class EveService {
  search(name, strict) {
    l.info('Search requested.');
    const options = {
      method: 'GET',
      url: 'https://esi.evetech.net/latest/search/',
      qs:
     {
       categories: 'inventory_type',
       datasource: 'tranquility',
       language: 'en-us',
       search: name,
       strict: String(strict),
     },
    };
    return request(options).then(res => JSON.parse(res));
  }
}

export default new EveService();
