import { ExchangeAppService } from "../application/exchange.application/exchange.app.service";

export class FactoryApplication {
    static FactoryExchengeApplication = () => {
        return new ExchangeAppService();
    }
}