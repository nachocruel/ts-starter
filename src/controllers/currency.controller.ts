import { Request, Response } from 'express';
import { IExchangeAppService } from '../application.contracts/exchange.contracts/IExchangeAppService';
import { FactoryApplication } from './factoryApplication';
export class CurrencyController {
    _iexchageAppService: IExchangeAppService;
    constructor() {
        this._iexchageAppService = FactoryApplication.FactoryExchengeApplication();
    }

    async GetLatest(req: Request, res: Response) {
        try {
            const exchange = await this._iexchageAppService.GetLatest(req.params['base']);
            res.status(200).json(Object.assign({}, exchange))
        } catch (error: any) {
            console.error(error.message);
            res.json({ error: error.message })
        }
    }

    async Conver(req: Request, res: Response) {
        try {
            req.params['base'] = 'USD';
            res.status(200).json({ sucess: true, message: `You shold receive an e-mail with you conversion from: 
            ${req.params['from']} to: ${req.params['to']} value: ${req.params['value']}` });

            // Continue to convert
            const exchange = await this._iexchageAppService.GetLatest(req.params['base']);
            this._iexchageAppService.Convert(req.params['from'], req.params['to'], Number(req.params['value']), exchange);
        } catch (error: any) {
            res.json({ error: error.message })
        }
    }
}