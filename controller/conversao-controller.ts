import {
    OperationErrors,
    OperationStatus,
} from '../controller/operation-code.js';
import { validaMoeda } from '../utils/moeda.js';

export default class InclusaoPacienteController {
    canConvert = (data) =>
        data.moedaOrigem == data.moedaDestino ? { status: OperationStatus.FAILURE, erros: [OperationErrors.CURRENCY_IS_SAME] }
            : validaMoeda(data.moedaOrigem) && validaMoeda(data.moedaDestino)
                ? { status: OperationStatus.SUCCESS }
                : {
                    status: OperationStatus.FAILURE,
                    errors: [OperationErrors.INVALID_CURRENCY],
                };

    convert(data) {
        let result = this.canConvert(data);

        if (result.status !== OperationStatus.SUCCESS) {
            return { status: result.status, errors: result.errors };
        } else {
            return true;
        }
    }
}