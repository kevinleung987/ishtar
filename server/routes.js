import marketRouter from './api/controllers/market/router';
import l from './common/logger';

export default function routes(app) {
  app.use('/api/market', marketRouter);
  // Custom error-handling middleware that forwards the call-stack back to Ishtar
  app.use((err, req, res, next) => {
    l.error(err);
    res.status(501).json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  });
}
