import marketRouter from './api/controllers/market/router';
import wormholeRouter from './api/controllers/wormhole/router';
import l from './common/logger';

export default function routes(app) {
  app.use('/api/market', marketRouter);
  app.use('/api/wormhole', wormholeRouter);
  // Custom error-handling middleware that forwards the call-stack back to Ishtar
  app.use((err, req, res, next) => {
    l.error('Error start:');
    l.error(err);
    res.status(501).json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  });
}
