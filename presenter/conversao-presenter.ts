import { OperationStatus } from "../controller/operation-code";
import ConversaoView from "../view/conversao-view";

export default class ConversaoPresenter {
    private controller: any;
    private view: ConversaoView;

    constructor(controller) {
        this.controller = controller;

        this.view = new ConversaoView();
    }

    run() {
        const data = this.view.readData();

        let result = this.controller.canConvert(data);

        if (result.status !== OperationStatus.SUCCESS) {
            this.view.process(result.status, result.errors);
        } else {
            let resultData = this.controller.convert(data);

            this.view.listData(resultData);
        }
    }
}