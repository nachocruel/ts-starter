import { ExchangeModel } from "../../application.domain/exchanges.domain/exchange.model";

export interface IExchangeAppService {
     GetLatest(base:string):Promise<ExchangeModel>;
     Convert(from:string, to:string, value:number, exchangeModel:ExchangeModel):void;
}