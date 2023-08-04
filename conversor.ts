import MainController from './controller/main-controller';
import MenuPresenter from './presenter/menu-presenter';

(async function () {
    const controller = new MainController();

    const presenter = new MenuPresenter(controller);

    await presenter.run();
})();