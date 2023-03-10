import { Message, Squiss } from 'squiss-ts';
import { ConvertModel } from '../../../application.domain/exchanges.domain/convert.model';
import { ExchangeModel } from '../../../application.domain/exchanges.domain/exchange.model';
import { ISQSMessage } from './ISQSMessage';
import CurrencyConverter from './CurrencyConverter';


export class SQSMessage implements ISQSMessage {
    squiss;
    constructor() {
        const awsConfig = {
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            region: process.env.REGION,
            endpoint: process.env.SQS_ENDPOINT
        }

        this.squiss = new Squiss({
            awsConfig,
            queueName: process.env.QUEUE_NAME,
            bodyFormat: 'json',
            maxInFlight: 15
        });
    }

    // This message await shold be running in another Application (The receaver are just to simplicity)
    AwaitMessage(): void {
        this.squiss.on('message', (message: Message) => {
            console.log(`${message.body.name} says: ${JSON.stringify(message.body.message)}`);

            if (message.body.name === 'ExchangeConvert') {
                const convertModel = new ConvertModel(message.body.message.convert);
                const exchange = new ExchangeModel(message.body.message.convert);
                CurrencyConverter(exchange, convertModel.from, convertModel.to, convertModel.value);
            }
            message.del();
        });
    }

    SendMessage(convertModel: ConvertModel, exchange: ExchangeModel): void {
        const messageToSend = {
            name: 'ExchangeConvert',
            message: { convert: Object.assign({}, convertModel), exchange: Object.assign(exchange) },
        }
        
        this.squiss.sendMessage(messageToSend, 0, {}).then((data) => {
            console.log(data.MessageId);
        }).catch(error => console.error(console.error(error)));
    }
}