import {Request, Response} from 'express';
import heal_service from '../application/healthcheck.application/health.app.service'
export default (req: Request, res: Response) => {
    res.status(200).json(heal_service())
}