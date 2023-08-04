import ConversaoController from "./conversao-controller";
import ConversaoPresenter from "../presenter/conversao-presenter";

export default class MainController {
    public async converteMoeda() {
        const controller = new ConversaoController();

        const presenter = new ConversaoPresenter(controller);

        await presenter.run();
    }
}