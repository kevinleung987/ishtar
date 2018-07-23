import EveService from './eve.service';

class MarketService {
  calculatePrice(priceJSON) {
    const price = {
      sell: { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, avg: 0 },
      buy: { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, avg: 0 },
    };
    let numSell = 0;
    let numBuy = 0;
    // Calculate the min, max, average sell and buy order prices
    priceJSON.forEach(element => {
      if (element.is_buy_order === false) {
        numSell += 1;
        price.sell.avg += element.price;
        if (element.price < price.sell.min) {
          price.sell.min = element.price;
        } else if (element.price > price.sell.max) {
          price.sell.max = element.price;
        }
      } else {
        numBuy += 1;
        price.buy.avg += element.price;
        if (element.price < price.buy.min) {
          price.buy.min = element.price;
        } else if (element.price > price.buy.max) {
          price.buy.max = element.price;
        }
      }
    });
    price.sell.avg /= numSell;
    price.buy.avg /= numBuy;
    return price;
  }

  getPriceByName(name, strict) {
    return EveService.search(name, strict, 'inventory_type').then(searchJSON => {
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
        requestList.push(EveService.orders(searchJSON.inventory_type[i]).then(priceJSON =>
          this.calculatePrice(priceJSON)));
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
  getPriceById(id) {
    // Get Price of the item
    return EveService.orders(id).then(priceJSON => this.calculatePrice(priceJSON));
  }
}

export default new MarketService();
