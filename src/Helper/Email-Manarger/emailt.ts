import { ConvertModel } from "../../application.domain/exchanges.domain/convert.model";

export class SendEmail {
    SendEmail(email:string, convertModel:ConvertModel) {
        const email_content = {
            subject: "Your exchange conversion.",
            from: "no-replay@email.com",
            to: email,
            body: `The conversion result from ${convertModel.from} to ${convertModel.to} was ${convertModel.value}`
        }

        // Implente Send E-Mail
        console.log(email_content)
    }
}