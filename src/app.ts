/** Entry Point for Server Back-end */
import * as express from 'express';

const app = express()
  .use('/public', express.static(__dirname + '/public'))
  .get('/', (req, res) => {
    res.json({ message: 'nice!' });
  });

export default app;
