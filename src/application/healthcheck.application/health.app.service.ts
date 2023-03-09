import { HealthCheck } from '../../application.domain/heathcheck.domain/health'
export default ():object => {
    const healCheck = new HealthCheck({health: "Health ok"})
    return Object.assign({}, healCheck);
}