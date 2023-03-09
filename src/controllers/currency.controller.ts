import { Request, Response } from 'express';
import { IExchangeAppService } from '../application.contracts/exchange.contracts/IExchangeAppService';
import { FactoryApplication } from './factoryApplication';
export class CurrencyController {
    _iexchageAppService:IExchangeAppService;
    constructor() {
        this._iexchageAppService = FactoryApplication.FactoryExchengeApplication();
    }

    async GetLatest(req:Request, res:Response) {
        try {
            const exchange = await this._iexchageAppService.GetLatest(req.params['base']);
            res.status(200).json(Object.assign({}, exchange))
        } catch (error:any) {
            console.error(error.message);
            res.json({error: error.message})
        }
    }
}