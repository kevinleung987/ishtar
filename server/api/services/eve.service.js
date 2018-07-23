import request from 'request-promise';


class EveService {
  search(name, strict, category) {
    const options = {
      method: 'GET',
      url: 'https://esi.evetech.net/latest/search/',
      qs:
     {
       categories: String(category),
       datasource: 'tranquility',
       language: 'en-us',
       search: name,
       strict: String(strict),
     },
    };

    return request(options).then(res => {
      if (res.length === 2) {
        throw new Error('no search results');
      }
      return JSON.parse(res);
    });
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

  eveScout() {
    const options = {
      method: 'GET',
      url: 'https://www.eve-scout.com/api/wormholes',
    };
    return request(options).then(res => JSON.parse(res));
  }
}

export default new EveService();