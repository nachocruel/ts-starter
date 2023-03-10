import { ConvertModel } from "../../../application.domain/exchanges.domain/convert.model";
import { ExchangeModel } from "../../../application.domain/exchanges.domain/exchange.model";

export interface ISQSMessage {
    AwaitMessage():void;
    SendMessage(convertModel:ConvertModel, exchange:ExchangeModel):void
}