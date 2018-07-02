import request from 'request-promise';
import * as express from 'express';
import controller from './controller';


export default express
  .Router()
  .get('/getPrice', controller.getPrice)
  .get('/test', (req, res) => {
    const requestList = [];

    for (let i = 0; i < 5; i += 1) {
      const options = {
        method: 'GET',
        uri: 'http://localhost:4000',
        qs: {
          id: i,
        },
      };
      requestList.push(request(options).then(resp => JSON.parse(resp).id));
    }
    Promise.all(requestList).test().then(r => res.json(r));
  });
