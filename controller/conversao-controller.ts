import {
    OperationErrors,
    OperationStatus,
} from '../controller/operation-code.js';
import { validaMoeda } from '../utils/moeda.js';
import Conversao from '../model/conversao.js';

export default class InclusaoPacienteController {
    public canConvert = (data) =>
        data.moedaOrigem == data.moedaDestino ? { status: OperationStatus.FAILURE, errors: [OperationErrors.CURRENCY_IS_SAME] }
            : !validaMoeda(data.moedaOrigem) || !validaMoeda(data.moedaDestino)
                ? { status: OperationStatus.FAILURE, errors: [OperationErrors.INVALID_CURRENCY] }
                : data.valor < 0 ? { status: OperationStatus.FAILURE, errors: [OperationErrors.INVALID_VALUE] }
                    : { status: OperationStatus.SUCCESS };

    public async convert(data) {
        let result = this.canConvert(data);

        if (result.status !== OperationStatus.SUCCESS) {
            return { status: result.status, errors: result.errors };
        } else {
            let resultado = await this.getConversao(data).then((resultado) => { return resultado });
            result = this.resultIsValid(resultado);
            if (result.status !== OperationStatus.SUCCESS) {
                return { status: result.status, errors: result.errors };
            } else {
                return resultado;
            }
        }
    }

    private resultIsValid = (data) =>
        data === undefined ? { status: OperationStatus.FAILURE, errors: [OperationErrors.API_ERROR] }
            : typeof data.info.rate === null || typeof data.result === null ? { status: OperationStatus.FAILURE, errors: [OperationErrors.CONVERSION_ERROR] }
                : { status: OperationStatus.SUCCESS };

    private getConversao(data): Promise<Conversao> {
        var requestURL = 'https://api.exchangerate.host/convert?from=' + data.moedaOrigem + '&to=' + data.moedaDestino + '&amount=' + data.valor;
        return fetch(requestURL, { method: 'GET' })
            .then((response) => response.json())
            .then((response) => {
                return response as Conversao;
            });
    }
}