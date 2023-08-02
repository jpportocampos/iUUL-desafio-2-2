import Menu from '../view/menu';

export default class MenuPresenter {
    private controller: any;
    private view: Menu;

    constructor(controller) {
        this.controller = controller;

        this.view = new Menu();
    }

    run() {
        for (;;) {
            let option = this.view.getOption();

            switch (option) {
                case 1:
                    return;

                case 0:
                    this.controller.converteMoeda();
                    break;
            }
        }
    }
}