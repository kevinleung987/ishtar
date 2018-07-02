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
          // Get Name of the item
          operations.push(EveService.types(searchJSON.inventory_type[i]).then(nameJSON =>
            ({ name: nameJSON.name, group_id: nameJSON.group_id })));
          // Get Price of the item
          operations.push(EveService.orders(searchJSON.inventory_type[i]).then(priceJSON => {
            const price = { sell: Number.POSITIVE_INFINITY, buy: Number.NEGATIVE_INFINITY };
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
