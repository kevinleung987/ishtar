/** Express Server Module */
import * as express from 'express';

const app = express()
  .use('/', express.static(`${__dirname}/public`))
  .get('/api/test', (req, res) => {
    res.json({ message: 'nice!' });
  });

export default app;
