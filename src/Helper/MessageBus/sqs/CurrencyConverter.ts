import { ConvertModel } from "../../../application.domain/exchanges.domain/convert.model";
import { ExchangeModel } from "../../../application.domain/exchanges.domain/exchange.model";
import { SendEmail } from "../../Email-Manarger/emailt";

const emailSender = new SendEmail();
export default (exchangeModel: ExchangeModel, from: string, to: string, value: number): void => {
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
            value * value_from :
            value / value_from;
    } else {
        // Convert to USD
        let usd_value = value_from < 1 ?
            value * value_from :
            value / value_from;

        // Conver from USD to 
        converted_value = value_from < value_to ?
            usd_value / value_to :
            usd_value * value_to;
    }

    const converted = new ConvertModel({
        from: from,
        to: to,
        value: converted_value
    })
    
    emailSender.SendEmail('test@example.com', converted)
}