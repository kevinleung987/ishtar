import request from 'request-promise';
import l from '../../../common/logger';
import EveService from '../eve/eve.service';

class MarketService {
  getPrice(name, strict) {
    l.info('Price Service Start');
    const priceRequest = EveService.search(name, strict)
      .then(searchJSON => {
        const itemList = [];
        for (let i = 0; i < searchJSON.inventory_type.length; i += 1) {
          const operations = [];
          const item = {
            id: searchJSON.inventory_type[i], name: null, group_id: null, price: null,
          };
          l.info(searchJSON.inventory_type[i]);
          // Get Name of the item
          const nameOptions = {
            method: 'GET',
            url: `https://esi.evetech.net/latest/universe/types/${searchJSON.inventory_type[i]}`,
            qs: { datasource: 'tranquility', language: 'en-us' },
          };
          operations.push(request(nameOptions).then(nameResp => {
            const nameJSON = JSON.parse(nameResp);
            l.info(nameJSON.name);
            return { name: nameJSON.name, group_id: nameJSON.group_id };
          }));
          // Get Price of the item
          const priceOptions = {
            method: 'GET',
            url: 'https://esi.evetech.net/latest/markets/10000002/orders/',
            qs:
           {
             datasource: 'tranquility',
             order_type: 'all',
             page: '1',
             type_id: searchJSON.inventory_type[i],
           },
          };
          operations.push(request(priceOptions).then(priceResp => {
            const price = { sell: Number.POSITIVE_INFINITY, buy: Number.NEGATIVE_INFINITY };
            const priceJSON = JSON.parse(priceResp);
            // Find lowest Sell and highest Buy in Jita
            priceJSON.forEach(element => {
              if (element.is_buy_order === false) {
                if (element.price < price.sell) {
                  price.sell = element.price;
                }
              } else if (element.price > price.buy) {
                price.buy = element.price;
              }
            });
            l.info(price);
            return price;
          }));
          itemList.push(Promise.all(operations).then(response => {
            const [typeInfo, itemPrice] = response;
            item.name = typeInfo.name;
            item.group_id = typeInfo.group_id;
            item.price = itemPrice;
            return item;
          }));
        }
        return Promise.all(itemList);
      });
    l.info('Price Service Done');
    return priceRequest;
  }
}

export default new MarketService();
