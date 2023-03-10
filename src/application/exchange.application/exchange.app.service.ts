import { IExchangeAppService } from "../../application.contracts/exchange.contracts/IExchangeAppService";
import { ConvertModel } from "../../application.domain/exchanges.domain/convert.model";
import { ExchangeModel } from "../../application.domain/exchanges.domain/exchange.model";
import { HttpClient } from "../../Helper/HttpClient/HttpClient";
import { SQSFactory } from "../../Helper/MessageBus/sqs/SQSFactory";

export class ExchangeAppService implements IExchangeAppService {
    _httpClient: HttpClient;
    constructor() {
        this._httpClient = new HttpClient();
    }

    // Send to convert in another application sending to msg bus
    Convert(from: string, to: string, value: number, exchangeModel: ExchangeModel): void {
        const converModel = new ConvertModel({from: from, to: to, value: value})
        const sqlMsg = SQSFactory.FactorySQSMessage();
        sqlMsg.SendMessage(converModel, exchangeModel);
    }

    // Get the latest (obs. works only with USD, because it is free plan)
    async GetLatest(base: string): Promise<ExchangeModel> {
        try {
            const response = await this._httpClient.
                GetLatest('latest.json', base).then()
            return new ExchangeModel(response.data)
        } catch (error) {
            throw error;
        }
    }
}