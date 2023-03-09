export class HealthCheck {
    health:string = ''
    constructor(healthcheck:any = null) {
        if(healthcheck)
            Object.assign(this, healthcheck)
    }
}