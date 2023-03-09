import { Rate } from '../rates.domain/rate';

export class ExchangeModel {
    constructor(exchangeplain:any = null) {
        if(exchangeplain)
        {
            Object.assign(this, exchangeplain);
            this.rates = new Rate(exchangeplain.rates);
        }
    }

    disclaimer:string = ''
    license:string = ''
    timestamp:number = 0
    base:string = ''
    rates:Rate = new Rate()
}