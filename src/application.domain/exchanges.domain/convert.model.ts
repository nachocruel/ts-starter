export class ConvertModel {
    value:number = 0;
    from:string = '';
    to:string = '';
    constructor(convertPlain:any = null) {
        if(convertPlain)
            Object.assign(this, convertPlain);
    }
}