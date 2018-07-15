import * as express from 'express';
import controller from './controller';


export default express
  .Router()
  .get('/price/name', controller.priceByName)
  .get('/price/id', controller.priceById);
