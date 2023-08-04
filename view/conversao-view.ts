import {
    OperationErrors,
    OperationStatus,
} from '../controller/operation-code';
import Input from '../utils/input.js';
import Output from '../utils/output.js';

export default class ConversaoView {
    private input: Input;
    private output: Output;
    private messages: Map<OperationErrors | OperationStatus, string>;

    constructor() {
        this.input = new Input();
        this.output = new Output();
        this.messages = new Map();

        this.setupMessages();
    }

    public readData() {
        const moedaOrigem = this.input.readString(
            'Moeda origem: ',
            'Moeda inválida',
            { capitalize: true }
        );

        const moedaDestino = this.input.readString(
            'Moeda destino: ',
            'Moeda inválida',
            { capitalize: true }
        );

        const valor = this.input.readFloat(
            'Valor: ',
            'Valor deve ser maior do que 0',
            { min: 0 }
        );

        return { moedaOrigem, moedaDestino, valor };
    }

    public listData(data) {
        this.output.writeLine("\n" + data.query.from + " " + parseFloat(data.query.amount).toFixed(2) + " => " + data.query.to + " " + parseFloat(data.result).toFixed(2));
        this.output.writeLine("Taxa: " + parseFloat(data.info.rate).toFixed(6));
    }

    public process(status, errors) {
        if (status === OperationStatus.SUCCESS) {
            this.output.writeLine('\nValores válidos');
        } else {
            this.output.writeLine('\nErro na conversão:');
            errors.forEach((error) => {
                this.output.writeLine(this.messages.get(error));
            });
        }
    }

    private setupMessages() {
        this.messages.set(
            OperationErrors.CURRENCY_IS_SAME,
            '- Moeda inválida. A moeda de destino deve ser diferente da moeda de origem.'
        );
        this.messages.set(
            OperationErrors.INVALID_CURRENCY,
            '- Moeda inválida. Deve ter 3 caracteres.'
        );
        this.messages.set(
            OperationErrors.INVALID_VALUE,
            '- Valor inválido. Deve ser maior do que zero'
        );
        this.messages.set(
            OperationErrors.API_ERROR,
            '- Ocorreu um erro de comunicação com a API de conversão.'
        );
        this.messages.set(
            OperationErrors.CONVERSION_ERROR,
            '- Ocorreu um erro na conversão do valor.'
        );
    }
}