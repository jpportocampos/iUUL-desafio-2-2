import { OperationStatus } from "../controller/operation-code";
import ConversaoView from "../view/conversao-view";

export default class ConversaoPresenter {
    private controller: any;
    private view: ConversaoView;

    constructor(controller) {
        this.controller = controller;

        this.view = new ConversaoView();
    }

    public async run() {
        const data = this.view.readData();

        let result = this.controller.canConvert(data);

        if (result.status !== OperationStatus.SUCCESS) {
            this.view.process(result.status, result.errors);
        } else {
            let resultData = await this.controller.convert(data);

            if (resultData.status === OperationStatus.FAILURE) {
                this.view.process(resultData.status, resultData.errors);
            } else {
                this.view.listData(resultData);
            }
        }
    }
}