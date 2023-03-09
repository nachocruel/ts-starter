import { IExchangeAppService } from "../../application.contracts/exchange.contracts/IExchangeAppService";
import { ExchangeModel } from "../../application.domain/exchanges.domain/exchange.model";
import { HttpClient } from "../../Helper/HttpClient/HttpClient";

export class ExchangeAppService implements IExchangeAppService {

    private httpClient = new HttpClient();
    async GetLatest(base: string): Promise<ExchangeModel> {
        try {
            const response = await this.httpClient.GetLatest('latest.json', base).then()
            return new ExchangeModel(response.data)
        } catch (error) {
            throw error;
        }
    }
}