import { IExchangeAppService } from "../../application.contracts/exchange.contracts/IExchangeAppService";
import { ConvertModel } from "../../application.domain/exchanges.domain/convert.model";
import { ExchangeModel } from "../../application.domain/exchanges.domain/exchange.model";
import { HttpClient } from "../../Helper/HttpClient/HttpClient";

export class ExchangeAppService implements IExchangeAppService {
    _httpClient: HttpClient;
    constructor() {
        this._httpClient = new HttpClient();
    }

    Convert(from: string, to: string, value: number, exchangeModel: ExchangeModel): void {
        const values = Object.values(exchangeModel.rates);
        const keys = Object.keys(exchangeModel.rates);
        const value_from = values[keys.indexOf(from)];
        const value_to = values[keys.indexOf(to)];
        let converted_value = 0;
        if (from === 'USD') {
            converted_value = value_from < value_to ?
                value * value_to :
                value / value_to;
        } else if (to === 'USD') {
            converted_value = value_to > value_from ?
                value * value_from:
                value / value_from;
        } else {
            // Convert to USD
            let usd_value = value_from < 1?
             value * value_from:
             value / value_from;
            
             // Conver from USD to 
             converted_value = value_from < value_to?
             usd_value / value_to :
             usd_value * value_to;
        }

        const converModel = new ConvertModel({
            from: from, 
            to: to, 
            value: converted_value
        })
        console.log(Object.assign({}, converModel))
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