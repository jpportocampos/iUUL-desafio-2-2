import Input from "../utils/input";

export default class Menu {
    private input: Input;

    public constructor() {
        this.input = new Input();
    }

    public getOption() {
        let exitOption: string = '';

        for (;;) {
            let choice = this.input = this.input.readString(
                'Bem-vindo ao conversor, digite qualquer coisa para prosseguir e nada para encerrar: ',
                'Insira um valor válido',
                { capitalize: true }
            );

            if (choice === exitOption) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}