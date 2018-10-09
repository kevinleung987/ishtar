import request from 'request-promise'
import {
  userAgent,
  language
} from '../config'

class EveService {
  search (name, strict, category) {
    const options = {
      method: 'GET',
      uri: 'https://esi.evetech.net/latest/search/',
      qs: {
        categories: String(category),
        datasource: 'tranquility',
        language: language,
        search: name,
        strict: String(strict)
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => {
      if (res.length === 2) {
        throw new Error('no search results')
      }
      return JSON.parse(res)
    })
  }

  types (typeID) {
    const options = {
      method: 'GET',
      uri: `https://esi.evetech.net/latest/universe/types/${typeID}`,
      qs: {
        datasource: 'tranquility',
        language: language
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  orders (typeID) {
    const options = {
      method: 'GET',
      uri: 'https://esi.evetech.net/latest/markets/10000002/orders/',
      qs: {
        datasource: 'tranquility',
        order_type: 'all',
        page: '1',
        type_id: typeID
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  routes (src, dest, flag) {
    const options = {
      method: 'GET',
      uri: `https://esi.evetech.net/latest/route/${(src)}/${(dest)}`,
      qs: {
        datasource: 'tranquility',
        flag
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  characters (id) {
    const options = {
      method: 'GET',
      uri: `https://esi.tech.ccp.is/latest/characters/${(id)}`,
      qs: {
        datasource: 'tranquility'
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  alliances (id) {
    const options = {
      method: 'GET',
      uri: `https://esi.tech.ccp.is/latest/alliances/${(id)}`,
      qs: {
        datasource: 'tranquility'
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  corporations (id) {
    const options = {
      method: 'GET',
      uri: `https://esi.tech.ccp.is/latest/corporations/${(id)}`,
      qs: {
        datasource: 'tranquility'
      },
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  eveScout () {
    const options = {
      method: 'GET',
      uri: 'https://www.eve-scout.com/api/wormholes',
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }

  zkill (id) {
    const options = {
      method: 'GET',
      uri: `https://zkillboard.com/api/stats/characterID/${id}/`,
      headers: {
        'User-Agent': userAgent
      }
    }
    return request(options).then(res => JSON.parse(res))
  }
}

export default new EveService()
