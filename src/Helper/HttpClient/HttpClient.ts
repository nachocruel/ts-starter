import axios from "axios";

export class HttpClient {
    private OPEN_EXCHANGE_URL = process.env.OPEN_EXCHANGE_URL;
    private OPEN_EXCHANGE_APP_ID = process.env.OPEN_EXCHANGE_APP_ID;
    GetLatest(route: string, base: string) {
        return axios({
            method: 'get',
            responseType: 'json',
            params: { base: base },
            url: `${this.OPEN_EXCHANGE_URL}/${route}`,
            headers: { 'Authorization': this.OPEN_EXCHANGE_APP_ID }
        })
    }
}