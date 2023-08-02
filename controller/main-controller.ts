import ConversaoController from "./conversao-controller";
import ConversaoPresenter from "../presenter/conversao-presenter";

export default class MainController {
    converteMoeda() {
        const controller = new ConversaoController();

        const presenter = new ConversaoPresenter(controller);

        presenter.run();
    }
}