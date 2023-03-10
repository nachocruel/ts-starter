import { SQSMessage } from "./SQSMessage";

export class SQSFactory {
    static FactorySQSMessage() {
        return new SQSMessage();
    }
}