import { IExchangeAppService } from "../../application.contracts/exchange.contracts/IExchangeAppService";
import { ExchangeModel } from "../../application.domain/exchanges.domain/exchange.model";
import { HttpClient } from "../../Helper/HttpClient/HttpClient";

export class ExchangeAppService implements IExchangeAppService {
    Convert(from: string, to: string, value: number, exchangeModel: ExchangeModel): void {
        const values = Object.values(exchangeModel.rates);
        const keys = Object.keys(exchangeModel.rates);
        const value_from = values[keys.indexOf(from)];
        const value_to = values[keys.indexOf(to)];
        let converted_value = 0;
        if (to == 'USD') {
            converted_value = value * value_to;
        } 

        if(from == 'USD') {
            converted_value = value * value_to;
        }
    }

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