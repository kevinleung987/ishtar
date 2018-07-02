import request from 'request-promise';

class EveService {
  search(name, strict) {
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

  types(typeID) {
    const options = {
      method: 'GET',
      url: `https://esi.evetech.net/latest/universe/types/${typeID}`,
      qs: { datasource: 'tranquility', language: 'en-us' },
    };
    return request(options).then(res => JSON.parse(res));
  }

  orders(typeID) {
    const options = {
      method: 'GET',
      url: 'https://esi.evetech.net/latest/markets/10000002/orders/',
      qs:
     {
       datasource: 'tranquility',
       order_type: 'all',
       page: '1',
       type_id: typeID,
     },
    };
    return request(options).then(res => JSON.parse(res));
  }
}

export default new EveService();
