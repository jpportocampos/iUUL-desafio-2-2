export class OperationStatus {
    static get SUCCESS() {
        return 1;
    }
    static get FAILURE() {
        return 2;
    }
}

export class OperationErrors {
    static get CURRENCY_IS_SAME() {
        return 1;
    }
    static get INVALID_CURRENCY() {
        return 2;
    }
    static get INVALID_VALUE() {
        return 3;
    }
    static get API_ERROR() {
        return 4;
    }
    static get CONVERSION_ERROR() {
        return 5;
    }
}