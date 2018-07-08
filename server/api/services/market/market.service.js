import EveService from '../eve/eve.service';

class MarketService {
  calculatePrice(json) {
    const price = { sell: Number.POSITIVE_INFINITY, buy: Number.NEGATIVE_INFINITY };
    // Find lowest Sell and highest Buy in Jita
    json.forEach(element => {
      if (element.is_buy_order === false) {
        if (element.price < price.sell) {
          price.sell = element.price;
        }
      } else if (element.price > price.buy) {
        price.buy = element.price;
      }
    });
    return price;
  }

  getPrice(name, strict) {
    return EveService.search(name, strict).then(searchJSON => {
      const itemList = [];
      for (let i = 0; i < searchJSON.inventory_type.length; i += 1) {
        const requestList = [];
        const item = {
          id: searchJSON.inventory_type[i], name: null, group_id: null, price: null,
        };
          // Get Name of the item
        requestList.push(EveService.types(searchJSON.inventory_type[i]).then(nameJSON =>
          ({ name: nameJSON.name, group_id: nameJSON.group_id })));
        // Get Price of the item
        requestList.push(EveService.orders(searchJSON.inventory_type[i]).then(priceJSON => this.calculatePrice(priceJSON)));
        // Once both requests have finished, assemble the item object
        itemList.push(Promise.all(requestList).then(response => {
          const [typeInfo, itemPrice] = response;
          item.name = typeInfo.name;
          item.group_id = typeInfo.group_id;
          item.price = itemPrice;
          return item;
        }));
      }
      return Promise.all(itemList);
    });
  }
}

export default new MarketService();
