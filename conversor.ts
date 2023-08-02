import MainController from './controller/main-controller';
import MenuPresenter from './presenter/menu-presenter';

(function () {
    const controller = new MainController();

    const presenter = new MenuPresenter(controller);

    presenter.run();
})();