import { Request, Response,  Router } from 'express';
import { CurrencyController } from '../controllers/currency.controller';
const _currencyController = new CurrencyController();

export default (router:Router): void => {
    router.get('/currency/:from/convert/:to/:value', (req:Request, res:Response): void => {
        _currencyController.Conver(req, res);
    })

    router.get('/currency/latest/:base', (req: Request, res:Response): void => {
        _currencyController.GetLatest(req, res);
    })
}
