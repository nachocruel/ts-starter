import { Router, Request, Response } from 'express';
import healthController from '../controllers/healthcheck.controller';
export default (router:Router): void => {
  router.get('/', (req:Request, res:Response) => {
    healthController(req, res)
  })
}
