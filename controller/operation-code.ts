export class OperationStatus {
    public static get SUCCESS() {
        return 1;
    }
    public static get FAILURE() {
        return 2;
    }
}

export class OperationErrors {
    public static get CURRENCY_IS_SAME() {
        return 1;
    }
    public static get INVALID_CURRENCY() {
        return 2;
    }
    public static get INVALID_VALUE() {
        return 3;
    }
    public static get API_ERROR() {
        return 4;
    }
    public static get CONVERSION_ERROR() {
        return 5;
    }
}