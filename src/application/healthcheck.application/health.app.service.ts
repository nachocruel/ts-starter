import { HealthCheck } from '../../application.domain/heathcheck.domain/health'
export default ():object => {
    // In that example Just execute the return of the health (The health of an application could be more things, that can consume more time of processing)
    const healCheck = new HealthCheck({health: "Health ok"})
    return Object.assign({}, healCheck);
}