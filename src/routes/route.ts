import { Express, Router } from 'express';
import health from './health-check';
import currency from './route-currency';

export default (app: Express): void => {
  const router = Router();
  currency(router);
  health(router);
  app.use(router);
};
